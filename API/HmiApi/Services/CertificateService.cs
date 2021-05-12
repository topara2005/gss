using System.Collections.Generic;
using HmiApi.Models;

namespace HmiApi.Services{
    public class CertificateService : BaseService{
        public CertificateService(HmiApiDbContext context) : base(context){
        }
        public IEnumerable<ViewModels.WacsCertificate> GetWacsCertificates(){
            return new List<ViewModels.WacsCertificate>(){new ViewModels.WacsCertificate(){Type="MyCertType"}};
        }
        public IEnumerable<ViewModels.GssCertificate> GetGssCertificates(){
            return new List<ViewModels.GssCertificate>(){new ViewModels.GssCertificate(){Name = "MygssName"}};
        }
    }
}