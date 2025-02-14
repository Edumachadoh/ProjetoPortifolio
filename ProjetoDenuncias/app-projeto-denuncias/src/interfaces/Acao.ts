import { CategoriaAcao } from './CategoriaAcao';
import { Usuario } from "./Usuario";
import { Denuncia } from "./Denuncia";


export interface Acao{
    id?: string;
    nome: string;
    descricao: string;
    categoriaAcaoId: number;
    usuarioId: number;
    denunciaId: number;
}