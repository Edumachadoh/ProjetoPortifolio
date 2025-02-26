using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();


builder.Services.AddCors(options =>
    options.AddPolicy("Acesso Total",
        configs => configs
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod())
);


var app = builder.Build();


//GET: /api/denuncias-analise/
app.MapGet("/api/denuncias-analise", ([FromServices] AppDataContext ctx) => 
{

    int contTotalDenuncia = ctx.Denuncias.Count();
    int contTotalUsuarios = ctx.Usuarios.Count();

    //  Contando cidades únicas
    int contTotalCidade = ctx.Denuncias.Select(d => d.Cidade).Distinct().Count(); 

    //  Contando bairros únicas
    int contTotalBairro = ctx.Denuncias.Select(d => d.Bairro).Distinct().Count(); 

    // Contagem de denúncias por categoria
    Dictionary<int, int> categoriasDenuncias = new Dictionary<int, int>();

    // Inicializa o dicionário com valores zerados para categorias de 1 a 7
    for (int i = 1; i <= 7; i++)
    {
        categoriasDenuncias[i] = 0;
    }

    // Percorre todas as denúncias e conta quantas vezes cada categoria aparece
    foreach (var denuncia in ctx.Denuncias)
    {
        if (denuncia.CategoriaDenuncia != null) // Garante que não é nulo
        {
            int categoriaId = denuncia.CategoriaDenuncia.Id; // Acessa o ID da categoria

            if (categoriasDenuncias.ContainsKey(categoriaId))
            {
                categoriasDenuncias[categoriaId]++;
            }
        }
    }

    var resultado = new
    {
        contTotalDenuncia,
        contTotalUsuarios,
        contTotalCidade,
        contTotalBairro,
        // contCategoriaDenuncia1,
        // contCategoriaDenuncia2,
        // contCategoriaDenuncia3,
        // contCategoriaDenuncia4,
        // contCategoriaDenuncia5,
        // contCategoriaDenuncia6,
        // contCategoriaDenuncia7,
    };

    return Results.Ok(resultado);
});


//GET: /api/acao/listar/
app.MapGet("/api/acao/listar", ([FromServices] AppDataContext ctx) => 
{
    if (ctx.Acoes.Any())
    {
        return Results.Ok(ctx.Acoes.ToList());
    }
    return Results.NotFound();
});

//POST: /api/acao/cadastrar/
app.MapPost("/api/acao/cadastrar", ([FromBody] Acao acao, [FromServices] AppDataContext ctx) =>
{

    Denuncia? denuncia = ctx.Denuncias.Find(acao.UsuarioId);
    Usuario? usuario = ctx.Usuarios.Find(acao.UsuarioId);
    CategoriaAcao? categoriaAcao = ctx.CategoriaAcoes.Find(acao.CategoriaAcaoId);
    if (acao is null)
    {
        return Results.NotFound();
    }
    acao.Usuario = usuario;
    acao.categoriaAcao = categoriaAcao;
    acao.Denuncia = denuncia;

    ctx.Acoes.Add(acao);
    ctx.SaveChanges();
    // bd
    return Results.Created("", denuncia);
});

//GET: /api/denuncia/listar/
app.MapGet("/api/denuncia/listar", ([FromServices] AppDataContext ctx) => 
{
    if (ctx.Denuncias.Any())
    {
        return Results.Ok(ctx.Denuncias.ToList());
    }
    return Results.NotFound();
});

//POST: /api/denuncia/cadastrar/
app.MapPost("/api/denuncia/cadastrar", ([FromBody] Denuncia denuncia, [FromServices] AppDataContext ctx) =>
{

    Usuario? usuario = ctx.Usuarios.Find(denuncia.UsuarioId);
    CategoriaDenuncia? categoriaDenuncia = ctx.CategoriaDenuncias.Find(denuncia.CategoriaDenunciaId);
    if (denuncia is null)
    {
        return Results.NotFound();
    }
    denuncia.Usuario = usuario;
    denuncia.CategoriaDenuncia = categoriaDenuncia;

    ctx.Denuncias.Add(denuncia);
    ctx.SaveChanges();
    // bd
    return Results.Created("", denuncia);
});

//GET: /api/categoria-denuncia/listar/
app.MapGet("/api/categoria-denuncia/listar", ([FromServices] AppDataContext ctx) => 
{
    if (ctx.CategoriaDenuncias.Any())
    {
        return Results.Ok(ctx.CategoriaDenuncias.ToList());
    }
    return Results.NotFound();
});

//POST: /api/categoria-denuncia/cadastrar/
app.MapPost("/api/categoria-denuncia/cadastrar", ([FromBody] CategoriaDenuncia categoriaDenuncia, [FromServices] AppDataContext ctx) =>
{
  
    if (categoriaDenuncia is null)
    {
        return Results.NotFound();
    }

    ctx.CategoriaDenuncias.Add(categoriaDenuncia);
    ctx.SaveChanges();
    // bd
    return Results.Created("", categoriaDenuncia);
});

//GET: /api/categoria-acao/listar/
app.MapGet("/api/categoria-acao/listar", ([FromServices] AppDataContext ctx) => 
{
    if (ctx.CategoriaAcoes.Any())
    {
        return Results.Ok(ctx.CategoriaAcoes.ToList());
    }
    return Results.NotFound();
});

//POST: /api/categoria-acao/cadastrar/
app.MapPost("/api/categoria-acao/cadastrar", ([FromBody] CategoriaAcao categoriaAcao, [FromServices] AppDataContext ctx) =>
{
  
    if (categoriaAcao is null)
    {
        return Results.NotFound();
    }

    ctx.CategoriaAcoes.Add(categoriaAcao);
    ctx.SaveChanges();
    // bd
    return Results.Created("", categoriaAcao);
});

//GET: /api/usuario/listar/
app.MapGet("/api/usuario/listar", ([FromServices] AppDataContext ctx) => 
{
    if (ctx.Usuarios.Any())
    {
        return Results.Ok(ctx.Usuarios.ToList());
    }
    return Results.NotFound();
});

//POST: /api/usuario/cadastrar/
app.MapPost("/api/usuario/cadastrar", ([FromBody] Usuario usuario, [FromServices] AppDataContext ctx) =>
{
  
    if (usuario is null)
    {
        return Results.NotFound();
    }

    ctx.Usuarios.Add(usuario);
    ctx.SaveChanges();
    // bd
    return Results.Created("", usuario);
});

//POST: /api/login/entrar
app.MapPost("/api/login/entrar", ([FromBody] Usuario usuario, [FromServices] AppDataContext ctx) =>
{
    if (usuario is null)
    {
        return Results.BadRequest("Dados inválidos");
    }

    var user = ctx.Usuarios
        .FirstOrDefault(u => u.Email == usuario.Email && u.Senha == usuario.Senha);

    if (user is null)
    {
        return Results.Unauthorized();
    }

    return Results.Ok(new { message = "Login realizado com sucesso", usuario = user });
});


app.UseCors("Acesso Total");

app.Run();
