using System;
using System.Collections.Generic;
using HmiApi.Enums;
using HmiApi.Interfaces;

namespace HmiApi.ViewModels{
    public class HelicopterLog : BaseLog{
        public int HelicopterId { get; set; }
        public DateTime InitialDate { get; set; }
        public DateTime FinalDate { get; set; }
    }
}