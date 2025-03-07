// Seleciona o SVG
const svg2 = d3.select("#art2").append("svg")
    .attr("width", 500)
    .attr("height", 500);

// Adiciona o rosto
const face = svg2.append("circle")
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", 100)
    .attr("fill", "pink")
    .attr("stroke-width", 3);

// Olhos
const leftEye = svg2.append("circle")
    .attr("cx", 220)
    .attr("cy", 230)
    .attr("r", 10)
    .attr("fill", "black");

const rightEye = svg2.append("circle")
    .attr("cx", 280)
    .attr("cy", 230)
    .attr("r", 10)
    .attr("fill", "black");

// Boca
const mouth = svg2.append("path")
    .attr("d", "M 210 280 Q 250 320 290 280")
    .attr("stroke", "black")
    .attr("fill", "none")
    .attr("stroke-width", 3);

// Nariz
const nose = svg2.append("circle")
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", 20)
    .attr("fill", "red");

// Cabelo
const hair1 = svg2.append("circle")
    .attr("cx", 250)
    .attr("cy", 150)
    .attr("r", 30)
    .attr("fill", "yellow")
    .attr("stroke-width", 3);

const hair2 = svg2.append("circle")
    .attr("cx", 200)
    .attr("cy", 160)
    .attr("r", 30)
    .attr("fill", "blue")
    .attr("stroke-width", 3);

const hair3 = svg2.append("circle")
    .attr("cx", 170)
    .attr("cy", 190)
    .attr("r", 30)
    .attr("fill", "green")
    .attr("stroke-width", 3);

const hair4 = svg2.append("circle")
    .attr("cx", 325)
    .attr("cy", 190)
    .attr("r", 30)
    .attr("fill", "orange")
    .attr("stroke-width", 3);

const hair5 = svg2.append("circle")
    .attr("cx", 305)
    .attr("cy", 160)
    .attr("r", 30)
    .attr("fill", "purple")
    .attr("stroke-width", 3);

// Fechar os olhos
leftEye.on("mouseover", function () {
    leftEye.transition()
        .duration(200)
        .attr("r", 2);
});

rightEye.on("mouseover", function () {
    rightEye.transition()
        .duration(200)
        .attr("r", 2);
});

// Abrir os olhos
leftEye.on("mouseout", function () {
    leftEye.transition()
        .duration(200)
        .attr("r", 10);
});

rightEye.on("mouseout", function () {
    rightEye.transition()
        .duration(200)
        .attr("r", 10);
});

// Apertar o nariz
nose.on("mouseover", function () {
    nose.transition()
        .duration(200)
        .attr("r", 25);
});

// Nariz normal
nose.on("mouseout", function () {
    nose.transition()
        .duration(200)
        .attr("r", 20);
});