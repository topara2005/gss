using System;
using System.Collections.Generic;
namespace HmiApi.ViewModels{
    public class Helicopter{
        public int Id { get; set; }
        public string Type { get; set; }
        public string SerialNumber { get; set; }
        public string WACSHealth { get; set; }
        public string InterfaceStatus { get; set; }
        public Location LastKnownLocation { get; set; }
    }
}