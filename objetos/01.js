// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const mypokemon = {
    nome: "Parasect",
    nome_japones: "Parasect",
    numero_nacional: 47,
    evolução: "Paras",
}


// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >." {
  
 
console.log ("Hello, my name is " + mypokemon.nome + ". And my name in Japanese is " + mypokemon.nome_japones + ".")


// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

mypokemon.can_fly = false



// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".
mypokemon.can_fly = function (){

   if ( this.can_fly){ 
       return "I can fly!!! To infinity and beyond!"
   } else {
       return "I can't fly, but I can swimz"
   }
}


// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".
mypokemon.do_something = function(){
    let something = Math.floor(Math.random() * 3)
    if (something == 0 ){ 
        return "FIGHT!"
    } else if (something == 1) {
        return "BAG"
    } else if (something == 2) {
        return "RUN"
    }
 }
//ou

mypokemon.do_something = function () {
    let acoes = ["FIGHT!", "BAG", "RUN"]
    return acoes = Math.floor(Math.random() * acoes.length)
}

// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.
mypokemon.ask = function () {
    console.log (`What wil ${this.nome} do?`)
    return this.do_something()

}



// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.
for (const prop in mypokemon){
    console.log(prop)
}



// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>
for (const prop in mypokemon) { 
    console.log (`${prop}: ${pokemon[prop]}`)
}

//9
// Crie uma funcao construtora
// de um pokemon generico.
// function ( nome, nome_japones) {}

function Pokemon(nome, nome_japones, pode_voar) {
	this.nome = nome
	this.nome_japones = nome_japones
	this.pode_voar = pode_voar
	this.diga_ola = function () {
		console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
	}
	this.voe = function () {
		if (this.pode_voar) {
			return "É nóis que voa bruxão!"
		} else {
			return "I believe I can fly, but I can't..."
		}
	}
	this.manda_ver = function () {
		let acoes = [
			"Tiro, porrada e bomba", 
			"Eita, Giovana", 
			"Misericóridia, chama minha mãe",
		]
		return acoes[Math.floor(Math.random() * acoes.length)]
	}
	this.pergunte = function () {
		console.log(`O que ${this.nome} vai fazer?`)
		return this.manda_ver()
	}
}