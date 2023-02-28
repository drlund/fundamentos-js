class Celular {

    constructor(){
        this.cor = 'prata'
    }

    ligar(){
        console.log('Fazer uma ligação: ');
        return 'ligando...'
    }
}

let objeto = new Celular();

console.log(objeto.ligar());