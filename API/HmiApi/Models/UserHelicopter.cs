using System;

namespace HmiApi.Models
{
    public class UserHelicopter{
        public int UserId { get; set; }
        public User User { get; set; }
        public int HelicopterId { get; set; }
        public Helicopter Helicopter { get; set; }
    }
}