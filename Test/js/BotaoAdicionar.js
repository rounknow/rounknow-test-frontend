
/**
 * Classe que representa um Botao com seu proprio estilo e comportamento
 * @public
 * @class
 * @param {string} label - O label do botao em estado normal
 * @param {string} labelAcionado - O label do botao em estado acionado
 * @param {Function} click - A funcao do botao ao ser clicado
 */
class BotaoAdicionar{

    constructor({label = '', labelAcionado = '', click = null}){

        this._label         = label;
        this._labelAcionado = labelAcionado;
        this._onClick       = click;
        this._acionado      = false;
        this._container     = GeraHTMLDeString.criaElemento(`<div class="produto_botaoAdicionar"></div>`);
        this._compIcone     = GeraHTMLDeString.criaElemento('<i class="produto_botaoAdicionar_icone produto_botaoAdicionar_icone__invisivel material-icons">check</i>');
        this._compLabel     = GeraHTMLDeString.criaElemento(`<div class="produto_botaoAdicionar_label">${this._label}</div>`);
        this._container.appendChild(this._container.appendChild(this._compIcone));
        this._container.appendChild(this._compLabel);

        this.addClick(this._onClick);
    }

    /**
     * Retorna o container do layout do botao
     * @public
     * @method
     * @returns {HTMLDivElement}
     */
    getContainer(){

        return this._container;
    }

    /**
     * Retorna o label em estado normal do botao
     * @public
     * @method
     * @returns {string}
     */
    getLabel(){

        return this._label;
    }

    /**
     * Altera o label do estado normal do botao
     * @public
     * @method
     * @param {string} label - O novo label em estado normal a ser inserido 
     */
    setLabel(label){

        this._label = label;
        this._atualizaCompLabel();
    }

    /**
     * Altera o label do estado acionado do botao
     * @public
     * @method
     * @param {string} labelAcionado - O novo label em estado acionado a ser inserido 
     */
    setLabelAcionado(labelAcionado){

        this._labelAcionado = labelAcionado;
    }

    /**
     * Retorna o estado atual de acionado do botao
     * @public
     * @method
     * @returns {bool}
     */
    getAcionado(){

        return this._acionado;
    }

    /**
     * Altera o estado atual de acionado do botao
     * @public
     * @method
     * @param {bool} acionado - O estado de acionamento do botao 
     */
    setAcionado(acionado = false){

        this._acionado = acionado;
    }

    /**
     * Alterna o estado de acionado invertendo seu valor booleano
     * @public
     * @method
     */
    interruptorAcionado(){

        this._acionado = !this.getAcionado();
        this._container.className = this.getAcionado() ? 'produto_botaoAdicionar produto_botaoAdicionar__acionado' : 'produto_botaoAdicionar';
    }

    /**
     * Alterna a visibilidade do componente de icone do botao
     * @public
     * @method
     */
    interruptorCompIcone(){

        this._compIcone.className = this._acionado ? 'produto_botaoAdicionar_icone material-icons' :
         'produto_botaoAdicionar_icone produto_botaoAdicionar_icone__invisivel material-icons';
    }

    /**
     * Atualiza a view do componente label do botao
     * @public
     * @method
     */
    _atualizaCompLabel(){

        this._compLabel.innerHTML = this.getAcionado() ? this._labelAcionado : this._label;
    }

    /**
     * Adiciona um evento de click para o botao
     * @public
     * @method
     * @param {Function} funcao - A funcao de click a ser executada pelo botao 
     */
    addClick(funcao = null){

        this._onClick = funcao;
        if(this._onClick !== null){
            this._container.addEventListener('click', () => {
                this.interruptorAcionado();
                this.interruptorCompIcone();
                this._atualizaCompLabel();
                this._onClick();
            });

            this._container.addEventListener('mouseover', this._sobre.bind(this));
            this._container.addEventListener('mouseout', this._fora.bind(this));
        }
    }

    /**
     * Funcao interna de hover do botao
     * @private
     * @method
     */
    _sobre(){

        if(this.getAcionado() == false){
            this._container.className = 'produto_botaoAdicionar produto_botaoAdicionar__hover';
        }
    }

    /**
     * Funcao interna de out do botao
     * @private
     * @method
     */
    _fora(){

        if(this.getAcionado() == false){
            this._container.className = 'produto_botaoAdicionar';
        }

    }


}