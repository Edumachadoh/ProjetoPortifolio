using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class AjustandoAcao3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Acoes_CategoriaAcoes_categoriaAcaoId",
                table: "Acoes");

            migrationBuilder.DropColumn(
                name: "CategoriaId",
                table: "Acoes");

            migrationBuilder.RenameColumn(
                name: "categoriaAcaoId",
                table: "Acoes",
                newName: "CategoriaAcaoId");

            migrationBuilder.RenameIndex(
                name: "IX_Acoes_categoriaAcaoId",
                table: "Acoes",
                newName: "IX_Acoes_CategoriaAcaoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Acoes_CategoriaAcoes_CategoriaAcaoId",
                table: "Acoes",
                column: "CategoriaAcaoId",
                principalTable: "CategoriaAcoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Acoes_CategoriaAcoes_CategoriaAcaoId",
                table: "Acoes");

            migrationBuilder.RenameColumn(
                name: "CategoriaAcaoId",
                table: "Acoes",
                newName: "categoriaAcaoId");

            migrationBuilder.RenameIndex(
                name: "IX_Acoes_CategoriaAcaoId",
                table: "Acoes",
                newName: "IX_Acoes_categoriaAcaoId");

            migrationBuilder.AddColumn<int>(
                name: "CategoriaId",
                table: "Acoes",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Acoes_CategoriaAcoes_categoriaAcaoId",
                table: "Acoes",
                column: "categoriaAcaoId",
                principalTable: "CategoriaAcoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
