// Escreva a expressão em
// Javascript que atribui o
// valor `1` a `x` se `x`
// for maior do que `y`.

if ( x > y ) {
    x = 1
}

// Escreva a expressão em
// Javascript que aumenta o
// valor da variável `score`
// em 5 unidades caso o valor
// inicial de `score` esteja
// entre 80 e 90.

let = score
if ( score >= 80 && score <= 90) {
     score += 5 // socre = score + 5
}


// Reescreva a seguinte condicional
// sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )

item = (i >= 10 && v < 50)


// Escreva a expressão em
// Javascript que retorna `true`
// se um número é par e `false`
// se um número é impar.

if (n % 2 === 0){
  console.log("true")
} else {
  console.log("false")
}

// Escreva a expressão em
// Javascript que retorna `true` 
// se dois números forem positivos
// e `false` se dois números 
// forem negativos.

if (x > 0 && y > 0){
  console.log("true") //positivo
} else if (x < 0 && y < 0){
  console.log("false") //negativo
}


// Escreva a expressão em
// Javascript que retorna `true`
// dois números tiverem os mesmo
// sinal (+ / -) e `false` 
// se dois números tiverem sinais
// diferentes.

if (( x > 0 && y > 0 ) ||
    ( x < 0 && y < 0)) {
    console.log("true")
}else {
    console.log("false")
}


if (Math.sign(x) === Math.sign(y) &&
    Math.sign(x) !== 0) {
    console.log(true)
    } else{
      console.log(false)
}

