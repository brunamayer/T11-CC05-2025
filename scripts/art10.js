
// Define largura para a div
const n = 500;
const maxIterations = 50000; // Estabelece limite para o número de iterações do jogo do caos

// Define cores para os pontos
const colors = ['lime', 'purple', 'red', 'cyan', 'magenta'];

// Define função que gera os pontos de um pentágono
function pentagonVertices(n) {
	const Cx = n / 2,
		Cy = n / 2;
	const R = n / 2 - 50;
	const theta0 = Math.PI / 2;

	return Array.from({ length: 5 }, (_, i) => {
		const angle = theta0 - (i * 2 * Math.PI) / 5;
		return { x: Cx + R * Math.cos(angle), y: Cy + R * Math.sin(angle) };
	});
}

// Cria lista com as coordenadas dos vértices do pentágono
const vertices = pentagonVertices(n);

// Cria svg
const art10 = d3
	.select('#art10')
	.append('svg')
	.attr('width', n)
	.attr('height', n);

// Define primeiro ponto atual ao acaso
let currentPoint = {
	x: Math.random() * n,
	y: Math.random() * n,
};

// Define função para desenhar 1 ponto
const drawPoint = (point) => {
	art10
		.append('circle')
		.attr('cx', point.x)
		.attr('cy', point.y)
		.attr('r', 0.7)
		.attr('fill', colors[Math.floor(Math.random() * colors.length)]);
};

// Cria função para o jogo do caos
const drawChaosGame = () => {
	let i = 0;
	let intervalId = setInterval(() => {
		// Escolhe aleatoriamente um vértice
		const randomVertex = vertices[Math.floor(Math.random() * vertices.length)];

        // Determina o ponto atual
		currentPoint = {
			x: currentPoint.x + (randomVertex.x - currentPoint.x) * 0.618,
			y: currentPoint.y + (randomVertex.y - currentPoint.y) * 0.618,
		};

		// Desenhar um ponto no SVG
		drawPoint(currentPoint);

        // Acaba com o loop caso o limite de iterações seja atingido
		if (i == maxIterations) {
			clearInterval(intervalId);
		} else {
			i++;
		}
	}, 1);
};

// Desenhar os vértices do triângulo
vertices.forEach((vertex) => {
	art10
		.append('circle')
		.attr('cx', vertex.x)
		.attr('cy', vertex.y)
		.attr('r', 5)
		.attr('fill', 'black');
});

// Inicia o jogo do caos
drawChaosGame();