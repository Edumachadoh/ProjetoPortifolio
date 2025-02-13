using System;
using Microsoft.EntityFrameworkCore;

namespace API.Models;

public class AppDataContext : DbContext
{
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Denuncia> Denuncias { get; set; }
    public DbSet<CategoriaDenuncia> CategoriaDenuncias { get; set; }
    public DbSet<CategoriaAcao> CategoriaAcoes { get; set; }
    public DbSet<Acao> Acoes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=BancoDeDados.db");
    }
}
