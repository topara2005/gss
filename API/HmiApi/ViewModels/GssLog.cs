using System;
using System.Collections.Generic;
using HmiApi.Enums;
using HmiApi.Interfaces;

namespace HmiApi.ViewModels{
    public class GssLog : BaseLog{
        public DateTime InitialDate { get; set; }
        public DateTime FinalDate { get; set; }
    }
}