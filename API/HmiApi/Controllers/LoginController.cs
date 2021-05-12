using System.Web;
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
using System;

namespace HmiApi.Controllers
{
    [Route("api/v1/[controller]")]
    [EnableCors("AllowAll")]
    public class LoginController : BaseController
    {
        private readonly UserService userService;
        public LoginController(HmiApiDbContext context) : base(context){
            userService = new UserService(context);
        }
        // POST api/v1/login
        [HttpPost]
        public ActionResult Login([FromBody]miniuser user){
            // var userLoginClass = new {user="",password=""};
            // var userLoginObject = JsonConvert.DeserializeAnonymousType(user, userLoginClass);
            var logged = userService.Login(user.user, user.password);
            return Ok(logged);
        }
    }
    public class miniuser{
        public string user{ get; set; }
        public string password{ get; set; }
    }
}