using System;

namespace HmiApi.ViewModels
{
    public class QueryExport{
        public string DestinationApplication {get; set; }
        public string FileName { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public string Priority { get; set; }
        public string FileType { get; set; }
        public string DestinationDomain { get; set; }
        public string SourceApplication { get; set; }
    }
}