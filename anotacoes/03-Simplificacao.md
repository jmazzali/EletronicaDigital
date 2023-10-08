## **Simplificações/Reduções**

|A|B|C|D|S|
|:---:|:---:|:---:|:---:|:---:|
|0|0|0|0|**1**|
|0|0|0|1|**0**|
|0|0|1|0|**0**|
|0|0|1|1|**1**|
|0|1|0|0|**1**|
|0|1|0|1|**0**|
|0|1|1|0|**0**|
|0|1|1|1|**1**|
|1|0|0|0|**0**|
|1|0|0|1|**1**|
|1|0|1|0|**1**|
|1|0|1|1|**0**|
|1|1|0|0|**0**|
|1|1|0|1|**1**|
|1|1|1|0|**1**|
|1|1|1|1|**1**|

Visualizando uma tabela verdade, a qual representa a saída de uma função de acordo com N entradas, é possível retirar expressões de acordo com cada linha. Dado o exemplo da tabela acima, pode-se utilizar de duas estratégias:

1. [MAXTermos]()

Análise baseada nas saídas de baixo nível. Analisando linha a linha, define-se que a entrada que assume baixo valor lógico (**0**) tem-se ela na forma **verdade** enquanto para alto valor (**1**) entende-se na forma **complementar**/negada; e então é implementado a função **OR entre as entradas**.

Exemplo:

|x|y|S|
|:---:|:---:|:---:|
|0|1|0|

A linha (0, 1, 0) será intepretada como: **x+y'**

Após analisar todas as linhas que possuem saída como baixo nível, é necessário, para relaciona-las, definir funções **AND**'s entre a expressão obtida **por cada linha**.

2. [MINTermos]()

Defini-se que a análise é direcionada às saídas de alto nível lógico. A definição da expressão de cada linha (individual) se dá pela multiplicação das entradas, ou seja, implementando a função AND entre elas.

As entradas de **alto** nível lógico se mantem na forma **verdade**, enquanto as entradas de **baixo** nível devem ser considerdas complementar/**negadas**. Por fim, as **expressões obtidas** são relacionadas por meio de funções **OR**.

## **Mapa Karnaugh**

[*Arquivo em js*](../Mapa-Karnaugh.js)

Nota-se que essa análise simples ocasionaria em uma função extremamente extensa, contudo há maneiras diferentes de retirar a função que a representa. O Mapa de Karnaugh representa um método capaz de auxiliar na busca pela função regente de maneira reduzida, sem necessariamente utilizar propriedades e teoremas da lógica booleana.

Seu conceito também se baseia na ideia dos MINTermos ou MAXTermos, sendo eles distribuidos ao longo de um mapa que varia de acordo com a quantidade de input. Para uma tabela de **3** variáveis, o mapa a ser construido se trata de um **3**x**3**, enquanto para o caso da tabela presente no início do arquivo seria necessário um mapa 4x4.

De tal forma, é possível verificar que o mapa engloba todas as possibilidades de conjunto de entrada para aquele problema, no entanto vale ressaltar o cuidado na montagem para evitar que aparecam entradas duplicadas. Portanto, durante a construção do mapa se deve atentar/analisar aos lados opostos (cima e baixo; direita e esquerda; plano A e plano B), os quais devem estar intercalados¹.

||A|A|A'|A'||
|:---:|:---:|:---:|:---:|:---:|:---:|
|**B**|1111 [15]|1101 [13]|0101 [5]|0111 [7]|**D**|
|**B'**|1011 [11]|1001 [9]|0001 [1]|0011 [3]|**D**|
|**B'**|1010 [10]|1000 [8]|0000 [0]|0010 [2]|**D'**|
|**B**|1110 [14]|1100 [12]|0100 [4]|0110 [6]|**D'**|
||**C**|**C'**|**C'**|**C**||

¹ *Neste exemplo, A e C (cima e baixo) se intercalam, visto que não se repete nenhuma possibilidade - AC, AC', A'C' e A'C são únicas.*

Uma vez com a tabela estruturada, é necessário preenchê-la de forma correto; isto é, inserir caracteres de identificação (1, 0 ou X) de acordo com a estrategia definida. Tratando o mesmo exemplo, tem-se a seguinte figura quando **MINTermos (preenchumento com 1's)** selecionado para identificar a função regente:

||A|A|A'|A'||
|:---:|:---:|:---:|:---:|:---:|:---:|
|**B**|1 [d1]|1 [d1, d2]||1 [d3]|**D**|
|**B'**||1 [d2]||1 [d3]|**D**|
|**B'**|1[d4]||1 [d5]||**D'**|
|**B**|1[d4]||1 [d5]||**D'**|
||**C**|**C'**|**C'**|**C**||

Inicialmente é priorizado a busca pelo maior grupo (conjunto de blocos adjacentes), ou seja, examina-se a presença de oitavas, quadras e então duplas. A partir dessa concepção, analisa-se os conjuntos encontrados verificando quais variáveis são comuns para cada um desses.

Dupla 1: A, B e D constantes; C varia com C'. Portanto esta dupla é definida como: ABD

Dupla 2: A, C' e D constantes; B varia com B'. Portanto esta dupla é definida como: AC'D

Dupla 3: A', C e D constantes; B varia com B'. Portanto esta dupla é definida como: A'CD

Dupla 4: A, C e D' constantes; B varia com B'. Portanto esta dupla é definida como: ACD'

Dupla 5: A', C' e D' constantes; B varia com B'. Portanto esta dupla é definida como: A'C'D'

Sendo assim, a função final é definida como: d1 + d2 + d3 + d4 + d5

```
ABD + AC'D + A'CD + ACD' + A'C'D'
```

É perceptível que cada **dupla** é capaz de excluir **uma entrada** de sua equação; de maneira semelhante é de conhecimento que uma **quadra** exclui **2** variáveis e uma **oitava** exclui **3** variáveis.

---

A outra opção citada, envolve com o preenchimento de **0's** (**MAXTermos**).

||A|A|A'|A'||
|:---:|:---:|:---:|:---:|:---:|:---:|
|**B**|||0 [d1]||**D**|
|**B'**|0 [ ]||0 [d1]||**D**|
|**B'**||0 [d2]||0 [d3]|**D'**|
|**B**||0 [d2]||0 [d3]|**D'**|
||**C**|**C'**|**C'**|**C**||

Dupla 1: A', C' e D constantes; B varia com B'. Portanto esta dupla é definida como: A+C+D'

Dupla 2: A, C' e D' constantes; B varia com B'. Portanto esta dupla é definida como: A'+C+D

Dupla 3: A', C e D' constantes; B varia com B'. Portanto esta dupla é definida como: A+C'+D

Individual: A+B'+C+D, fica como: A'+B+C'+D'

Sendo assim, a função final é definida como: d1 * d2 * d3 * individual

```
(A+C+D') * (A'+C+D) * (A+C'+D) * (A'+B+C'+D')
```

[Voltar](02-PortasEPropriedades.md) / [Continuar](04-CircuitoSeq.md)