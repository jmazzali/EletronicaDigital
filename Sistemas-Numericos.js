const octal = 12345670 //Número a ser convertido

const octalArray = octal.toString().split('') //Converte o número octal em string e o separa a cada caractere
var octalBin = '' //Variável para correspondente em binário
var BinDigito //Variável para correspondente de cada dígito

octalArray.forEach(function(octalArray){ //Para cada caractere da string vai percorrer essa função
    BinDigito = '' //A cada início reseta a variável

    while(octalArray >= 2) //Enquanto o numerador for maior que o denominador (para base binário é 2)
    {
        BinDigito = octalArray%2 + BinDigito //O correspondente do dígito recebe a sobra da divisão do atual numerador/2
        octalArray = Math.floor(octalArray/2) //Próximo numerador será a aproximação da divisão numerador/2
    }
    if(octalArray == 1)
        BinDigito = '1' + BinDigito //Se a sobra for 1, adicioná-lo na frente do correspondente daquele dígito

    while(BinDigito.length < 3)
        BinDigito = '0' + BinDigito //Enquanto não atingir três dígitos adicionar 0's a esquerda (octal 0 até 7 em binário 000 até 111)

    octalBin = octalBin + BinDigito //Correspondente em binário recebe o correspondente do dígito a cada loop
})
console.log(octal + '(8) -> ' + octalBin +'(2)')