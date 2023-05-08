function portaLogica(entradasArray, porta, retorno)
{
    if (retorno == "FUNÇÃO")
    {
        let funcao
        if(porta == "OR")
            porta = "+"
        else if (porta == "AND")
            porta = "*"
    
        for(let i = 0; i< entradasArray.length; i++)
        {
            if( i == 0 )
                funcao = '( ' + entradasArray[i] + ''
            else
                funcao += ' ' + porta + ' ' + entradasArray[i]
        }
        funcao += ' )'
        return funcao
    }
    else if (retorno == "SAÍDA")
    {
        let y
        if(porta == "OR")
            porta = "+"
        else if (porta == "AND")
            porta = "*"
        for(let i = 0; i< entradasArray.length; i++)
        {
            if( i == 0 )
            {
                y = entradasArray[i]
            }
            if(porta == "+")
                y = y + entradasArray[i]
            else if(porta == "*")
                y = y * entradasArray[i]
            if( y >= 1 )
                y = true
            if( y == 0 )
                y = false
        }
        return y
    }
}

const D1 = true;
const D2 = false;
const D3 = false;

console.log(portaLogica([portaLogica([D1,D2,D3], "OR","FUNÇÃO"),D1,D2], "AND","FUNÇÃO") + ' = ' 
    + portaLogica([portaLogica([D1,D2,D3], "OR","SAÍDA"),D1,D2], "AND","SAÍDA"))