

function menorNumero(num1, num2, num3) {
    let array = [num1, num2, num3]
    let temp = array[0]
    for (let i = 0; i < array.length; i++) {
        if(temp > array[i]) {
            temp = array[i]
        }
    }
    return temp
}

console.log(menorNumero(4,7,2))

