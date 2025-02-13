using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CategoriaAcoes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriaAcoes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CategoriaDenuncias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriaDenuncias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: true),
                    Cpf = table.Column<string>(type: "TEXT", nullable: true),
                    Tipo = table.Column<int>(type: "INTEGER", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Senha = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Denuncias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: true),
                    Descricao = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<int>(type: "INTEGER", nullable: false),
                    Rua = table.Column<string>(type: "TEXT", nullable: true),
                    Bairro = table.Column<string>(type: "TEXT", nullable: true),
                    Cidade = table.Column<string>(type: "TEXT", nullable: true),
                    DataHora = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CategoriaDenunciaId = table.Column<int>(type: "INTEGER", nullable: false),
                    UsuarioId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Denuncias", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Denuncias_CategoriaDenuncias_CategoriaDenunciaId",
                        column: x => x.CategoriaDenunciaId,
                        principalTable: "CategoriaDenuncias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Denuncias_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Acoes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: true),
                    Descricao = table.Column<string>(type: "TEXT", nullable: true),
                    CategoriaId = table.Column<int>(type: "INTEGER", nullable: false),
                    categoriaAcaoId = table.Column<int>(type: "INTEGER", nullable: false),
                    UsuarioId = table.Column<int>(type: "INTEGER", nullable: false),
                    DenunciaId = table.Column<int>(type: "INTEGER", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Senha = table.Column<string>(type: "TEXT", nullable: true),
                    DataHora = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Acoes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Acoes_CategoriaAcoes_categoriaAcaoId",
                        column: x => x.categoriaAcaoId,
                        principalTable: "CategoriaAcoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Acoes_Denuncias_DenunciaId",
                        column: x => x.DenunciaId,
                        principalTable: "Denuncias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Acoes_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Acoes_categoriaAcaoId",
                table: "Acoes",
                column: "categoriaAcaoId");

            migrationBuilder.CreateIndex(
                name: "IX_Acoes_DenunciaId",
                table: "Acoes",
                column: "DenunciaId");

            migrationBuilder.CreateIndex(
                name: "IX_Acoes_UsuarioId",
                table: "Acoes",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Denuncias_CategoriaDenunciaId",
                table: "Denuncias",
                column: "CategoriaDenunciaId");

            migrationBuilder.CreateIndex(
                name: "IX_Denuncias_UsuarioId",
                table: "Denuncias",
                column: "UsuarioId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Acoes");

            migrationBuilder.DropTable(
                name: "CategoriaAcoes");

            migrationBuilder.DropTable(
                name: "Denuncias");

            migrationBuilder.DropTable(
                name: "CategoriaDenuncias");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
