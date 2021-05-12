using System;
using System.Collections.Generic;
using HmiApi.Enums;

namespace HmiApi.ViewModels{
    public class GssCertificate{
        public string AirGroundServerKey { get; set; }
        public string Serial { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }
        public string Status { get; set; }
        public string Issuer { get; set; }
    }
}