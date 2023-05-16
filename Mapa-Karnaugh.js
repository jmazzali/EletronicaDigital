/*
ANOTAÇÕES:
O mapa de karnaugh tem como funcionalidade auxiliar nas reduções de funções booleanas.
É citado como mapa pois se assemelha a um campo minado, onde cada "quadrado" representa uma possibilidade
Um mapa de 2 variáveis, por exemplo, deve possuir 4 quadrados visto que 2 variáveis em binários podem formar uma variedade de 4 possibilidades
Possibilidades = 2(base binária) ^ qtd de variáveis

Neste mesmo exemplo, teríamos as colunas como uma variável e as linhas como outra variável, sua visualização seria:

    A'  |  A
B'| 00  | 10
B | 01  | 11

A variável sozinha indica que seu valor lógico é alto, enquanto a negada (A' e B') são considerados baixo valor lógico

Para inserir funções no mapa, pode-se considerar 2 métodos: a soma de produtos (mais frequente) ou o produto de somas
Quando uma possibilidade de entrada da funcao tem saida de valor logico alto, insere-se 1 naquele "quadrado"
Enquanto para saidas de baixo valor, insere-se 0

Na soma de produtos (mais frequente), a funcao e definida pela soma dos produtos (um produto e o quadrado que possui 1)

Segue-se a seguinte lógicas para simplificação:
DUPLA: remove uma variável
QUADRA: remove duas variáveis
OCTETO: remove três variáveis
*/
function MapaKarnaugh(QTDEntradas)
{
    let colunas, linhas
    if (QTDEntradas == 4)
    {
        colunas = 4
        linhas = 4
        let A, B, C, D
    }
    else if(QTDEntradas == 3)
    {
        colunas = 2
        linhas = 4
        let A, B, C
    }
    else if(QTDEntradas == 2)
    {
        colunas = 2
        linhas = 2
        let A, B
    }

    for (let linha = 0; linha <= (linhas-1); linha++) 
    {
        let linhaAtual = ''
        if(linhas == 2)//se 2 linhas, elas serão destinadas a uma variável, no caso B e B'
        {
            if(linha == 0)//na primeira linha usar B'
            {
                B = 0;
            }
            else if(linha == 1)//na segunda linha usar B
            {
                B = 1;
            }
        }
        else if(linhas == 4)
        {
            if(linha == 0 || linha == 1)
            {
                B = 0;
            }
            else if(linha == 2 || linha == 3)
            {
                B = 1;
            }

            if(linha == 0 || linha == 3)
            {
                C = 0;
            }
            else if(linha == 1 || linha == 2)
            {
                C = 1;
            }
        }
        for (let coluna = 0; coluna <= (colunas-1); coluna++)
        {
            if(colunas == 2)//se 2 colunas, nossas colunas serão destinadas a uma variável, no caso A e A'
            {
                if(coluna == 0)//se na primeira coluna, usar A'
                {
                    A = 0;
                }
                else if (coluna == 1)//se na segunda coluna, usar A
                {
                    A = 1;
                }
            }
            else if(colunas == 4)//se 4 colunas uma parte será A' e outra A
            {
                if(coluna == 1 || coluna == 2)//as duas centrais são A'
                {
                    A = 0;
                }
                else if(coluna == 0 || coluna == 3)//as duas extremas são A
                {
                    A = 1;
                }
                //Adicionar a quarta variável aqui, só que intercalar: se as pontas são A' o centro deve ser D
                //se o centro é A as pontas devem ser D'
                if(coluna == 0 || coluna == 1)
                {
                    D = 0;
                }
                else if(coluna == 2 || coluna == 3)
                {
                    D = 1;
                }
            }

            if(linhas == 2 && colunas == 2)//se for um mapa 2x2
                linhaAtual += '| ' + B + A + ' '//a saída vai conter só 2 variáveis
            if(linhas == 4 && colunas == 2)//se for um mapa 4x2
                linhaAtual += '| ' + B + C + A + ' '
            if(linhas == 4 && colunas == 4)
                linhaAtual += '| ' + B + C + A + D + ' '
        }
        console.log(linhaAtual + "| ")
    }
}

MapaKarnaugh(2)
console.log("")
MapaKarnaugh(3)
console.log("")
MapaKarnaugh(4)