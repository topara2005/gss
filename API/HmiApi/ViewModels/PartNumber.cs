using System;
using System.Collections.Generic;
namespace HmiApi.ViewModels{
    public class PartNumber{
        public int Id { get; set; }
        public Enums.PartNumberTypes Type { get; set; }
        public string Name { get; set; }
        public string Number { get; set; }
        public int HelicopterId { get; set; }
    }
}