using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using HmiApi.Models;
using HmiApi.ViewModels;
using Newtonsoft.Json;

namespace HmiApi.Services{
    public class HelicopterService : BaseService{
        public HelicopterService(HmiApiDbContext context) : base(context){
        }
        public Models.Helicopter GetHelicopter(int id){
            return context.Helicopter.FirstOrDefault(h => h.IsActive && h.Id == id);
        }
        public void AddHelicopter(string helicopter){
            try{
                var helicopterVM = JsonConvert.DeserializeObject<ViewModels.Helicopter>(helicopter);
                var newHelicopter = new Models.Helicopter{Id=0, CreationDate=DateTime.UtcNow, Type=helicopterVM.Type, SerialNumber=helicopterVM.SerialNumber, IsActive=true};
                context.Helicopter.Add(newHelicopter);
                if(context.SaveChanges() != 0){
                    CreateDirectory(newHelicopter);
                }
            }
            catch(Exception ex){
                Console.WriteLine(ex.Message);
            }
        }
        public bool UpdateHelicopter(int helicopterId, ViewModels.Helicopter helicopterVM){
            var helicopterToBeUpdated = context.Helicopter.FirstOrDefault(h => h.IsActive && h.Id == helicopterId);
            if(helicopterToBeUpdated == null){
                return false;
            }
            var tempType = helicopterToBeUpdated.Type;
            var tempSerialNumber = helicopterToBeUpdated.SerialNumber;
            helicopterToBeUpdated.Type = helicopterVM.Type;
            helicopterToBeUpdated.SerialNumber = helicopterVM.SerialNumber;
            context.Helicopter.Update(helicopterToBeUpdated);
            if(context.SaveChanges() != 0){
                ChangeDirectoryNames(tempType, helicopterVM.Type, tempSerialNumber, helicopterVM.SerialNumber);
                return true;
            }
            return false;
        }
        private void ChangeDirectoryNames(string oldType, string newType, string oldSerialNumber, string newSerialNumber){
            Directory.Move("/AISD_REPO/"+oldType+"/"+oldSerialNumber,"/AISD_REPO/"+oldType+"/"+newSerialNumber);
            Directory.Move("/AISD_REPO/"+oldType,"/AISD_REPO/"+newType);
        }
        public List<ViewModels.Helicopter> GetHelicopters(){
            var helicopters = new List<ViewModels.Helicopter>();
            if(context.Helicopter.Any()){
                foreach(var helicopter in context.Helicopter.Where(h => h.IsActive)){
                    var newHelicopter = new ViewModels.Helicopter{Id=helicopter.Id, Type=helicopter.Type, SerialNumber=helicopter.SerialNumber, WACSHealth="", InterfaceStatus="", LastKnownLocation=new Location{Latitude=1,Longitude=-1}};
                    helicopters.Add(newHelicopter);
                }
            }
            return helicopters;
        }
        public void CompleteHelicoptersInfo(ref List<ViewModels.Helicopter> helicopters){
            if(helicopters != null && helicopters.Count != 0){
                string helicoptersInfo = GetHelicoptersInfo(helicopters);
                AppendHelicopterInfo(ref helicopters, helicoptersInfo);
            }
        }
        private string GetHelicoptersInfo(List<ViewModels.Helicopter> listOfHelicopters)
        {
            string serialNumbers = GetSerialNumbers(ref listOfHelicopters);
            string message = "GETHCSTATUS " + serialNumbers;
            Byte[] data = System.Text.Encoding.ASCII.GetBytes(message);
            TcpClient client = new TcpClient("10.1.0.8", 800);
            NetworkStream stream = client.GetStream();

            stream.Write(data, 0, data.Length);
            Console.WriteLine("Sent: {0}", message);

            var memStream = new MemoryStream();
            byte[] readBuffer = new byte[client.ReceiveBufferSize];
            int bytesRead = 0;
            string helicoptersInfo = null;
            bytesRead = stream.Read(readBuffer, 0, readBuffer.Length);

            memStream.Write(readBuffer, 0, bytesRead);
            helicoptersInfo = System.Text.Encoding.UTF8.GetString(memStream.ToArray());

            // Close everything.
            stream.Close();
            client.Close();
            return helicoptersInfo;
        }
        private void AppendHelicopterInfo(ref List<ViewModels.Helicopter> helicopters, string helicoptersInfo){
            var helicoptersInfoArray = new[] { new { ACSHealth = "", LastKnownLocation = "", SerialNumber = "", Status = "" } };
            var helicoptersInfoObjects = JsonConvert.DeserializeAnonymousType(helicoptersInfo, helicoptersInfoArray);

            foreach(var helicopter in helicopters){
                var helicopterFromArray = helicoptersInfoObjects[helicopters.IndexOf(helicopter)];
                var lastKnownLocationString = helicopterFromArray.LastKnownLocation;
                var positionOfLeft = lastKnownLocationString.IndexOf("(")+1;
                var positionOfComma = lastKnownLocationString.IndexOf(",")+1;
                var positionOfRight = lastKnownLocationString.IndexOf(")")+1;

                helicopter.InterfaceStatus = helicopterFromArray.Status;
                helicopter.WACSHealth = helicopterFromArray.ACSHealth;
                try{
                var latitude = double.Parse(lastKnownLocationString.Substring(positionOfLeft, positionOfComma-positionOfLeft-1).Trim());
                var longitude = double.Parse(lastKnownLocationString.Substring(positionOfComma, positionOfRight-positionOfComma-1));
                helicopter.LastKnownLocation=new Location{ Latitude = latitude, Longitude = longitude };
                }
                catch(Exception ex){
                    Console.WriteLine(ex.Message);
                }
            }
        }
        private string run_cmd(string cmd, string args)
        {
            ProcessStartInfo start = new ProcessStartInfo();
            start.FileName = "/usr/bin/python";
            start.Arguments = string.Format("\"{0}\" \"{1}\"", cmd, args);
            start.UseShellExecute = false;// Do not use OS shell
            start.CreateNoWindow = true; // We don't need new window
            start.RedirectStandardOutput = true;// Any output, generated by application will be redirected back
            start.RedirectStandardError = true; // Any error in standard output will be redirected back (for example exceptions)
            using (Process process = Process.Start(start))
            {
                using (StreamReader reader = process.StandardOutput)
                {
                    string stderr = process.StandardError.ReadToEnd(); // Here are the exceptions from our Python script
                    string result = reader.ReadToEnd(); // Here is the result of StdOut(for example: print "test")
                    return result;
                }
            }
        }
        public string GetSerialNumbers(ref List<ViewModels.Helicopter> helicopterList){
            string serialNumbers = "";
            foreach (var helicopter in helicopterList)
            {
                serialNumbers += (helicopter.SerialNumber + "@");
            }
            return serialNumbers;
        }
        private void CreateDirectory(Models.Helicopter helicopter){
            if(!Directory.Exists("/AISD_REPO/EC120/"+helicopter.SerialNumber)){
                Directory.CreateDirectory("/AISD_REPO/EC120/"+helicopter.SerialNumber);
                Directory.CreateDirectory("/AISD_REPO/EC120/"+helicopter.SerialNumber+"/ds_log");
                Directory.CreateDirectory("/AISD_REPO/EC120/"+helicopter.SerialNumber+"/log");
                Directory.CreateDirectory("/AISD_REPO/EC120/"+helicopter.SerialNumber+"/just_exported");
                Directory.CreateDirectory("/AISD_REPO/EC120/"+helicopter.SerialNumber+"/to_be_imported");
            }
        }
    }
}