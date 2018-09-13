// hello("what") -> não acontece nada, pq o what que é um elemento não está sendo chamado na  function
// hello() -> "Hello, world!"
function hello() {
	return "Hello, world!"
}

// show(4) ->  
 function show(x) {
	console.log(`${x} ${x * x}`) //substitui o x por 4 mostra os resultados= 4 16
	return x * x      //retorna o resultado = 16          
 	console.log(`${x} ${x * x * x}`)
	return x * x * x
}
                              
// show(-4) ->  
//function show(x) {
//	console.log(`${x} ${x * x}`)
//	return x * x
//	console.log(`${x} ${x * x * x}`)
//	return x * x * x
//}

function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}

// eq3() -> 1
// eq3(1, 2, 3) -> 0
// eq3("1", 1, 3) -> 0
// eq3("!", "a", "b") -> 0
// eq3("!", "!", !) -> error 
function eq3(a, b, c) {
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}

// Resultado: return 9, 11
function sum(x) {
	return x + 2
}
const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)
//

// Resultado: 26, 12
function confusion(a, b) {
	a = 2 * a + b
	return a
}
let x = 2
let y = 5
// confusion(5, 2)
// x = 2 * 5 + 2 
// x = 12
y = confusion(y, x) // 12
// confusion(12, 2)
// x = 2 * 12 + 2
// x = 26
x = confusion(y, x) // 26
console.log(`${x}, ${y}`)

