
/**
 * A classe que representa um produto em forma de componente layout
 * @public
 * @class
 * @param {string} imagemArquivo - O endereço de URL da imagem
 * @param {MarcaFavorito} iconeFavorito - Uma instancia de MarcaFavorito para poder favoritar o produto
 * @param {BotaoAdicionar} botaoAdicionar - Uma instancia de BotaoAdicionar para poder adicionar os produtos
 * @param {string[]} descricoes - Uma lista de descricoes do produto
 * @param {string} precoNormal - O preco que geralmente o produto recebe
 * @param {string} precoPromocional - O preco promocional do produto
 * @param {string} formaPagamento - Uma descricao da forma de pagamento do produto 
 */
class Produto {

    constructor({nome = '', imagemSource = '', iconeFavorito = null , botaoAdicionar = null, descricoes = [],
     precoPromocional = 0, precoNormal = 0, formaPagamento = 0}){

        this._nome = nome;
        this._iconeFavorito        = iconeFavorito;
        this._imagemArquivo        = imagemSource;
        this._descricoes           = descricoes;
        this._precoPromocional     = precoPromocional;
        this._precoNormal          = precoNormal;
        this._formaPagamento       = formaPagamento;

        this._container            = GeraHTMLDeString.criaElemento(`<div class="produto_container"></div>`);
        this._compImagemContainer  = GeraHTMLDeString.criaElemento('<div class="produto_imagem_container"></div>');
        this._compImagemArquivo    = GeraHTMLDeString.criaElemento(`<img src="${this._imagemArquivo}" class="produto_imagem_arquivo">`);
        this._compDescricoes       = [];
        this._compPrecoNormal      = GeraHTMLDeString.criaElemento(`<div class="produto_precoNormal">R$${this._precoNormal}</div>`);
        this._compPrecoPromocional = GeraHTMLDeString.criaElemento(`<div class="produto_precoPromocional">R$${this._precoPromocional}</div>`);
        this._compFormaPagamento   = GeraHTMLDeString.criaElemento(`<div class="produto_formaPagamento">em até <span class="produto_formaPagamento__bold">R$${this._formaPagamento}</span> sem juros</div>`);
        this._compBotaoAdicionar   = botaoAdicionar;

        this._renderiza();

        Produto.id ++;

        this._id = Produto.id;

    }

    /**
     * Retorna o id atual do produto
     * @public
     * @method
     * @returns {number}
     */
    getId(){

        return this._id;
    }

    /**
     * Retorna o nome do produto atual
     * @public
     * @method
     * @returns {string}
     */
    getNome(){

        return this._nome;
    }

    /**
     * Altera o nome do produto
     * @public
     * @method
     * @param {string} nome - O nome do produto atual 
     */
    setNome(nome){

        this._nome = nome;
    }

    /**
     * Retorna o container do layout do produto
     * @public
     * @method
     * @returns {HTMLDivElement}
     */
    getContainer(){

        return this._container;
    }

    /**
     * Retorna a url da imagem do produto
     * @public
     * @method
     * @returns {string}
     */
    getArquivoImagem(){

        return this._imagemArquivo;
    }

    /**
     * Altera a url da imagem do produto
     * @public
     * @method
     * @param {string} arquivo - A url da imagem 
     */
    setArquivoImagem(arquivo){

        this._imagemArquivo = arquivo;
    }

    /**
     * Retorna a lista de descricoes do produto
     * @public
     * @method
     * @returns {string[]}
     */
    getDescricoes(){

        return this._descricoes;
    }

    /**
     * Altera a lista de descricoes
     * @public
     * @method 
     * @param {string[]} descricoes - A nova lista de descricoes
     */
    setDescricoes(descricoes){

        this._descricoes = descricoes;
    }

    /**
     * Retorna a instancia do botaoAdicionar do produto atual
     * @public
     * @method
     * @returns {BotaoAdicionar}
     */
    getCompBotaoAdicionar(){

        return this._compBotaoAdicionar;
    }

    /**
     * Adiciona uma lista de componentes de descricoes para o produto a serem renderizados no DOM
     * @public
     * @method
     * @param {HTMLDivElement[]} descricoes - A lista de descricoes a serem adicionadas
     */
    adicionaCompDescricoes(descricoes = []){

        descricoes.forEach((descricao) =>{
            this._descricoes.push(descricao);
            let comp = GeraHTMLDeString.criaElemento(`<div class="produto_descricoes">${descricao}</div>`);
            this._compDescricoes.push(comp);
            this._container.appendChild(comp);
        });
    }

    /**
     * Renderiza o produto para a view do DOM
     * @private
     * @method
     */
    _renderiza(){

        this._compImagemContainer.appendChild(this._compImagemArquivo);
        this._compImagemContainer.appendChild(this._iconeFavorito.getContainer());
        this._container.appendChild(this._compImagemContainer);
        this.adicionaCompDescricoes(this._descricoes);
        this._container.appendChild(this._compPrecoNormal);
        this._container.appendChild(this._compPrecoPromocional);
        this._container.appendChild(this._compFormaPagamento);

        if(this.getCompBotaoAdicionar() !== null){
            this._container.appendChild(this._compBotaoAdicionar.getContainer());
        }
        
        this.getCompBotaoAdicionar().addClick(() => {
           
        });
    }

    
}

/**
 * O id dos produtos
 * @public
 * @static
 * @property
 */
Produto.id = 0;