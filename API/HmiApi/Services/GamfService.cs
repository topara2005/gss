using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using HmiApi.Enums;
using HmiApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace HmiApi.Services{
    public class GamfService : BaseService{
        public GamfService(HmiApiDbContext context) : base(context){
        }
        public ViewModels.FileImport GetImportStatus(string fileName){
            var fileImport = context.FileImport.FirstOrDefault(fi => fi.FileName.Substring(0,fi.FileName.LastIndexOf(".")) == fileName);
            var fileImportUserHelicopter = context.FileImportUserHelicopter.FirstOrDefault(fiuh => fiuh.FileImportId == fileImport.Id);
            var helicopter = context.Helicopter.FirstOrDefault(h => h.Id == fileImportUserHelicopter.HelicopterId);
            var fileImportVm = new ViewModels.FileImport();
            fileImportVm.DestinationApplication = fileImport.DestinationApplication;
            fileImportVm.FileName = fileImport.FileName;
            fileImportVm.FileType = fileImport.FileType;
            fileImportVm.HCSerialNumber = helicopter.SerialNumber;
            fileImportVm.HCType = helicopter.Type;
            fileImportVm.Priority = fileImport.Priority;
            fileImportVm.SourceApplication = fileImport.SourceApplication;
            fileImportVm.Status = fileImport.Status;
            return fileImportVm;
        }
        public void AddFileImport(string fileImport, string token){
            try{
                var fileImportVM = JsonConvert.DeserializeObject<ViewModels.FileImport>(fileImport);
                var filePath = "/AISD_REPO/"+fileImportVM.HCType+"/"+fileImportVM.HCSerialNumber+"/to_be_imported/"+fileImportVM.FileName+".meta";
                var metadata = System.Text.Encoding.UTF8.GetBytes(JToken.Parse(fileImport).ToString());
                var fs = System.IO.File.Create(filePath);
                fs.Write(metadata,0,metadata.Length);
                fs.Close();
                var userId = int.Parse(token.Substring(0, token.IndexOf(":")));
                var user = context.User.FirstOrDefault(u => u.Id == userId && u.IsActive);
                var helicopter = context.Helicopter.FirstOrDefault(h => h.SerialNumber == fileImportVM.HCSerialNumber && h.Type == fileImportVM.HCType && h.IsActive);
                var newFileImport = new FileImport(){
                    FileName = fileImportVM.FileName,
                    FileType = fileImportVM.FileType,
                    DestinationApplication = fileImportVM.DestinationApplication,
                    SourceApplication = fileImportVM.SourceApplication,
                    Priority = fileImportVM.Priority,
                    Status = Status.NotReady,
                    IsActive = true
                    };    
                context.Add(newFileImport);
                var fileImportUserHelicopter = new FileImportUserHelicopter();
                fileImportUserHelicopter.FileImport = newFileImport;
                fileImportUserHelicopter.Helicopter = helicopter;
                fileImportUserHelicopter.User = user;
                context.Add(fileImportUserHelicopter);
                context.SaveChanges();
            }
            catch(Exception ex){
                Console.WriteLine(ex.Message);
            }
        }
        // public List<FileImport> GetExportList(ViewModels.QueryExport queryExport){
        //     var listOfFiles = Directory.EnumerateFiles("/AISD_REPO/"+quer)
        // }
        public string ExtractFileName(string file){
            var withoutMeta = file.Substring(file.LastIndexOf("/")+1,file.IndexOf(".meta") - file.LastIndexOf("/")-1);
            if(withoutMeta.IndexOf(".") != 0){//there is extension
                var withoutExtension = withoutMeta.Substring(0,withoutMeta.LastIndexOf("."));
                return withoutExtension;
            }
            return withoutMeta;
        }
    }
}