using System;
using HmiApi.Enums;

namespace HmiApi.Interfaces{
    public interface ILog
    {
        // Response data
        string LogFileName { get; set; }
        string LogSize { get; set; }
        DateTime LogDate { get; set; }
        string SoftwareVersion { get; set; }
        LogType LogType { get; set; }
    }
}