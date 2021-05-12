using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using HmiApi.Models;
using HmiApi.Services;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace HmiApi.Communication{
    public class Link{
        public Link(){

        }
        public void CreateDirectorLink(){
            Thread directorThread = new Thread(new ThreadStart(ListenRequests));
            directorThread.Start();
        }
        public void ListenRequests(){
            var files = Directory.GetFiles("/");
            var jsonString = files.Where(f => f == "/HmiConfig.json").Select(f => File.ReadAllText(f)).ElementAt(0);
            var configClass = new {ip="",port=0};
            var configObject = JsonConvert.DeserializeAnonymousType(jsonString, configClass);
            TcpListener tcpListener = new TcpListener(IPAddress.Parse(configObject.ip), configObject.port);  
            tcpListener.Start();  
            var isRunning = true;
            while(isRunning){
                TcpClient tcpClient = tcpListener.AcceptTcpClient();  
    
                NetworkStream networkStream = tcpClient.GetStream();  
                byte[] readBuffer = new byte[tcpClient.ReceiveBufferSize];
                int bytesRead = 0;
                bytesRead = networkStream.Read(readBuffer, 0, readBuffer.Length);
                var memStream = new MemoryStream();
                memStream.Write(readBuffer, 0, bytesRead);
                string dataCaptured = System.Text.Encoding.UTF8.GetString(memStream.ToArray());
                if(dataCaptured.IndexOf("GETLIST") == 0){
                    var options = new DbContextOptions<HmiApiDbContext>();
                    var builder = new DbContextOptionsBuilder<HmiApiDbContext>(options);
                    builder.UseNpgsql(connectionString:"Host=localhost;Port=5432;Database=Hmi;User ID=gcota;Password=hmiapi");
                    var helicopterService = new HelicopterService(new HmiApiDbContext(builder.Options));
                    var helicopterList = helicopterService.GetHelicopters();
                    var listOfSerials = helicopterService.GetSerialNumbers(ref helicopterList);
                    Byte[] data = System.Text.Encoding.ASCII.GetBytes(listOfSerials);
                    networkStream.Write(data, 0, data.Length);
                }
            }
            // tcpClient.Close();  
            tcpListener.Stop();   
        }
    }
}