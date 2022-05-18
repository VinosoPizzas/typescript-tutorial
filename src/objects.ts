const car = {
	type: "Toyota",
}

car.type = "Ford";

//tipos, ou, propriedades podem ser declaradas como opcional ou obrigatória

const motorSport: {type: string, mileage: number} = { //declaracao obg
	type: "Porsche",
	mileage: 200000,
}

const muscleCar: {type: string, mileage?: number} = { //declaracao opc
	type: "Mustang",
}

//arrays podem receber tipos como padrão na sua declaração, e cada elemento

const novaIdade: {[index: string]: number} = {};


novaIdade.Marcos = 25;