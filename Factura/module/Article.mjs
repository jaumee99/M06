export default class Article {
    constructor(code,nom,quantitat,preu,total) {
      this._code = code;
      this._nom = nom;
      this._quantitat = quantitat;
      this._preu = preu;
      this._total = total;
    }

    static _nom;
    static _code;
    static _quantitat;
    static _preu;
    static _total;

    static get nom() {
        return Article._nom;
    }
    static set nom(value) {
        Article._nom = value;
    }

    
    static get code() {
        return Article._code;
    }
    static set code(value) {
        Article._code = value;
    }
    
    static get quantitat() {
        return Article._quantitat;
    }
    static set quantitat(value) {
        Article._quantitat = value;
    }
    
    static get preu() {
        return Article._preu;
    }
    static set preu(value) {
        Article._preu = value;
    }
    
    static get total() {
        return Article._total;
    }
    static set total(value) {
        Article._total = value;
    }

  }

