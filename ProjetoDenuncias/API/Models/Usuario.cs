using System;

namespace API.Models;

public class Usuario
{
    public int Id { get; set; }

    public string? Nome { get; set; }

    public string? Cpf { get; set; }

    public int? Tipo { get; set; }

    public string? Email { get; set; }

    public string? Senha { get; set; }
}
