using System;
using System.Collections.Generic;

namespace HmiApi.Models
{
    public class Helicopter{
        public int Id { get; set; }
        public string Type { get; set; }
        public string SerialNumber { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreationDate { get; set; }
        public ICollection<UserHelicopter> UsersHelicopters { get; set; }
        public ICollection<HelicopterPartNumber> HelicoptersPartNumbers { get; set; }
        public ICollection<FileImportUserHelicopter> FileImportsUsersHelicopters { get; set; }
    }
}