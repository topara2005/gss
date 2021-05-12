using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using HmiApi.Enums;
using HmiApi.Interfaces;
using HmiApi.Models;
using HmiApi.ViewModels;

namespace HmiApi.Services{
    public class LogService : BaseService{
        public LogService(HmiApiDbContext context) : base(context){
        }
        public IEnumerable<HelicopterLog> GetHelicopterLogs(HelicopterLog helicopterLog){
            var helicopterService = new HelicopterService(context);
            var helicopter = helicopterService.GetHelicopter(helicopterLog.HelicopterId);
            var directory = "/AISD_REPO/"+helicopter.Type+"/"+helicopter.SerialNumber+(helicopterLog.LogType == LogType.Security ? "/ds_log" : "/log");
            var list = GetLogList<HelicopterLog>(directory, helicopterLog.InitialDate, helicopterLog.FinalDate).Select(baseLog => SetHelicopterLogParams((HelicopterLog)baseLog, helicopterLog));
            return list;
        }
        public IEnumerable<ViewModels.GssLog> GetGssLogs(GssLog gssLog){
            var directory = "/AISD_REPO/GCS/"+(gssLog.LogType == LogType.Security ? "/Security" : "/System");
            //return gssLogList;
            return GetLogList<GssLog>(directory,gssLog.InitialDate, gssLog.FinalDate).Select(baseLog => (GssLog)SetGssLogParams((GssLog)baseLog, gssLog));
        }
        private List<ILog> GetLogList<T>(string directory, DateTime initialDate, DateTime finalDate) where T : BaseLog{
            var baseLogList = new List<ILog>();
            var listOfLogFiles = Directory.EnumerateFiles(directory).Where(file => (initialDate <= File.GetCreationTime(file) && finalDate >= File.GetCreationTime(file)));
            baseLogList.AddRange(listOfLogFiles.Select(lf => FillLogFileInfo<T>(lf)));
            return baseLogList;
        }
        private ILog FillLogFileInfo<T>(string pathToFile) where T : BaseLog{
            var baseLog = (T)Activator.CreateInstance(typeof(T));   
            var fileName = GetFileName(pathToFile);
            baseLog.LogFileName = fileName;
            baseLog.LogDate = File.GetCreationTime(pathToFile);
            baseLog.LogSize = ((new FileInfo(pathToFile).Length).ToString());
            baseLog.SoftwareVersion = "1.0.0.0";
            return baseLog;
        }
        private HelicopterLog SetHelicopterLogParams(HelicopterLog baseLog, HelicopterLog helicopterLog){
            baseLog.LogType = helicopterLog.LogType;
            baseLog.InitialDate = helicopterLog.InitialDate;
            baseLog.FinalDate = helicopterLog.FinalDate;
            baseLog.HelicopterId = helicopterLog.HelicopterId;
            return baseLog;
        }
        private GssLog SetGssLogParams(GssLog baseLog, GssLog gssLog){
            baseLog.LogType = gssLog.LogType;
            baseLog.InitialDate = gssLog.InitialDate;
            baseLog.FinalDate = gssLog.FinalDate;
            return baseLog;
        }
        private string GetFileName(string pathToFile){
            return pathToFile.Substring(pathToFile.LastIndexOf("/")+1,pathToFile.Length-pathToFile.LastIndexOf("/")-1);
        }
    }
}