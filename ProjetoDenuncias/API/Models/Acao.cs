namespace API.Models;
using System;

public class Acao {
    public int Id { get; set; }

    public string? Nome { get; set; }

    public string? Descricao { get; set; }

    public int CategoriaAcaoId { get; set; }
    public CategoriaAcao? categoriaAcao { get; set; }

    public int UsuarioId { get; set; }
    public Usuario? Usuario { get; set; }

    public int DenunciaId { get; set; }
    public Denuncia? Denuncia { get; set; }

    public DateTime DataHora { get; set; } = DateTime.Now;
}
