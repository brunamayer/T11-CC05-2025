// Configuração inicial
const art7 = d3.select("#art7");
const cores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
let corAtual = 0;

// Função para criar o carro
function desenharCarro() {
    // Corpo principal do carro
    art7.append("path")
        .attr("id", "corpo")
        .attr("d", "M50,120 L50,100 C50,80 100,80 120,80 L250,80 C270,80 290,85 300,100 L350,100 L350,120 Z")
        .attr("fill", cores[0])
        .attr("stroke", "black")
        .attr("stroke-width", "2");

    // Teto do carro
    art7.append("path")
        .attr("d", "M130,80 L140,50 L260,50 L270,80")
        .attr("fill", cores[0])
        .attr("stroke", "black")
        .attr("stroke-width", "2");

    // Janelas
    art7.append("path")
        .attr("d", "M142,77 L150,55 L250,55 L258,77")
        .attr("fill", "#87CEEB")
        .attr("stroke", "black")
        .attr("stroke-width", "1");

    // Rodas
    const rodas = [
        {x: 100, y: 120},
        {x: 300, y: 120}
    ];

    rodas.forEach(roda => {
        // Pneu externo
        art7.append("circle")
            .attr("cx", roda.x)
            .attr("cy", roda.y)
            .attr("r", 25)
            .attr("fill", "black");

        // Roda interna
        art7.append("circle")
            .attr("cx", roda.x)
            .attr("cy", roda.y)
            .attr("r", 15)
            .attr("fill", "#777");

        // Detalhes da roda
        for(let i = 0; i < 8; i++) {
            const angle = (i * Math.PI / 4);
            art7.append("line")
                .attr("x1", roda.x + Math.cos(angle) * 8)
                .attr("y1", roda.y + Math.sin(angle) * 8)
                .attr("x2", roda.x + Math.cos(angle) * 14)
                .attr("y2", roda.y + Math.sin(angle) * 14)
                .attr("stroke", "black")
                .attr("stroke-width", "2");
        }
    });

    // Farol
    art7.append("circle")
        .attr("cx", 350)
        .attr("cy", 90)
        .attr("r", 5)
        .attr("fill", "yellow")
        .attr("stroke", "black");

    // Adicionar interatividade
    d3.select("#corpo")
        .style("cursor", "pointer")
        .on("click", mudarCor);
}

// Função para mudar a cor do carro
function mudarCor() {
    corAtual = (corAtual + 1) % cores.length;
    art7.selectAll("#corpo, path:nth-child(2)")
        .transition()
        .duration(500)
        .attr("fill", cores[corAtual]);
}

// Inicializar o desenho
desenharCarro();
