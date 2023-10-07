## **Portas Lógicas**
[*Arquivo em js*](../Portas-Logicas.js)

## **Propriedades e Teoremas da Álgebra Booleana**

|  | Teorema (AND) | Teorema (OR) |
|:-:|:-:|:-:|
| Identidade  | 1A = A | 1 + A = 1 |
| Null  | 0A = 0  | 0 + A = A |
| Complemento | A*A' = 0 | A + A' = 1 |
| Distributiva  | A * (B+C) = A * B  + A * C | A + (B*C) = A+B * A+C |
| Absorção | A(A+B) = A | A + (AB) = A |
| De Morgan | (AB)' = A' + B' | (A+B)' = A'B' |

### Coluna OR

Vale destacar: `A + A = A` (uma variável somada a si mesma permanece igual - uma vez que existem apenas dois níveis lógicos, em casos de **baixo ou baixo** resultam numa saída de baixo nível enquanto para **alto ou alto** apresentam uma saída de alto nível)

### Coluna AND

Vale destacar: `A * A' = 0` (variável multiplicando seu complemento é igual a zero - visto que necessariamente uma entrada estará em baixo nível lógico, é definido que **alto(1) * baixo(0) = baixo(0)**)

### Distributiva

Referente a coluna OR é mais aceitável por conta de funcionar também em cálculos não booleanos; Para a soma entre variável e multiplicação de variáveis, pode-se definir que diz o mesmo que a multiplicação da somas (distruídas).

### Absorção

A prova deste postulado é dada com o uso da distributividade:

```
A*(A+B) = A

A*A + A*B
A + 0
A
```

```
A+(A*B) = A

A+A * A+B
A * 1
A
```

### Teorema De Morgan

O teorema de De Morgan é uma regra da álgebra booleana que descreve a negação de uma operação de conjunto como a operação de conjunto negado, ou seja, afirma que uma sentença negada equivale a uma mesma com os termos divididos/separados - sendo cada um deles negados, tanto entradas como operadores (OR se torna AND e vice-versa).

Em termos práticos:

`(A + B)' = A' * B'`

`(A * B * C)' = A' + B' + C'`

[Voltar](01-SistemasNumericos.md) / [Continuar](03-Simplificacao.md)