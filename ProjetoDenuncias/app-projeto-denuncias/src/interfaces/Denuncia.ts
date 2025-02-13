export interface Denuncia{
    id?: string;
    nome: string;
    descricao: string;
    status: number;
    rua: string;
    bairro: string;
    cidade: string;
    categoriaDenunciaId: number;
    usuarioId: number
}