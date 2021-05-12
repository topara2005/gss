using System;
using HmiApi.Models;
using HmiApi.Services;
namespace HmiApi.Attributes{
    [AttributeUsage(AttributeTargets.Class)]
    public class AuthorizeAttribute : System.Attribute{
        public bool Authorize(string token)
        {
            var ticks = Double.Parse(token.Substring(token.IndexOf(":")+1,token.Length-token.IndexOf(":")-1));
            return ticks > DateTime.UtcNow.AddHours(-6).Ticks;
        }
    }
}