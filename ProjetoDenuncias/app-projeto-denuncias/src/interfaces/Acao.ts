export interface Acao{
    id?: string;
    nome: string;
    descricao: string;
    categoriaAcaoId: number;
    usuarioId: number;
    denunciaId: number;
}