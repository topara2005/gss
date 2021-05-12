using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using HmiApi.Models;
using HmiApi.ViewModels;

namespace HmiApi.Services{
    public class UserService : BaseService{
        public UserService(HmiApiDbContext context) : base(context){
        }
        public List<ViewModels.User> GetUsers(){
            var users = new List<ViewModels.User>();
            foreach(Models.User user in context.User.Where(u => u.IsActive)){
                var newUser = new ViewModels.User{Id=user.Id, UserName=user.UserName, Email=user.Email, Role=(int)user.Role};
                users.Add(newUser);
            }
            return users;
        }
        public void CreateUser(Models.User newUser){
            context.User.Add(newUser);
            context.SaveChanges();
        }
        public LoginResult Login(string username, string pass){
            var user = context.User.FirstOrDefault(u => u.UserName == username);
            var loginResult = new LoginResult(){Logged=false};
            if(user == null){
                return loginResult;
            }
            var passHash = CreateHash(pass);
            loginResult.Logged = passHash == user.PasswordHash;
            loginResult.Token = loginResult.Logged ? CreateToken(user.Id) : "";
            loginResult.Username = user.UserName;
            return loginResult;
        }
        public string CreateToken(int userId){
            var segments = userId+":"+(DateTime.UtcNow.AddHours(-6)).Ticks;
            // return CreateHash(segments);
            return segments;
        }
        public string CreateHash(string password){
            var md5 = MD5.Create();
            byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(password);
            byte[] hash = md5.ComputeHash(inputBytes);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }
    }
}