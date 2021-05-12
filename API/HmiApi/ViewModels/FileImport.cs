namespace HmiApi.ViewModels{
    public class FileImport{
        public string FileName { get; set; }
        public string SourceApplication { get; set; }
        public string DestinationApplication { get; set; }
        public string FileType { get; set; }
        public int Priority { get; set; }
        public string HCType { get; set; }
        public string HCSerialNumber { get; set; }
        public Enums.Status Status {get; set; }
    }
}