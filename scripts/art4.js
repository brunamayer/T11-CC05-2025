const svg4 = d3.select("#art4")
.append("svg")
.attr("width", 1000)
.attr("height", 600);


svg4.append("rect")
    .attr("x", 650)
    .attr("y", 200)
    .attr("width", 100)
    .attr("height", 400)
    .attr("fill", "#8B4513");


const leaves = [
    { cx: 580, cy: 200, r: 75 },
    { cx: 820, cy: 200, r: 75 },
    { cx: 650, cy: 100, r: 75 },
    { cx: 750, cy: 100, r: 75 },
    { cx: 700, cy: 210, r: 75 }
];


svg4.selectAll(".leaf")
    .data(leaves)
    .enter()
    .append("circle")
    .attr("cx", d => d.cx)
    .attr("cy", d => d.cy)
    .attr("r", d => d.r)
    .attr("fill", "green");


const apples = [
    { cx: 575, cy: 275, r: 30 },
    { cx: 575, cy: 175, r: 30 },
    { cx: 700, cy: 175, r: 30 },
    { cx: 815, cy: 175, r: 30 }
];


svg4.selectAll(".apple")
.data(apples)
.enter()
.append("circle")
.attr("cx", d => d.cx)
.attr("cy", d => d.cy)
.attr("r", d => d.r)
.attr("fill", "red")
.on("mouseover", function(event, d) {
    let newCY = d.cy < 275 ? d.cy + 400 : d.cy + 300;
    d3.select(this)
        .transition()
        .ease(d3.easeBounce)
        .duration(2000)
        .attr("cy", newCY); 
})