import { CategoriaDenuncia } from './CategoriaDenuncia';
import { Usuario } from "./Usuario";

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