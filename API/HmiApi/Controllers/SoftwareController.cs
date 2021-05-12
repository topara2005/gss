using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using HmiApi.Models;
using HmiApi.Enums;
using HmiApi.Extensions;
using HmiApi.ViewModels;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class SoftwareController : BaseController
    {
        public SoftwareController(HmiApiDbContext context) : base(context){
        }
        // GET api/v1/software/2/list
        [HttpGet("{helicopterId}/list")]
        public ActionResult  GetList(int helicopterId)
        //IEnumerable<ViewModels.PartNumber>
        {
            if(Request.AllowRequest()){
                var listOfSoftwarePartNumbers = GetSoftwarePartNumbers(helicopterId);
                return Ok(listOfSoftwarePartNumbers.ToList());
            }
            return Unauthorized();
        }

        // GET api/v1/software/3
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        //ViewModels.PartNumber
        {
            if(Request.AllowRequest()){
                var softwarePartNumber = context.PartNumber.FirstOrDefault(spn => spn.IsActive && spn.Id == id);
                var softwarePartNumberModel = new ViewModels.PartNumber{Id=softwarePartNumber.Id, Type=softwarePartNumber.Type, Name=softwarePartNumber.Name, Number=softwarePartNumber.Number};
                return Ok(softwarePartNumberModel);
            }
            return Unauthorized();
        }

        // POST api/v1/software
        [HttpPost]
        public ActionResult Post([FromBody]string softwarePartNumber)
        //void
        {
            if(Request.AllowRequest()){
                var softwarePartNumberVM = JsonConvert.DeserializeObject<ViewModels.PartNumber>(softwarePartNumber);
                var newsoftwarePartNumber = new Models.PartNumber{Id=0, Type=Enums.PartNumberTypes.Software, Name=softwarePartNumberVM.Name, Number=softwarePartNumberVM.Number, IsActive=true};
                context.PartNumber.Add(newsoftwarePartNumber);
                var newHelicopterPartNumber = new Models.HelicopterPartNumber{HelicopterId=softwarePartNumberVM.HelicopterId, PartNumber=newsoftwarePartNumber};
                context.HelicopterPartNumber.Add(newHelicopterPartNumber);
                context.SaveChanges();
                return Ok();
            }
            return Unauthorized();
        }

        // PUT api/v1/software/3
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]string softwarePartNumber)
        //void
        {
            if(Request.AllowRequest()){
                var softwarePartNumberVM = JsonConvert.DeserializeObject<ViewModels.PartNumber>(softwarePartNumber);
                var softwarePartNumberToBeUpdated = context.PartNumber.FirstOrDefault(spn => spn.IsActive && spn.Id == id);
                softwarePartNumberToBeUpdated.Type = softwarePartNumberVM.Type;
                softwarePartNumberToBeUpdated.Name = softwarePartNumberVM.Name;
                softwarePartNumberToBeUpdated.Number = softwarePartNumberVM.Number;
                context.PartNumber.Update(softwarePartNumberToBeUpdated);
                context.SaveChanges();
            }
            return Unauthorized();
        }

        // DELETE api/v1/software/3
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        //void
        {
            if(Request.AllowRequest()){
                var softwarePartNumberToBeDeleted = context.PartNumber.FirstOrDefault(spn => spn.IsActive && spn.Id == id);
                softwarePartNumberToBeDeleted.IsActive = false;
                context.SaveChanges();
                return Ok();
            }
            return Unauthorized();
        }

        ICollection<ViewModels.PartNumber> GetSoftwarePartNumbers(int helicopterId){
            var softwarePartNumbers = new List<ViewModels.PartNumber>();
            try{
                foreach(Models.PartNumber softwarePartNumber in context.PartNumber.Where(pn => pn.IsActive && pn.Type == Enums.PartNumberTypes.Software && pn.HelicoptersPartNumbers.Any(spn => spn.HelicopterId == helicopterId))){
                    var newSoftwarePartNumber = new ViewModels.PartNumber{Id=softwarePartNumber.Id, Type=softwarePartNumber.Type, Name=softwarePartNumber.Name, Number=softwarePartNumber.Number, HelicopterId=helicopterId};
                    softwarePartNumbers.Add(newSoftwarePartNumber);
                }
            }
            catch(Exception ex){
                Console.WriteLine(ex);
            }
            return softwarePartNumbers;
        }
    }
}
