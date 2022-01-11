/**
 * Classe criada para criar Elementos HTML apartir de template strings
 * @public
 * @class
 */
class GeraHTMLDeString {

    /**
     * Cria um Elemento HTML apartir do seu template
     * @public
     * @static
     * @param {string} templateString - A estrutura do elemento HTML a ser criada ex: <div></div> 
     * @returns 
     */
    static criaElemento(templateString){

        let parser = new DOMParser();
        let DOM = parser.parseFromString(templateString, 'text/html').body.firstChild;

        return DOM;
    }
}