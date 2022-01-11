
/**
 * A classe Entry Point da aplicacao aonde tudo começa
 * @public
 * @class
 */
class Program {

    /**
     * O método principal da aplicacao aonde contem toda a estrutura da aplicacao
     * @public
     * @static
     * @method
     */
    static main(){

        const document =  globalThis.document;

        /**
         * Simula um objeto JSON vindo de requisicao para a construcao dos produtos
         */
        let jsonProdutos = [

            {
                nome: 'Monitor LED 27',
                imagem: 'imagens/televisao.jpg',
                favorito: false,
                descricoes: [
                    `Monitor LED 27' Game Curvo`,
                    'SamSumg 1920 x 1080 FHD 240hz',
                    'HDMI, DP, Gsync Série CRG50'
                ],
                precoNormal: '2.633,00',
                precoPromocional: '2.599,00',
                formaPagamento: '10x de R$ 259,90'
            },
            {
                nome: 'Monitor LED 27',
                imagem: 'imagens/televisao.jpg',
                favorito: false,
                descricoes: [
                    `Monitor LED 27' Game Curvo`,
                    'SamSumg 1920 x 1080 FHD 240hz',
                    'HDMI, DP, Gsync Série CRG50'
                ],
                precoNormal: '2.633,00',
                precoPromocional: '2.599,00',
                formaPagamento: '10x de R$ 259,90'
            },
            {
                nome: 'Monitor LED 27',
                imagem: 'imagens/televisao.jpg',
                favorito: false,
                descricoes: [
                    `Monitor LED 27' Game Curvo`,
                    'SamSumg 1920 x 1080 FHD 240hz',
                    'HDMI, DP, Gsync Série CRG50'
                ],
                precoNormal: '2.633,00',
                precoPromocional: '2.599,00',
                formaPagamento: '10x de R$ 259,90'
            }

        ];

        Program.renderizaProdutos(jsonProdutos);
        
    }

    /**
     * Renderiza os produtos para a view do DOM
     * @public
     * @static
     * @method
     * @param {object[]} listaProdutos - A lista de produtos a ser renderizada
     */
    static renderizaProdutos(listaProdutos){

        listaProdutos.forEach((produto) =>{

            let p = new Produto({
                imagemSource: produto.imagem,
                iconeFavorito: new MarcaFavorito({
                    selecionado: produto.favorito
                }),
                botaoAdicionar: new BotaoAdicionar({
                    label: 'adicionar',
                    labelAcionado: 'adicionado'
                }),
                descricoes: produto.descricoes,
                precoNormal: produto.precoNormal,
                precoPromocional: produto.precoPromocional
            });

            Program.adicionaProdutoParaDOM(p);
            Program.produtos.push(p);
        });

    }

    /**
     * Adiciona um produto para a visualizacao da aplicacao
     * @public
     * @static
     * @method
     * @param {Produto} produto - O objeto produto a ser adicionado na aplicacao 
     */
    static adicionaProdutoParaDOM(produto){

        document.querySelector('.App').append(produto.getContainer());
    }
}

/**
 * Lista de produtos statica para a depuracao de listagem de produtos quando necessario
 * @public
 * @static
 * @property
 */
Program.produtos = [];

/**
 * Chamada do metodo principal depois que o DOM for carregado para ter certeza que os elementos existem
 */
document.addEventListener('DOMContentLoaded', Program.main);