const octal = 5047621
var octal3, octal2, octal1
//Por se tratar de octal, temos noção que seu correspondente utilizará no máximo 3 dígitos
//0 -> 7 (octal) = 000 -> 111 (binario)

const octalArray = octal.toString().split('')
//toString() transforma nosso número em String e split() a separa, assim formando um vetor
var octalBin = ''
//Variável responsável por armazenar o correspondente em binário

octalArray.forEach(function(octalArray){
    //console.log(octalArray, '-> BIN')
    let contador = 0
    //Variável auxiliar para noção do cálculo a ser realizado
    if(octalArray == 0)
    {
        contador = 3
        octal1 = 0
        octal2 =0
        octal3 = 0
        octalBin = octalBin + '', octal1 + '', octal2 + '', octal3
    }
    //Para o dígito 0 foi inserido uma exceção
    //Sendo assim definido que o contador é 3 para pular o while e não compreter os valores declarados em sequência

    //Dígito 1 também precisará de exceção nessa lógica -> tornando o código muito sujo
    if(octalArray == 1)
    {
        contador = 3
        octal1 = 0
        octal2 =0
        octal3 = 1
        octalBin = octalBin + '', octal1 + '', octal2 + '', octal3
    }
    //while para dígitos > 2
    while(contador < 3)
    {
        if(octalArray == 0)
            octalArray = 2
        //Caso após um loop o octalArray se torne 0, significa que chegamos ao final
        //Portanto, força-se que o dígito a ser tratado até atingir contador igual a 2 será também 2
        //Pois assim o próximo digito do octalBin vai receber 2%2 = 0
        if (contador == 0)
            octal3 = octalArray%2
        else if (contador == 1)
            octal2 = octalArray%2
        else if (contador == 2)
            octal1 = octalArray%2
        contador += 1
        //Dígitos recebem a sobra da divisão por 2
        octalArray = Math.floor(octalArray/2)
        //Próximo dígito será o arredondamento da divisão do dígito anterior por 2
        //console.log('\nPróximo Numerador: ', octalArray)
    }
    octalBin = octalBin + ''+ octal1 + ''+ octal2 + ''+ octal3
    //console.log('-> ', octal1 + '', octal2 + '', octal3,'\n')
})
console.log(octal + '(8) -> ' + octalBin +'(2)')