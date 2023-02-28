function calc(x, y, operator){
    return eval(`${x} ${operator} ${y}`);
};

let resultado = calc(5, 3, '*');

console.log(resultado);

