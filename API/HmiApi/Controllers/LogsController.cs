using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using HmiApi.Models;
using HmiApi.Enums;
using HmiApi.ViewModels;
using HmiApi.Extensions;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using HmiApi.Services;

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class LogsController : BaseController
    {
        private readonly LogService logService;
        public LogsController(HmiApiDbContext context) : base(context){
            logService = new LogService(context);
        }
        // GET api/v1/logs/helicopters?to=&from=&logType=&helicopterId=
        [HttpGet("helicopters")]
        public ActionResult GetHelicopterLogs([FromQueryAttribute]DateTime to,[FromQueryAttribute]DateTime from, [FromQueryAttribute]LogType logType, [FromQueryAttribute]int helicopterId)
        //IEnumerable<ViewModels.HelicopterLog>
        {
            if(Request.AllowRequest()){
                var helicopterLog = new HelicopterLog(){HelicopterId = helicopterId, LogType = logType, InitialDate = from, FinalDate = to};
                return Ok(logService.GetHelicopterLogs(helicopterLog));
            }
            return Unauthorized();
        }
        // GET api/v1/logs/gss
        [HttpGet("gss")]
        public ActionResult GetGssLogs([FromQueryAttribute]DateTime to,[FromQueryAttribute]DateTime from, [FromQueryAttribute]LogType logType)
        //IEnumerable<ViewModels.GssLog>
        {
            if(Request.AllowRequest()){
                var gssLog = new GssLog(){LogType = logType, InitialDate = from, FinalDate = to};
                return Ok(logService.GetGssLogs(gssLog));
            }
            return Unauthorized();
        }
    }
}
