//union types '|' (OR) funciona como o operador ||, pode ser usado para
//atribuir mais de um tipo a um objeto, porém um método upperCase()
//não pode ser utilizado em algo que foi atribuído com valor númerico,
//mesmo sendo do tipo string, isso também se aplica a outros métodos

function printStatusCode(code: string | number) {
	console.log(`My status code is ${code}.`)
}

printStatusCode(404);