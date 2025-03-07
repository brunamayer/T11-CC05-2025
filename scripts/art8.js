const width = 800;
const height = 800;

var svgSelection = d3.select("#art8")
        .attr("width", width)
        .attr("height", height);

var head = svgSelection
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", 200)
        .style("fill", "#11EE55");

var eye = svgSelection
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", 100)
        .style("fill", "white");

var pupil = svgSelection
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", 50)
        .style("fill", "#5cffa0")
        .on("mousedown", function () {
          d3.select(this).style("fill", "red");
        })
        .on("mouseup", function () {
          d3.select(this).style("fill", "#5cffa0");
        });
