function BasesEmBinario(num, base){
    let NumArray = num.toString().split('')
    let NumBin = ''
    let NumDigito

    if(base != 8 && base != 16)
        return 'Base não aceita'
    else if(base == 8)
        base = 3 //se octal, cada dígito octal representa 3 dígitos binário
    else
        base = 4 //cada dígito hexa necessita de até 4 dígitos binário

    NumArray.forEach(function(NumArray){
        NumDigito = ''

        switch(NumArray) //switch para hexadecimal
            {
                case 'A':
                    NumArray = 10
                    break;
                case 'B':
                    NumArray = 11
                    break;
                case 'C':
                    NumArray = 12
                    break;
                case 'D':
                    NumArray = 13
                    break;
                case 'E':
                    NumArray = 14
                    break;
                case 'F':
                    NumArray = 15
        }
        while(NumArray >= 2)
        {
            NumDigito = NumArray%2 + NumDigito
            NumArray = Math.floor(NumArray/2)
        }

        if(NumArray == 1)
            NumDigito = '1' + NumDigito

        while(NumDigito.length < base)
            NumDigito = '0' + NumDigito

        NumBin = NumBin + NumDigito
    })
    return NumBin
}

console.log('12345670 (octal) em binário: ' + BasesEmBinario(12345670, 8))
console.log('54A (hexadecimal) em binário: ' + BasesEmBinario('54A', 16))

function BasesEmDecimal(num, base){
    let NumArray = num.toString().split('') //Recebe o valor pela função e o divide
    let NumArrayN = NumArray.length //Define quantas caracteres tem esta string
    let NumDecimal = 0 //Vai armazenar o correspondente em decimal

    NumArray.forEach(function(NumArray){
        switch(NumArray) //switch para hexadecimal
            {
                case 'A':
                    NumArray = 10
                    break;
                case 'B':
                    NumArray = 11
                    break;
                case 'C':
                    NumArray = 12
                    break;
                case 'D':
                    NumArray = 13
                    break;
                case 'E':
                    NumArray = 14
                    break;
                case 'F':
                    NumArray = 15
        }
        NumDecimal += NumArray * base ** (NumArrayN-1) //Incrementa a cada caractere (começa do extremo esquerdo)
        NumArrayN -= 1 //Diminui a base até chegar em 0 (apenas números inteiros)
    })
    return NumDecimal
}

console.log('11011 (bin) em decimal: ' + BasesEmDecimal(11011,2))
console.log('75624 (octal) em decimal:' + BasesEmDecimal(75624,8))
console.log('2A (hexadecimal) em decimal: ' + BasesEmDecimal('2A',16))

function BinarioParaDemaisBases(bin, base){
    let BinArray = bin.toString() //Transforma o número recebido pela função em string
    let BinBase = '' //Variável responsável por armazenar correspondente do binário no sistema 2^base
    let BinArrayDiv = '' //BinArray só que com divisorias a cada "base" caracteres
    let aux = 0 //Armazena o correspondente de cada grupo do BinArrayDiv

    if(base != 8 && base != 16)
        return 'Base não aceita'
    else if(base == 8)
        base = 3 //se para octal, a cada 3 dígito binários se deve encontrar 1 correspondente de octal
    else
        base = 4 //a cada 4 dígito binários se deve encontrar 1 correspondente de hexadecimal

    let baseT = base-1 //Expoente inicial de cada grupo do BinArrayDiv

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

console.log('11001 (bin) em octal: ' + BinarioParaDemaisBases(110001,8))
console.log('11001 (bin) em hexadecimal: ' + BinarioParaDemaisBases(110001,16))
console.log('110011101101 (bin) em octal: ' + BinarioParaDemaisBases(110011101101,8))
console.log('110011101101 (bin) em hexadecimal: ' +BinarioParaDemaisBases(110011101101,16))

console.log('452 (octal) em binário: ' + BasesEmBinario(452, 8) + ' (binário) em hexadecimal: ' + BinarioParaDemaisBases(BasesEmBinario(452,8),16))