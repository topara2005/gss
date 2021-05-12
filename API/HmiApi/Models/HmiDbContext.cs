using Microsoft.EntityFrameworkCore;
namespace HmiApi.Models{
    public class HmiApiDbContext:DbContext{
        public HmiApiDbContext(DbContextOptions<HmiApiDbContext> options) : base(options){
        }
        public DbSet<User> User { get; set; }
        public DbSet<Helicopter> Helicopter { get; set; }
        public DbSet<PartNumber> PartNumber { get; set; }
        public DbSet<HelicopterPartNumber> HelicopterPartNumber { get; set; }
        public DbSet<FileImport> FileImport { get; set; }
        public DbSet<FileImportUserHelicopter> FileImportUserHelicopter { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder){
            //UserHelicopter
            modelBuilder.Entity<UserHelicopter>()
                .HasKey(uh => new { uh.UserId, uh.HelicopterId });
            modelBuilder.Entity<UserHelicopter>()
                .HasOne(uh => uh.User)
                .WithMany(u => u.UsersHelicopters)
                .HasForeignKey(uh => uh.UserId);
            modelBuilder.Entity<UserHelicopter>()
                .HasOne(uh => uh.Helicopter)
                .WithMany(h => h.UsersHelicopters)
                .HasForeignKey(uh => uh.HelicopterId);
            //HelicopterPartNumber
            modelBuilder.Entity<HelicopterPartNumber>()
                .HasKey(hpn => new { hpn.HelicopterId, hpn.PartNumberId });
            modelBuilder.Entity<HelicopterPartNumber>()
                .HasOne(hpn => hpn.Helicopter)
                .WithMany(h => h.HelicoptersPartNumbers)
                .HasForeignKey(pn => pn.HelicopterId);
            modelBuilder.Entity<HelicopterPartNumber>()
                .HasOne(hpn => hpn.PartNumber)
                .WithMany(h => h.HelicoptersPartNumbers)
                .HasForeignKey(hpn => hpn.PartNumberId);
            //FileImportUserHelicopter
            modelBuilder.Entity<FileImportUserHelicopter>()
                .HasKey(fiuh => new { fiuh.FileImportId, fiuh.UserId, fiuh.HelicopterId });
            modelBuilder.Entity<FileImportUserHelicopter>()
                .HasOne(fiuh => fiuh.FileImport)
                .WithMany(fi => fi.FileImportsUsersHelicopters)
                .HasForeignKey(fiuh => fiuh.FileImportId);
            modelBuilder.Entity<FileImportUserHelicopter>()
                .HasOne(fiuh => fiuh.User)
                .WithMany(u => u.FileImportsUsersHelicopters)
                .HasForeignKey(fiuh => fiuh.UserId);
            modelBuilder.Entity<FileImportUserHelicopter>()
                .HasOne(fiuh => fiuh.Helicopter)
                .WithMany(h => h.FileImportsUsersHelicopters)
                .HasForeignKey(fiuh => fiuh.HelicopterId);
        }
    }
}