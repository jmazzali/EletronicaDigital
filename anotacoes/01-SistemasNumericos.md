## **Sistemas Numéricos** 

[*Arquivo em js*](../Sistemas-Numericos.js)

Sistemas numéricos são diferentes métodos utilizados para representar informações usando números, sendo eles diferenciados por sua potência de base. Esta potência informa, explicitamente, a quantidade de diferentes dígitos que aquele sistema opera; por exemplo: o decimal por possuir base 10 apresenta 10 dígitos (0 até 9) e o octal que possui base 8 apresenta 8 diferentes possibilidades (0 até 7).

Acerca do peso de cada dígito, é definido: `base ^ (n-1)` - sendo **n** a posição.

Exemplificando tal conceito para o sistema mais comum no cotidiano, o decimal, tem-se que o primeiro dígito (**unidade**) tem peso 1, visto que **10^(1-1) = 1**. Ao observar o segundo, no caso a dezena, é definido o peso como 10 (10^(2-1)); e será assim por diante: centena (peso 100), unidade de milhar (peso 1000), dezena de milhar (peso 10000), ...

Seguindo tal ideia é possível entender como que funciona a representação do número **54**, sendo o mesmo entendido como: **5 * peso_eq + 4 * peso_eq**; ao realizar a substituição dos pesos equivalentes se chega em: `5*10 + 4*1 = 54`. Esta lógica é presente em qualquer sistema numérico, segue demais exemplos:

- Binário

101 é o mesmo que: **1 * 2^(3-1) + 0 * 2^(2-1) + 1 * 2^(1-1)** = **4 + 0 + 1** = **5**

- Octal

207 é o mesmo que: **2 * 8^(3-1) + 0 * 8^(2-1) + 7 * 8^(1-1)** = **128 + 0 + 7** = **135**

- Hexadecimal

5A é o mesmo que: **5 * 16^(2-1) + A * 16^(1-1)** = **80 + 10** = **90**

Nota-se que sempre ao aplicar este conceito é encontrado o número equivalente ao seu em decimal, portanto assim é possível definir uma função (em qualquer linguagem de programação) a fim de realizar tal conversão. No arquivo citado logo no começo do documento é possível encontrar a função: `function BasesEmDecimal(num, base) {...}` - nela é passado como parâmetro o valor e sua base correspondente, de forma a retornar o número em decimal.

Neste mesmo arquivo é possível encontrar demais funções de conversão com comentários explicando o que algumas linhas de códgio realizam. Adentrando em mais uma função, encontra-se: `function BasesEmBinarios(num, base){...}`, a qual foi descrita para realizar uma conversão de um número não binário para o seu representante binário.

A lógica implementada nesta função define que a base do número inicial deve ser octal ou hexadecimal, uma vez que segue a ideia de encontrar o equivalente de cada dígito da base para a nova (no caso base 2) - essas bases posibilitam que cada dígito tenha seu equivalente em binário com quantidade de bits fixa.

`Octal requisita 3 bits` [2^3 de possibilidades] (000 - sendo o zero - até 111 - sendo o oito). 

`Hexadecimal requisita 4 bits`  [2^4 de possibilidades] (0000 - zero - até 1111 - 15 ou F).

`Decimal não tem uma quantidade fixa de bits associada a cada dígito`. Isso ocorre devido ao fato de que sua base não é uma potência de 2. Em outras palavras, não é possível encontrar um expoente para a potência de 2 que resulte no número 10 quando se trata de números inteiros. Isso contrasta com sistemas como o binário (base 2), em que cada dígito tem uma correspondência direta com uma potência de 2 e, portanto, uma quantidade fixa de bits.

[Voltar](01-SistemasNumericos.md) / [Continuar](02-PortasEPropriedades.md)