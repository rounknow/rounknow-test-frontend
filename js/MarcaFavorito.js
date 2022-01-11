
/**
 * Classe que representa um marcador de favorito
 * @public
 * @class
 * @param {bool} selecionado - O estado de selecionado do marcador
 */
class MarcaFavorito {

    constructor({selecionado = false}){

        this._selecionado = selecionado;

        this._container = GeraHTMLDeString.criaElemento(`<div class="produto_imagem_iconeFavorito"></div>`);
        this._compIcone = GeraHTMLDeString.criaElemento(`<i class="material-icons">${this._selecionado ? 'favorite' : 'favorite_border'}</i>`);
        this._container.appendChild(this._compIcone);

        this._container.addEventListener('click', this._selecionar.bind(this));
        this._container.addEventListener('mouseover', this._sobre.bind(this));
        this._container.addEventListener('mouseout', this._fora.bind(this));

    }

    /**
     * Retorna o estado de selecionado atual do marcador
     * @public
     * @method
     * @returns {bool}
     */
    getSelecionado(){

        return this._selecionado;
    }

    /**
     * Altera o estado atual de selecionado do marcador
     * @public
     * @method
     * @param {bool} selecionado 
     */
    setSelecionado(selecionado){

        this._selecionado = selecionado;
    }

    /**
     * Retorna o container do layout do marcador
     * @public
     * @method
     * @returns {HTMLDivElement}
     */
    getContainer(){

        return this._container;
    }

    /**
     * Alterna internamente o estado de selecionado do marcador atual
     * @private
     * @method
     */
    _interruptorSelecionar(){

        this.setSelecionado(!this._selecionado);
    }

    /**
     * Atualiza internamente a imagem do icone entre preenchido ou apenas contorno dependendo do estado de selecionado do marcador atual
     * @private
     * @method
     */
    _atualizaIcone(){
        this._compIcone.textContent = this.getSelecionado() == true ? 'favorite' : 'favorite_border';

    }

    /**
     * Executa a acao interna de selecionar o marcador atual
     * @private
     * @method
     */
    _selecionar(){
        this._interruptorSelecionar();
        this._atualizaIcone();
        this.getContainer().className = this.getSelecionado() ? 'produto_imagem_iconeFavorito produto_imagem_iconeFavorito__selecionado' :
         'produto_imagem_iconeFavorito produto_imagem_iconeFavorito__hover';
    }

    /**
     * Acao de hover executada internamente pelo marcador
     * @private
     * @method
     */
    _sobre(){

        if(this.getSelecionado() === false){
            this.getContainer().className = 'produto_imagem_iconeFavorito produto_imagem_iconeFavorito__hover';
        }
        
    }

    /**
     * Acao de out executada internamente pelo marcador
     * @private
     * @method
     */
    _fora(){

        if(this.getSelecionado() === false){
            this.getContainer().className = 'produto_imagem_iconeFavorito';
        }
       
    }

}