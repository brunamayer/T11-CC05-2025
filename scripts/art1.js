const svg = d3.select("#art1")
    .attr("viewBox", "200 250 700 500");

const cxValores = [875, 800, 725, 650, 575, 500, 425, 350];
const cy = 500;
const r = 50; 

const segmentos = cxValores.map(cx => ({ cx, cy, r }));

// Adiciona os segmentos do corpo com interação
svg.selectAll(".seg-minhoca")
    .data(segmentos)
    .enter()
    .append("circle")
    .attr("class", "seg-minhoca")
    .attr("fill", "#e84a4a")
    .attr("stroke", "#1d1d1b")
    .attr("stroke-width", 8)
    .attr("cx", d => d.cx)
    .attr("cy", d => d.cy)
    .attr("r", d => d.r)
    .on("mouseover", function (event, d) {
        d3.select(this)
            .transition()
            .ease(d3.easeCubicOut)
            .duration(300)
            .attr("cy", d.cy - 30);
    })
    .on("mouseout", function (event, d) {
        d3.select(this)
            .transition()
            .ease(d3.easeCubicIn)
            .duration(300)
            .attr("cy", d.cy);
    });

// Olhos
svg.append("circle")
    .attr("class", "olho")
    .attr("fill", "black")
    .attr("cx", 310)
    .attr("cy", cy)
    .attr("r", 10);

svg.append("circle")
    .attr("class", "olho")
    .attr("fill", "black")
    .attr("cx", 370)
    .attr("cy", cy)
    .attr("r", 10);
