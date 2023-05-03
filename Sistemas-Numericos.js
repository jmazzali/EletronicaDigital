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

function BinarioEmDecimal(bin){
    let BinArray = bin.toString().split('') //Recebe o valor pela função e o divide
    let BinArrayN = BinArray.length //Define quantas caracteres tem esta string
    let BinDecimal = 0 //Vai armazenar o correspondente em decimal

    BinArray.forEach(function(BinArray){
        BinDecimal += BinArray * 2 ** (BinArrayN-1) //Incrementa a cada caractere (começa do extremo esquerdo)
        BinArrayN -= 1 //Diminui a base até chegar em 0 (apenas números inteiros)
    })
    return BinDecimal
}

console.log(BinarioEmDecimal(11011))

function BinarioParaDemaisBases(bin, base){
    let BinArray = bin.toString() //Transforma o número recebido pela função em string
    let BinBase = '' //Variável responsável por armazenar correspondente do binário no sistema 2^base
    let BinArrayDiv = '' //BinArray só que com divisorias a cada "base" caracteres
    let baseT = base-1 //Expoente inicial de cada grupo do BinArrayDiv
    let aux = 0 //Armazena o correspondente de cada grupo do BinArrayDiv

    while(BinArray.length % base != 0) //Enquanto o binário não possuir a quantidade de dígitos como um múltiplo da base
        BinArray = '0' + BinArray //Acrescenta-se 0's a esquerda
    
    for(let contador = 0; contador < BinArray.length; contador++) //Enquanto o contador for menor que o tamanho da string
    {
        //console.log(contador , (BinArray.length))
        BinArrayDiv += BinArray.charAt(contador) //Concatena em uma variável o caractere
        if((contador+1) % base == 0) //Se a divisão entre o contador e a base for 0, siginfica que ele é um múltiplo
        BinArrayDiv += "|" //Portanto, separa-se a cada N caracteres com uma "|"
    }

    BinArrayDiv.split('').forEach(function(BinArrayDiv){ //Divide a nova string formada
        //console.log(BinArrayDiv)
        if(BinArrayDiv != "|") //Se diferente do caractere de separaçõo
        {
            aux += BinArrayDiv * 2 ** baseT //Variável auxiliar recebe o caractere * 2(bin) elevado ao N-1 daquele grupo
            baseT -= 1 //Decremenata o valor do expoente
        } else if(BinArrayDiv == "|") //Se achar o caractere de separação
        {
            switch(aux) //switch para hexadecimal
            {
                case 10:
                    aux = 'A'
                    break;
                case 11:
                    aux = 'B'
                    break;
                case 12:
                    aux = 'C'
                    break;
                case 13:
                    aux = 'D'
                    break;
                case 14:
                    aux = 'E'
                    break;
                case 15:
                    aux = 'F'
            }
            BinBase += aux //Variável responsável pelo correspondente de binário concatena o valor obtido no loop de cima
            aux = 0 //Reseta variável para o próximo grupo de N elementos
            baseT = base-1 //expoente utilizado volta a possuir valor N-1
        }
    })
    return BinBase
}

console.log(BinarioParaDemaisBases(110001,3))
console.log(BinarioParaDemaisBases(110001,4))
console.log(BinarioParaDemaisBases(110011101101,3))
console.log(BinarioParaDemaisBases(110011101101,4))