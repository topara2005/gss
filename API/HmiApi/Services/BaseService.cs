using System;
using HmiApi.Models;

namespace HmiApi.Services{
    public class BaseService{
        protected readonly HmiApiDbContext context;
        public BaseService(HmiApiDbContext context){
            this.context = context;
        }
    }
}