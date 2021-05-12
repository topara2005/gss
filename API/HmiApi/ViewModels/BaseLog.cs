using System;
using HmiApi.Enums;
using HmiApi.Interfaces;

namespace HmiApi.ViewModels{
    public class BaseLog : ILog
    {
        // Response data
        public string LogFileName { get; set; }
        public string LogSize { get; set; }
        public DateTime LogDate { get; set; }
        public string SoftwareVersion { get; set; }
        public LogType LogType { get; set; }
    }
}