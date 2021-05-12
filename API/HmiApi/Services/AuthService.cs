using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using HmiApi.Models;

namespace HmiApi.Services{
    public class AuthService{
        private readonly HmiApiDbContext context;
        public AuthService(HmiApiDbContext context){
            this.context = context;
        }
        public bool IsUserValid(string token){
            return false;
            var userId = int.Parse(token.Substring(0, token.IndexOf(":")));
            var ticks = token.Substring(token.IndexOf(":")+1, token.Length - token.IndexOf(":")-1);
            if(DateTime.UtcNow.AddHours(-7).Ticks >= long.Parse(ticks))
                return false;
            return true;
        }
    }
}