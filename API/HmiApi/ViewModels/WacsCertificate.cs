using System;
using System.Collections.Generic;
using HmiApi.Enums;

namespace HmiApi.ViewModels{
    public class WacsCertificate{
        public string Type { get; set; }
        public string SerialNumber { get; set; }
        public string ClientKey { get; set; }
        public string CRLInstalledStatus { get; set; }
        public string CRLValidStatus { get; set; }
        public string Serial { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }
        public string Status { get; set; }
        public string Issuer { get; set; }
    }
}