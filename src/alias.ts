//typescript permite a criação de tipos específicos para objetos primitivos
//como string ou number, e para objetos mais complexos, como array ou tuple

type CarYear = number
type CarType = string
type CarModel = string

type Car = {
	year: CarYear,
	type: CarType,
	model: CarModel
}

const carYear: CarYear = 2001;
const carType: CarType = "Ford";
const carModel: CarModel = "Corvette"

const vehicle: Car = {
	year: carYear,
	type: carType,
	model: carModel,
};