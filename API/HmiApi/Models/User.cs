using System;
using System.Collections.Generic;
using HmiApi.Enums;

namespace HmiApi.Models
{
    public class User{
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public bool IsActive { get; set; }
        public bool IsLocked { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LockedDate { get; set; }
        public int LoginFailedTimes { get; set; }
        public UserRoles Role { get; set; }
        public bool isFirstLogin { get; set; }
        public ICollection<UserHelicopter> UsersHelicopters { get; set; }
        public ICollection<FileImportUserHelicopter> FileImportsUsersHelicopters { get; set; }

    }
}