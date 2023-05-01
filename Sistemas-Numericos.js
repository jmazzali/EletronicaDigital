const octal = 50476
var octal3, octal2, octal1

const octalArray = octal.toString().split('')
var octalBin = ''

octalArray.forEach(function(octalArray){
    console.log(octalArray, '-> BIN')
    var contador = 0
    if(octalArray == 0)
    {
        contador = 3
        octal1 = 0
        octal2 =0
        octal3 = 0
        octalBin = octalBin + '', octal1 + '', octal2 + '', octal3
    }
    while(contador < 3)
    {
        if(octalArray == 0)
            octalArray = 2
        if (contador == 0)
            octal3 = octalArray%2
        else if (contador == 1)
            octal2 = octalArray%2
        else if (contador == 2)
            octal1 = octalArray%2
        contador += 1

        octalArray = Math.floor(octalArray/2)
        console.log('\nPróximo Numerador: ', octalArray)
    }
    octalBin = octalBin + ''+ octal1 + ''+ octal2 + ''+ octal3
    console.log('-> ', octal1 + '', octal2 + '', octal3,'\n')
})

console.log(octal + '(8) -> ' + octalBin +'(2)')