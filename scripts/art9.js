const art9 = d3.select("#art9");

const posicoesRodas = [
    { cx: 350, cy: 450, r: 40 },
    { cx: 550, cy: 450, r: 40 }
]




// ------- CHAO --------
art9.append("rect")
.attr("x", 0) // cx e cy apenas para circulo
.attr("y", 0) // usa x e y para retangulo
.attr("width", 800)
.attr("height", 600)
.attr("fill", "#87cefa")

// ------- CHAO --------
art9.append("rect")
.attr("x", 0) // cx e cy apenas para circulo
.attr("y", 460) // usa x e y para retangulo
.attr("width", 800)
.attr("height", 200)
.attr("fill", "gray")


// --- Linha da rua 
const linhaDaRua = art9.append("line")
.attr("x1", 0)
.attr("y1", 550)
.attr("x2", 900)
.attr("y2", 550)
.attr("stroke", "yellow")
.attr("stroke-width", 3)
.attr("stroke-dasharray", "90"); // linha tracejada





// --- Corpo do carro ---
art9.append("rect")
.attr("x", 300) // cx e cy apenas para circulo
.attr("y", 320) // usa x e y para retangulo
.attr("width", 320)
.attr("height", 100)
.attr("fill", " red")
.attr("stroke", "black")
.attr("stroke-width", 3)
.on("mouseover", () => {
    linhaDaRua.transition()
    .duration(2000)
    .ease(d3.easeCubicInOut)
    .attr("x1", -700)
    .attr("x2", -700);
})
.on("mouseout", () => {
    linhaDaRua.transition()
    .duration(500)
    .ease(d3.easeCubicInOut)
    .attr("x1", 100)
    .attr("x2", 800);
});

// ----- RODAS -----
art9.selectAll(".rodas")
    .data(posicoesRodas)
    .enter()
    .append("circle")
    .attr("class", "rodas")
    .attr("fill", "#999B9B")
    .attr("stroke", "black")
    .attr("stroke-width", 9)
    .attr("cx", d => d.cx)
    .attr("cy", d => d.cy)
    .attr("r", d => d.r)

// --- Teto do carro --- 
art9.append("rect")
    .attr("x", 350)
    .attr("y", 220)
    .attr("width", 200)
    .attr("height", 100)
    .attr("fill", " red")
    .attr("stroke", "black")
    .attr("stroke-width", 3)
// --- Janela do carro --- 
art9.append("rect")
    .attr("x", 373)
    .attr("y", 240)
    .attr("width", 65)
    .attr("height", 70)
    .attr("fill", "#ddd9ce")
    .attr("stroke", "black")
    .attr("stroke-width", 3)
    
art9.append("rect")
    .attr("x", 455)
    .attr("y", 240)
    .attr("width", 65)
    .attr("height", 70)
    .attr("fill", "#ddd9ce")
    .attr("stroke", "black")
    .attr("stroke-width", 3)


// --- cabeça --- 
art9.append("circle")
    .attr("fill", "black")
    .attr("cx", 477)
    .attr("cy", 270)
    .attr("r", 18)


// --- corpo --- 

art9.append("line")
    .attr("x1", 477)
    .attr("y1", 280)
    .attr("x2", 477)
    .attr("y2", 310)
    .attr("stroke", "black")
    .attr("stroke-width", 5)


// --- Braço --- 

art9.append("line")
    .attr("x1", 510)
    .attr("y1", 290)
    .attr("x2", 477)
    .attr("y2", 310)
    .attr("stroke", "black")
    .attr("stroke-width", 3)

// --- Volante --- 

art9.append("line")
    .attr("x1", 510)
    .attr("y1", 280)
    .attr("x2", 510)
    .attr("y2", 305)
    .attr("stroke", "black")
    .attr("stroke-width", 6)

