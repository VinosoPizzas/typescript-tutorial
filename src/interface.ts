//interface são parecidos com os aliases, mas apenas para objetos

interface Rectangle {
	height: number,
	width: number
}

const rectangle: Rectangle = {
	height: 20,
	width: 10,
}

//interfaces podem extender suas definições, parecido com herança em POO

interface ColoredRectangle extends Rectangle {
	color: string
}

const coloredRectangle: ColoredRectangle = {
	height: 20,
	width: 10,
	color: "red"
};