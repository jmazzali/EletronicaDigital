function portaLogica(entradasArray, porta, retorno)
{
    if (retorno == "FUNÇÃO")
    {
        let funcao
        if(porta == "OR")
            porta = "+"
        else if (porta == "AND")
            porta = "*"
        else if (porta == "NOT")
            porta = "'"
        for(let i = 0; i< entradasArray.length; i++)
        {
            if( i == 0 )
                funcao = '( ' + entradasArray[i] + ' ' + porta
            else if ( i == 1 )
                funcao += ' ' + entradasArray[i]
            else if ( i >= 2 )
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
        else if (porta == "NOT")
            porta = "'"
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
            else if (porta == "'")
                y = -y
            if( y >= 1 )
                y = true
            if( y <= 0 )
                y = false
        }
        return y
    }
}

const D1 = true; const d1 = "A"
const D2 = false; const d2 = "B"
const D3 = false; const d3 = "C"
const D4 = true; const d4 = "D"

console.log(portaLogica([portaLogica([d1,d2,d3], "OR","FUNÇÃO"),d1,d2], "AND","FUNÇÃO") + ' = ' 
    + portaLogica([portaLogica([D1,D2,D3], "OR","SAÍDA"),D1,D2], "AND","SAÍDA"))
//AND com 3 entradas, uma delas sendo uma saída de uma OR com 3 entradas

console.log(portaLogica([portaLogica([portaLogica([d2],"NOT","FUNÇÃO"),d1,d4], "OR","FUNÇÃO"),d1,d4], "AND","FUNÇÃO") + ' = ' 
    + portaLogica([portaLogica([portaLogica([D2],"NOT","SAÍDA"),D1,D4], "OR","SAÍDA"),D1,D4], "AND","SAÍDA"))
//AND com 3 entradas, uma delas sendo uma OR com 3 entradas (1 entrada passando pela NOT)

console.log(portaLogica([portaLogica([d1,d2,d4],"OR","FUNÇÃO")],"NOT","FUNÇÃO") + ' = ' 
    + portaLogica([portaLogica([D1,D2,D4],"OR","SAÍDA")],"NOT","SAÍDA") )
//NOR