function MapaKarnaugh(QTDEntradas)
{
    let colunas, linhas
    if (QTDEntradas == 4)
    {
        colunas = 4
        linhas = 4
    }
    else if(QTDEntradas == 3)
    {
        colunas = 2
        linhas = 4
    }
    else if(QTDEntradas == 2)
    {
        colunas = 2
        linhas =2
    }
    let aux = 0
    let variavelESQ = ''
    let variavelDIR = ''
    for (let linha = 1; linha <= linhas; linha++) 
    {
        let linhaAtual = ''
        for (let coluna = 1; coluna <= colunas; coluna++)
        {
            if (linha == 1)
            {
                if(aux == 0)
                {
                    if(colunas == 2)
                    {
                        console.log("     A   |  A'")
                        console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
                        aux = 1
                    }
                    else if (colunas == 4)
                    {
                        console.log("        A      |      A'")
                        console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
                        aux = 1
                    }
                }
                variavelESQ = "B "
                if (linhas > 2)
                variavelDIR = "C "
            }
            if (linha == 2)
                variavelESQ = "B'"
            if (linha == 3 && linhas > 2)
                variavelDIR = "C'"
            if (linha == 4)
                variavelESQ = "B "

            /*if(linha != 1 && colunas == 2)
            {
                if(j==1)
                {
                    if(linha == 2)
                    linhaAtual += '  B  '
                    else if(linha == 3)
                    linhaAtual += "  B' "
                }
            }*/
            //if(linha != 1)
            linhaAtual += '| ' + linha + ',' + coluna + ' '
        }
        console.log(variavelESQ + " " +linhaAtual + "| " + variavelDIR)
        if(linha == linhas)
            if(colunas == 2)
            console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
            else if (colunas == 4)
            {
                console.log("_____________________________")
                console.log("      D  |     D'    |  D")
            }

    }
}

MapaKarnaugh(2)