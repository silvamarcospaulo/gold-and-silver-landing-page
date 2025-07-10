export class Produto {
    idProduto!: number;
    categoria!: string;
    nomeDoProduto!: string;
    descricao!: string;
    cor?: string;
    altura?: number;
    largura?: number;
    profundidade?: number;
    comprimento?: number;
    diametro?: number;
    capacidade?: number;
    quantidadeDePortas?: number;
    quantidadeDeBocas?: number;
    quantidadeDeLugares?: number;
    formato?: string;
    tamanho?: string;
    tipo?: string;
    comOuSemBraco?: string;
    quantidadeDePrateleiras?: number;
    imagem?: string;

    constructor(init?: Partial<Produto>) {
        Object.assign(this, init);
    }
}