module.exports = function multiplicar(a, b){
    if (a == 0 || b == 0){
        var multiplicar = 0
    } else {
        multiplicar = a * b
    }

    return console.log(`${a} x ${b} = ${multiplicar}`)
}


