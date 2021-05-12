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

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class ImportsController : BaseController
    {
        private readonly ImportsService importsService;
        public ImportsController(HmiApiDbContext context) : base(context){
            importsService = new ImportsService(context);
        }
        // GET api/v1/imports/45ffgr5
        [HttpGet("{id}")]
        public ActionResult Get(string id)
        //ViewModels.FileImport
        {
            if(Request.AllowRequest()){
                var fileImport = importsService.GetImportStatus(id);
                return Ok(fileImport);
            }
            return Unauthorized();
        }
        // POST api/v1/imports
        [HttpPost]
        public ActionResult CreateMetaData([FromBody] string fileImport)
        //void
        {
            if(Request.AllowRequest()){
                var token = (string)Request.Headers["Authorization"];
                importsService.AddFileImport(fileImport, token);
                return Ok();
            }
            return Unauthorized();
        }
        // POST api/v1/imports/id
        [HttpPost("{id}")]
        public async Task<IActionResult> PostFiles(ICollection<IFormFile> files, string id){
            if(Request.AllowRequest()){
                // var userId = int.Parse(token.Substring(0, token.IndexOf(":")));

                var listOfTypes = Directory.EnumerateDirectories("/AISD_REPO").Where(dir => dir != "/AISD_REPO/GCS");
                foreach(var type in listOfTypes){
                    var listOfSerialNumbers = Directory.EnumerateDirectories(type);
                    foreach(var serialNumber in listOfSerialNumbers){
                        var listOfFiles = Directory.EnumerateFiles(serialNumber+"/to_be_imported");
                        foreach(var file in listOfFiles){
                            var fileName = importsService.ExtractFileName(file);
                            if(fileName == id){
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