//é possível criar numerações em TypeScript, por padrão, começam com 0

enum rosaDosVentos {
	Norte, 
	Leste,
	Sul,
	Oeste,
}

let direcaoAtual = rosaDosVentos.Norte;
console.log(direcaoAtual);
//0

//é possível definir o primeiro num padrão (ex: Norte = 1)

//e também é possível definir um número padrão para cada elemento do enum

//enums podem ser númerados por strings (ex: Norte = "Norte"), essa prática
//é recomendável por conta da sua fácil leituras