using System;

namespace HmiApi.Models
{
    public class HelicopterPartNumber{
        public int HelicopterId { get; set; }
        public Helicopter Helicopter { get; set; }
        public int PartNumberId { get; set; }
        public PartNumber PartNumber { get; set; }
    }
}