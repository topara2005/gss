using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace HmiApi.Migrations
{
    public partial class IsActive_TypeEnum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "PartNumber");

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "PartNumber",
                type: "int4",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Type",
                table: "PartNumber",
                type: "int4",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "PartNumber",
                type: "bool",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "FileImport",
                type: "bool",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "PartNumber");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "FileImport");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "PartNumber",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int4");
        }
    }
}
