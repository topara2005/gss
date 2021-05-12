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
using HmiApi.Services;
using System.Security.Cryptography;
using System.Web;
using System.Text;
using HmiApi.Attributes;

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class UsersController : BaseController
    {
        private readonly UserService userService;
        public UsersController(HmiApiDbContext context) : base(context){
            userService = new UserService(context);
            if (!context.User.Any(u => u.IsActive))
            {
                context.User.Add(new Models.User{CreationDate = DateTime.UtcNow, UserName="Admin", Email="a@.com", IsActive=true, Role=UserRoles.Admin, PasswordHash = userService.CreateHash("password")});
                context.SaveChanges();
            }
        }
        // GET api/v1/users
        [HttpGet]
        public ActionResult Get()
        //IEnumerable<ViewModels.User>
        {
            if(Request.AllowRequest()){
                return Ok(userService.GetUsers());
            }
            return Unauthorized();
        }

        // GET api/v1/users/1
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        //ViewModels.User
        {
            if(Request.AllowRequest()){
                var user = context.User.FirstOrDefault(u => u.IsActive && u.Id == id);
                var userModel = new ViewModels.User{Id=user.Id, Email=user.Email, UserName=user.UserName, Role=(int)user.Role};
                return Ok(userModel);
            }
            return Unauthorized();
        }

        // POST api/v1/users
        [HttpPost]
        public ActionResult Post([FromBody]string user)
        //void
        {
            if(Request.AllowRequest()){
                var userVM = JsonConvert.DeserializeObject<ViewModels.User>(user);
                var passwordHash = userService.CreateHash(userVM.Password);
                var newUser = new Models.User{Id=0, UserName=userVM.UserName, Email=userVM.Email, Role=(Enums.UserRoles)userVM.Role, IsActive=true, PasswordHash=passwordHash};
                userService.CreateUser(newUser);
                return Ok();
            }
            return Unauthorized();
        }

        // PUT api/v1/users/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]string user)
        //void
        {
            if(Request.AllowRequest()){
                var userVM = JsonConvert.DeserializeObject<ViewModels.User>(user);
                var userToBeUpdated = context.User.FirstOrDefault(u => u.IsActive && u.Id == id);
                userToBeUpdated.UserName = userVM.UserName;
                userToBeUpdated.Email = userVM.Email;
                userToBeUpdated.Role = (Enums.UserRoles)userVM.Role;
                context.User.Update(userToBeUpdated);
                context.SaveChanges();
                return Ok();
            }
            return Unauthorized();
        }

        // DELETE api/v1/users/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        //void
        {
            if(Request.AllowRequest()){
                var userToBeDeleted = context.User.FirstOrDefault(u => u.IsActive && u.Id == id);
                userToBeDeleted.IsActive = false;
                context.SaveChanges();
                return Ok();
            }
            return Unauthorized();
        }
    }
}
