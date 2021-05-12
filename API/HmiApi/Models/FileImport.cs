using System;
using System.Collections.Generic;
using HmiApi.Enums;

namespace HmiApi.Models
{
    public class FileImport{
        public int Id { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
        public string FilePath { get; set; }
        public string DestinationApplication { get; set; }
        public string SourceApplication { get; set; }
        public int Priority { get; set; }
        public Status Status { get; set; }
        public bool IsActive { get; set; }
        public ICollection<FileImportUserHelicopter> FileImportsUsersHelicopters { get; set; }
    }
}