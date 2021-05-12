using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using HmiApi.Models;
using HmiApi.ViewModels;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;
using HmiApi.Services;
using HmiApi.Extensions;
using System;
using System.Net;

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class HelicoptersController : BaseController
    {
        private readonly HelicopterService helicopterService;
        public HelicoptersController(HmiApiDbContext context) : base(context)
        {
            helicopterService = new HelicopterService(context);
        }
        // GET api/v1/helicopters
        [HttpGet]
        public ActionResult Get()
        //IEnumerable<ViewModels.Helicopter>
        {
            if(Request.AllowRequest()){
                var listOfHelicopters = helicopterService.GetHelicopters();
                if(listOfHelicopters != null){
                    helicopterService.CompleteHelicoptersInfo(ref listOfHelicopters);
                    return Ok(listOfHelicopters);
                }
                throw new Exception("No helicopters in th");
            }
            return Unauthorized();
        }
        // GET api/v1/helicopters/1
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        //ViewModels.Helicopter
        {
            if(Request.AllowRequest()){
                var helicopter = helicopterService.GetHelicopter(id);
                var helicopterVM = new ViewModels.Helicopter{Id=helicopter.Id, Type=helicopter.Type, SerialNumber=helicopter.SerialNumber, WACSHealth="", InterfaceStatus="", LastKnownLocation=new Location{Latitude=1, Longitude=-1}};
                var helicoptersVM = new List<ViewModels.Helicopter>(){helicopterVM};
                //string helicoptersInfo = run_cmd("/root/Projects/Astronautics/HmiApi/HCStatusJson.py",listOfSerialNumbers);
                helicopterService.CompleteHelicoptersInfo(ref helicoptersVM);
                return Ok(helicoptersVM.ElementAt(0));
            }
            return Unauthorized();
        }
        // POST api/v1/helicopters
        [HttpPost]
        public ActionResult Post([FromBody]string helicopter)
        //void
        {
            if(Request.AllowRequest()){
                helicopterService.AddHelicopter(helicopter);
                return Ok();
            }
            return Unauthorized();
        }
        // PUT api/v1/helicopters/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]string helicopter)
        //void
        {
            if(Request.AllowRequest()){
                var helicopterVM = JsonConvert.DeserializeObject<ViewModels.Helicopter>(helicopter);
                if(helicopterService.UpdateHelicopter(id, helicopterVM))
                    return Ok();
            }
            return Unauthorized();
        }
        // DELETE api/v1/helicopters/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        //void
        {
            if(Request.AllowRequest()){
                var helicopterToBeDeleted = context.Helicopter.FirstOrDefault(h => h.IsActive && h.Id == id);
                helicopterToBeDeleted.IsActive = false;
                context.SaveChanges();
                return Ok();
            }
            return Unauthorized();
        }
    }
}
