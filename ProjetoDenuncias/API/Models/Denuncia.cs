using System;

namespace API.Models;

public class Denuncia
{
    public string? Id { get; set; }
    public string? Nome { get; set; }
    public string? Descricao { get; set; }
    public int Status { get; set; }
    public string? Rua { get; set; }
    public string? Bairro { get; set; }
    public string? Cidade { get; set; }
    public DateTime DataHora { get; set; }
    public CategoriaDenuncia CategoriaDenuncia { get; set; }
    public int CategoriaDenunciaId { get; set; }
    public Usuario Usuario { get; set; }
    public int UsuarioId { get; set; }
}
