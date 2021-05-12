using System;
using Microsoft.AspNetCore.Http;

namespace HmiApi.Extensions{
    public static class TokenExtension{
        public static bool AllowRequest(this HttpRequest request){
            if(request.Headers.ContainsKey("Authorization")){
                var token = (string)request.Headers["Authorization"];
                var userId = int.Parse(token.Substring(0, token.IndexOf(":")));
                var ticks = token.Substring(token.IndexOf(":")+1, token.Length - token.IndexOf(":")-1);
                if(DateTime.UtcNow.AddHours(-7).Ticks >= long.Parse(ticks))
                    return false;
                return true;
            }
            return false;
        }
    }
}