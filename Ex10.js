

function fatorial(num) {
    let resultado = num;
    if(num === 1 || num === 0) {
        resultado = 1
    }else {
        for (let i = 1; i < num ; i++) {
            resultado = resultado * i
        }
    }

    return resultado
}

console.log(fatorial(4))

