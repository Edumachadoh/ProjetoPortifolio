namespace API.Models;
using System;

public class Acao {
    public int AcaoId;

    public string? Nome;

    public string? Descricao;

    public int CategoriaId;

    public CategoriaAcao categoriaAcao;
    public int UsuarioId;

    public Usuario Usuario;
    public int DenunciaId;

    public Denuncia Denuncia;

    public string? Email;

    public string? Senha;

    public DateTime DataHora { get; set; }
}
