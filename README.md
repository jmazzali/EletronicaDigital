# Eletrônica Digital

Repositório destinado a anotações de conceitos de eletrônica digital

Tópicos
-

### **Sistemas Numéricos** 
[*Arquivo em js*](./Sistemas-Numericos.js)

Conversão para binário: 
```
function BasesEmBinarios(num, base){...}
```

Essa conversão pode ocorrer apenas da base octal e hexadecimal para a binária, visto que desse modo é necessário encontrar o equivalente de cada dígito da base para a nova (no caso base 2).

Exemplo: 801 em octal representa 111000001 em binário - sendo que 8 representa 111, 0 é o mesmo de 000 e 1 o de 001.

*Detalhe*: observando a base binária percebe-se os diferentes pesos para cada dígito (assim como no decimal, no qual partimos de unidade e passamos por dezena, centena, milhar e etc.), portanto se pode entender que diferentes bases requisitam diferentes quantidades de dígitos. `Octal requisita 3 bits` [2^3 de possibilidades] (000 - sendo o zero - até 111 - sendo o oito). `Hexadecimal requisita 4`  [2^4 de possibilidades] (0000 - zero - até 1111 - 15 ou F).

### **Portas Lógicas**
[*Arquivo em js*](./Portas-Logicas.js)

### **Propriedades e Teoremas da Álgebra Booleana**

|  | Teorema (AND) | Teorema (OR) |
|:-:|:-:|:-:|
| Identidade  | 1A = A | 1 + A = 1 |
| Null  | 0A = 0  | 0 + A = A |
| Complemento | A*A' = 0 | A + A' = 1 |
| Distributiva  | A **+** B`*`C = A **+** B `*` A **+** C  | A **.** (B`+`C) = A **.** B  `+` A **.** C |
| Absorção | A(A+B) = A | A + (AB) = A |
| De Morgan | (AB)' = A' + B' | (A+B)' = A'B' |

Coluna OR, vale destacar: `A + A = A` (uma variável somada a si mesma permanece igual - uma vez que existem apenas dois níveis lógicos, em casos de **baixo ou baixo** resultam numa saída de baixo nível enquanto para **alto ou alto** apresentam uma saída de alto nível)

Coluna AND, vale destacar: `A * A' = 0` (variável multiplicando seu complemento é igual a zero - visto que necessariamente uma entrada estará em baixo nível lógico, é definido que **alto(1) * baixo(0) = baixo(0)**)

Distributiva: Referente a coluna OR é mais aceitável por conta de funcionar também em cálculos não booleanos; Para a soma entre variável e multiplicação de variáveis, pode-se definir que diz o mesmo que a multiplicação da somas (distruídas).

Teorema De Morgan: Define que uma negação pode ser "quebrada" desde que a operação se inverta - como se a negação da soma seja a multiplicação e vice versa.

### **Simplificações/Reduções**

MINTermos e MAXTermos

Visualizando uma tabela verdade - a qual representa a saída de uma função de acordo com N entradas - é possível retirar expressões de acordo com cada linha; no entanto há maneiras diferentes e seu uso pode mudar as portas lógicas e entradas necessárias.

1. [MAXTermos]()

Nesse caso é definido que a análise estará direcionada às saídas de alto nível lógico. A definição da `expressão` de cada linha (de maneira individual) se dá pela `multiplicação das entradas` (entradas de **alto** nível lógico se mantem **intactas**, enquanto entradas de **baixo** nível devem ser considerdas **negadas**). Por fim, `soma-se as expressões` (porta OR).

2. [MINTermos]()

Aqui se analisa as saídas de baixo nível. Cada linha terá sua `expressão` como a `soma das entradas` (entradas de **alto** nível entram como **negadas**, enquanto de **baixo** nível lógico entram **constante**). Ao final, `multiplica-se as expressões` obtidas (porta AND).

### **Mapa Karnaugh**
[*Arquivo em js*](./Mapa-Karnaugh.js)

### **Projeto: Decodificador 7-Display-Segment**

Para este caso foi entendido que sua aplicação, visto os recursos disponíveis, seria apenas possível em um simulador - **LogSim** foi o utilizado.

#### **Esquematização**

Inicialmente foi construído uma tabela verdade para compreender o status de cada segmento de acordo com a entrada binária.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/7_segment_display_labeled.svg/1200px-7_segment_display_labeled.svg.png" alt="7-Display-Segment" width="400" height="400">


|BIT 4|BIT 3|BIT 2|BIT 1|a|b|c|d|e|f|g|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**0**|**0**|**0**|**0**|||||||0|
|**0**|**0**|**0**|**1**||1|1|||||
|**0**|**0**|**1**|**0**|||0|||0||
|**0**|**0**|**1**|**1**|||||0|0||
|**0**|**1**|**0**|**0**|0|||0|0|||
|**0**|**1**|**0**|**1**||0|||0|||
|**0**|**1**|**1**|**0**||0||||||
|**0**|**1**|**1**|**1**|1|1|1|||||
|**1**|**0**|**0**|**0**|1|1|1|1|1|1|1|
|**1**|**0**|**0**|**1**|||||0|||
|**1**|**0**|**1**|**0**||||0||||
|**1**|**0**|**1**|**1**|0|0||||||
|**1**|**1**|**0**|**0**||0|0||||0|
|**1**|**1**|**0**|**1**|0|||||0||
|**1**|**1**|**1**|**0**||0|0|||||
|**1**|**1**|**1**|**1**||0|0|0||||

Após o término da tabela verdade, realizou-se a redução da função através da construção de um Mapa de Karnaugh para cada saída e então foi obtido:

````
a: (B4' + B3' + B2 + B1') * (B4' + B3 + B2' + B1') * (B4 + B3 + B2 + B1') * (B4 + B3' + B2 + B1)

b: (B4' + B2' + B1') * (B4' + B3' + B1) * (B3' + B2' + B1) * (B4 + B3' + B2 + B1')

c: (B4' + B3' + B2') * (B4' + B3' + B1) * (B4 + B3 + B2' + B1)

d: (B4 + B3' + B2 + B1) * (B4' + B3 + B2' + B1) * (B3' + B2' + B1') * (B4 + B3 + B2 + B1')

e: (B4 + B3 + B1') * (B4 + B3' + B2) * (B3 + B2 + B1') * (B4 + B2' + B1')

f: (B4 + B3 + B1') * (B4 + B3 + B2') * (B4 + B2' + B1') * (B4' + B3' + B2 + B1')

g: (B2 * B1') + (B4 * B3') + (B4 * B1) + (B3' * B2) + (B4' * B3 * B2')

````

**`Projeto: Computer Clock`**

---