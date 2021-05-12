using System;
using System.Collections.Generic;

namespace HmiApi.Models
{
    public class PartNumber{
        public int Id { get; set; }
        public Enums.PartNumberTypes Type { get; set; }
        public string Name { get; set; }
        public string Number { get; set; }
        public bool IsActive { get; set; }
        public ICollection<HelicopterPartNumber> HelicoptersPartNumbers { get; set; }
    }
}