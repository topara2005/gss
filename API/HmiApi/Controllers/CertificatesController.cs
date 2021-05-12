using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using HmiApi.Models;
using HmiApi.Enums;
using HmiApi.ViewModels;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using HmiApi.Services;
using HmiApi.Extensions;

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class CertificatesController : BaseController
    {
        private readonly CertificateService certificateService;
        public CertificatesController(HmiApiDbContext context) : base(context) => certificateService = new CertificateService(context);
        // GET api/v1/certificates/wacs
        [HttpGet("wacs")]
        public ActionResult GetWacsCertificates(){
            //IEnumerable<ViewModels.WacsCertificate>
            if(Request.AllowRequest()){
                return Ok(certificateService.GetWacsCertificates());
            }
            return Unauthorized();
        }
        // GET api/v1/certificates/gss
        [HttpGet("gss")]
        public ActionResult GetGssCertificates(){
            //IEnumerable<ViewModels.GssCertificate>
            if(Request.AllowRequest()){
                return Ok(certificateService.GetGssCertificates());
            }
            return Unauthorized();
        }
    }
}