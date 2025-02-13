using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class AjustandoAcao2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Acoes");

            migrationBuilder.DropColumn(
                name: "Senha",
                table: "Acoes");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Acoes",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Senha",
                table: "Acoes",
                type: "TEXT",
                nullable: true);
        }
    }
}
