using System;

namespace HmiApi.Models
{
    public class FileImportUserHelicopter{
        public int UserId { get; set; }
        public User User { get; set; }
        public int HelicopterId { get; set; }
        public Helicopter Helicopter { get; set; }
        public int FileImportId { get; set; }
        public FileImport FileImport { get; set; }
    }
}