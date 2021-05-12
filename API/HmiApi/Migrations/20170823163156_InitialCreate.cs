using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace HmiApi.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FileImport",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    DestinationApplication = table.Column<string>(type: "text", nullable: true),
                    FileName = table.Column<string>(type: "text", nullable: true),
                    FilePath = table.Column<string>(type: "text", nullable: true),
                    FileType = table.Column<string>(type: "text", nullable: true),
                    Priority = table.Column<int>(type: "int4", nullable: false),
                    SourceApplication = table.Column<string>(type: "text", nullable: true),
                    Status = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileImport", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Helicopter",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreationDate = table.Column<DateTime>(type: "timestamp", nullable: false),
                    IsActive = table.Column<bool>(type: "bool", nullable: false),
                    SerialNumber = table.Column<string>(type: "text", nullable: true),
                    Type = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Helicopter", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PartNumber",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Number = table.Column<string>(type: "text", nullable: true),
                    Type = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PartNumber", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int4", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreationDate = table.Column<DateTime>(type: "timestamp", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: true),
                    IsActive = table.Column<bool>(type: "bool", nullable: false),
                    IsLocked = table.Column<bool>(type: "bool", nullable: false),
                    LockedDate = table.Column<DateTime>(type: "timestamp", nullable: false),
                    LoginFailedTimes = table.Column<int>(type: "int4", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: true),
                    Role = table.Column<int>(type: "int4", nullable: false),
                    Username = table.Column<string>(type: "text", nullable: true),
                    isFirstLogin = table.Column<bool>(type: "bool", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HelicopterPartNumber",
                columns: table => new
                {
                    HelicopterId = table.Column<int>(type: "int4", nullable: false),
                    PartNumberId = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HelicopterPartNumber", x => new { x.HelicopterId, x.PartNumberId });
                    table.ForeignKey(
                        name: "FK_HelicopterPartNumber_Helicopter_HelicopterId",
                        column: x => x.HelicopterId,
                        principalTable: "Helicopter",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HelicopterPartNumber_PartNumber_PartNumberId",
                        column: x => x.PartNumberId,
                        principalTable: "PartNumber",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FileImportUserHelicopter",
                columns: table => new
                {
                    FileImportId = table.Column<int>(type: "int4", nullable: false),
                    UserId = table.Column<int>(type: "int4", nullable: false),
                    HelicopterId = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileImportUserHelicopter", x => new { x.FileImportId, x.UserId, x.HelicopterId });
                    table.ForeignKey(
                        name: "FK_FileImportUserHelicopter_FileImport_FileImportId",
                        column: x => x.FileImportId,
                        principalTable: "FileImport",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FileImportUserHelicopter_Helicopter_HelicopterId",
                        column: x => x.HelicopterId,
                        principalTable: "Helicopter",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FileImportUserHelicopter_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserHelicopter",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int4", nullable: false),
                    HelicopterId = table.Column<int>(type: "int4", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserHelicopter", x => new { x.UserId, x.HelicopterId });
                    table.ForeignKey(
                        name: "FK_UserHelicopter_Helicopter_HelicopterId",
                        column: x => x.HelicopterId,
                        principalTable: "Helicopter",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserHelicopter_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FileImportUserHelicopter_HelicopterId",
                table: "FileImportUserHelicopter",
                column: "HelicopterId");

            migrationBuilder.CreateIndex(
                name: "IX_FileImportUserHelicopter_UserId",
                table: "FileImportUserHelicopter",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_HelicopterPartNumber_PartNumberId",
                table: "HelicopterPartNumber",
                column: "PartNumberId");

            migrationBuilder.CreateIndex(
                name: "IX_UserHelicopter_HelicopterId",
                table: "UserHelicopter",
                column: "HelicopterId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FileImportUserHelicopter");

            migrationBuilder.DropTable(
                name: "HelicopterPartNumber");

            migrationBuilder.DropTable(
                name: "UserHelicopter");

            migrationBuilder.DropTable(
                name: "FileImport");

            migrationBuilder.DropTable(
                name: "PartNumber");

            migrationBuilder.DropTable(
                name: "Helicopter");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
