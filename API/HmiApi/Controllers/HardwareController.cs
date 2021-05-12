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
using HmiApi.Extensions;

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class HardwareController : BaseController
    {
        public HardwareController(HmiApiDbContext context) : base(context){
        }
        // GET api/v1/hardware/2/list
        [HttpGet("{helicopterId}/list")]
        public ActionResult GetList(int helicopterId)
        // IEnumerable<ViewModels.PartNumber>
        {
            if(Request.AllowRequest()){
                var listOfHardwarePartNumbers = GetHardwarePartNumbers(helicopterId);
                return Ok(listOfHardwarePartNumbers.ToList());    
            }
            return Unauthorized();
        }

        // GET api/v1/hardware/3
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        // ViewModels.PartNumber
        {
            if(Request.AllowRequest()){
                var hardwarePartNumber = context.PartNumber.FirstOrDefault(hpn => hpn.IsActive && hpn.Id == id);
                var hardwarePartNumberModel = new ViewModels.PartNumber{Id=hardwarePartNumber.Id, Type=hardwarePartNumber.Type, Name=hardwarePartNumber.Name, Number=hardwarePartNumber.Number};
                return Ok(hardwarePartNumberModel);
            }
            return Unauthorized();
        }

        // POST api/v1/hardware
        [HttpPost]
        public ActionResult Post([FromBody]string hardwarePartNumber)
        //void
        {
            if(Request.AllowRequest()){
                var hardwarePartNumberVM = JsonConvert.DeserializeObject<ViewModels.PartNumber>(hardwarePartNumber);
                var newHardwarePartNumber = new Models.PartNumber{Id=0, Type=Enums.PartNumberTypes.Hardware, Name=hardwarePartNumberVM.Name, Number=hardwarePartNumberVM.Number, IsActive=true};
                context.PartNumber.Add(newHardwarePartNumber);
                var newHelicopterPartNumber = new Models.HelicopterPartNumber{HelicopterId=hardwarePartNumberVM.HelicopterId, PartNumber=newHardwarePartNumber};
                context.HelicopterPartNumber.Add(newHelicopterPartNumber);
                context.SaveChanges();
                return Ok();
            }
            return Unauthorized();
        }

        // PUT api/v1/hardware/3
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]string hardwarePartNumber)
        //void
        {
            if(Request.AllowRequest()){
                var hardwarePartNumberVM = JsonConvert.DeserializeObject<ViewModels.PartNumber>(hardwarePartNumber);
                var hardwarePartNumberToBeUpdated = context.PartNumber.FirstOrDefault(hpn => hpn.IsActive && hpn.Id == id);
                hardwarePartNumberToBeUpdated.Type = hardwarePartNumberVM.Type;
                hardwarePartNumberToBeUpdated.Name = hardwarePartNumberVM.Name;
                hardwarePartNumberToBeUpdated.Number = hardwarePartNumberVM.Number;
                context.PartNumber.Update(hardwarePartNumberToBeUpdated);
                context.SaveChanges();
                return Ok();
            }
            return Unauthorized();
        }

        // DELETE api/v1/hardware/3
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        //void
        {
            if(Request.AllowRequest()){
                var hardwarePartNumberToBeDeleted = context.PartNumber.FirstOrDefault(hpn => hpn.IsActive && hpn.Id == id);
                hardwarePartNumberToBeDeleted.IsActive = false;
                context.SaveChanges();
                return Ok();
            }
            return Unauthorized();
        }

        ICollection<ViewModels.PartNumber> GetHardwarePartNumbers(int helicopterId){
            var hardwarePartNumbers = new List<ViewModels.PartNumber>();
            try{
                foreach(Models.PartNumber hardwarePartNumber in context.PartNumber.Where(pn => pn.IsActive && pn.Type == Enums.PartNumberTypes.Hardware && pn.HelicoptersPartNumbers.Any(hpn => hpn.HelicopterId == helicopterId))){
                    var newHardwarePartNumber = new ViewModels.PartNumber{Id=hardwarePartNumber.Id, Type=hardwarePartNumber.Type, Name=hardwarePartNumber.Name, Number=hardwarePartNumber.Number, HelicopterId=helicopterId};
                    hardwarePartNumbers.Add(newHardwarePartNumber);
                }
            }
            catch(Exception ex){
                Console.WriteLine(ex);
            }
            return hardwarePartNumbers;
        }
    }
}
