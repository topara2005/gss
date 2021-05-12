using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using HmiApi.Models;
using HmiApi.Services;
using HmiApi.Extensions;
using HmiApi.ViewModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class GamfController : BaseController
    {
        private readonly GamfService gamfService;
        public GamfController(HmiApiDbContext context) : base(context){
            gamfService = new GamfService(context);
        }
        // // GET api/v1/gamf
        // [HttpGet]
        // public ActionResult Get([FromQuery]string destinationApplication, [FromQuery]string fileName,[FromQuery]DateTime from, [FromQuery]DateTime to, [FromQuery]string priority , [FromQuery]string fileType , [FromQuery]string destinationDomain , [FromQuery]string sourceApplication)
        // //ViewModels.FileImport
        // {
        //     if(Request.AllowRequest()){
        //         var queryExport = new QueryExport(){
        //             DestinationApplication = destinationApplication,
        //             FileName = fileName,
        //             From = from,
        //             To = to,
        //             Priority = priority,
        //             FileType = fileType,
        //             SourceApplication = sourceApplication,
        //             DestinationDomain = destinationApplication
        //         };
        //         var fileImport = gamfService.GetExportList(queryExport);
        //         return Ok(fileImport);
        //     }
        //     return Unauthorized();
        // }
        // GET api/v1/gamf/status
        [HttpGet("status")]
        public ActionResult Get([FromQuery]string helicopterId)
        //ViewModels.FileImport
        {
            if(Request.AllowRequest()){
                var fileImport = gamfService.GetImportStatus(helicopterId);
                return Ok(fileImport);
            }
            return Unauthorized();
        }
        // POST api/v1/gamf/meta
        [HttpPost("meta")]
        public ActionResult CreateMetaData([FromBody] string fileImport)
        //void
        {
            if(Request.AllowRequest()){
                var token = (string)Request.Headers["Authorization"];
                gamfService.AddFileImport(fileImport, token);
                return Ok();
            }
            return Unauthorized();
        }
        // POST api/v1/gamf/import
        [HttpPost]
        public async Task<IActionResult> PostFiles(ICollection<IFormFile> files, [FromQuery]string helicopterId){
            if(Request.AllowRequest()){
                // var userId = int.Parse(token.Substring(0, token.IndexOf(":")));

                var listOfTypes = Directory.EnumerateDirectories("/AISD_REPO").Where(dir => dir != "/AISD_REPO/GCS");
                foreach(var type in listOfTypes){
                    var listOfSerialNumbers = Directory.EnumerateDirectories(type);
                    foreach(var serialNumber in listOfSerialNumbers){
                        var listOfFiles = Directory.EnumerateFiles(serialNumber+"/to_be_imported");
                        foreach(var file in listOfFiles){
                            var fileName = gamfService.ExtractFileName(file);
                            if(fileName == helicopterId){
                                foreach (var formFile in files){
                                    if (formFile.Length > 0)
                                    {
                                        using (var stream = new FileStream(file.Substring(0,file.IndexOf(".meta")), FileMode.Create))
                                        {
                                            await formFile.CopyToAsync(stream);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return Unauthorized();
        }
    }
}