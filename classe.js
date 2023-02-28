let celular = function(){

    this.cor = 'prata';

    this.ligar = function(){
        console.log('Fazer uma ligação: ');

        return 'ligando...'
    }

}

let objeto = new celular();

console.log(objeto.ligar());
