using HmiApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace HmiApi.Controllers{
    public class BaseController : Controller{
        protected readonly HmiApiDbContext context;
        public BaseController(HmiApiDbContext context){
            this.context = context;
        }
    }
}