module.exports = function dividir(a, b){
    if (a == 0 || b == 0){
        console.log('Não se pode dividir por zero.')
    } else {
        var dividir = a / b
        return console.log(`${a} / ${b} = ${dividir}`)
    }
}
