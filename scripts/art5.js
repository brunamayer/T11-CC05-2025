const svg5 = d3.select("#art5");

// Corpo do pinguim
svg5.append("ellipse")
    .attr("cx", 300)
    .attr("cy", 300)
    .attr("rx", 60)
    .attr("ry", 100)
    .attr("fill", "black");

svg5.append("ellipse")
    .attr("cx", 300)
    .attr("cy", 310)
    .attr("rx", 40)
    .attr("ry", 80)
    .attr("fill", "white");

// Cabeça
svg5.append("circle")
    .attr("cx", 300)
    .attr("cy", 200)
    .attr("r", 40)
    .attr("fill", "black");

// Olhos
svg5.append("circle")
    .attr("cx", 285)
    .attr("cy", 190)
    .attr("r", 8)
    .attr("fill", "white");

svg5.append("circle")
    .attr("cx", 315)
    .attr("cy", 190)
    .attr("r", 8)
    .attr("fill", "white");

svg5.append("circle")
    .attr("cx", 285)
    .attr("cy", 190)
    .attr("r", 4)
    .attr("fill", "black");

svg5.append("circle")
    .attr("cx", 315)
    .attr("cy", 190)
    .attr("r", 4)
    .attr("fill", "black");

// Bico interativo
let bicoAberto = false;
const bico = svg5.append("polygon")
    .attr("points", "290,210 310,210 300,230")
    .attr("fill", "orange")
    .style("cursor", "pointer")
    .on("click", function() {
        bicoAberto = !bicoAberto;
        d3.select(this).attr("points", bicoAberto ? "290,210 310,210 300,240" : "290,210 310,210 300,230");
    });

// Asas interativas
let asasAbertas = false;
const esquerda = svg5.append("ellipse")
    .attr("cx", 240)
    .attr("cy", 300)
    .attr("rx", 10)
    .attr("ry", 50)
    .attr("fill", "black")
    .style("cursor", "pointer");

const direita = svg5.append("ellipse")
    .attr("cx", 360)
    .attr("cy", 300)
    .attr("rx", 10)
    .attr("ry", 50)
    .attr("fill", "black")
    .style("cursor", "pointer");

svg5.on("click", function() {
    asasAbertas = !asasAbertas;
    esquerda.transition().duration(300)
        .attr("cx", asasAbertas ? 200 : 240)
        .attr("cy", asasAbertas ? 250 : 300)
        .attr("rx", asasAbertas ? 50 : 10)
        .attr("ry", asasAbertas ? 10 : 50);
    direita.transition().duration(300)
        .attr("cx", asasAbertas ? 400 : 360)
        .attr("cy", asasAbertas ? 250 : 300)
        .attr("rx", asasAbertas ? 50 : 10)
        .attr("ry", asasAbertas ? 10 : 50);
});

// Patas
svg5.append("ellipse")
    .attr("cx", 270)
    .attr("cy", 390)
    .attr("rx", 20)
    .attr("ry", 10)
    .attr("fill", "orange");

svg5.append("ellipse")
    .attr("cx", 330)
    .attr("cy", 390)
    .attr("rx", 20)
    .attr("ry", 10)
    .attr("fill", "orange");
