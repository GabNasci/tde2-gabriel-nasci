function ehNegativoPositivoOuZero(num) {
    if(num < 0) {
        return "é negativo"
    }else if (num > 0) {
        return "é positivo"
    }else if (num === 0) {
        return "é zero"
    }
}

console.log(ehNegativoPositivoOuZero(-1))