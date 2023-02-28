let carros = ["palio", "toro", "uno", 10, true, new Date(), function(){}];

console.log(carros);

for(let i = 0; i < carros.length; i++){
    console.log(carros[i]);
}

console.log(carros[0]);

carros.forEach(function(value, index) {
    console.log(index, value)
});




