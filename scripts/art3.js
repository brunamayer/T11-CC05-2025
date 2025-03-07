const svg3 = d3.select("#art3")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

svg3.append("circle")
  .attr("cx", 100)
  .attr("cy", 80)
  .attr("r", 50)
  .attr("fill", "red");

svg3.append("ellipse")
  .attr("cx", 100)
  .attr("cy", 120)
  .attr("rx", 30)
  .attr("ry", 20)
  .attr("fill", "beige");

svg3.append("rect")
  .attr("x", 85)
  .attr("y", 110)
  .attr("width", 10)
  .attr("height", 20)
  .attr("fill", "black");

svg3.append("rect")
  .attr("x", 105)
  .attr("y", 110)
  .attr("width", 10)
  .attr("height", 20)
  .attr("fill", "black");

svg3.append("circle")
  .attr("cx", 100)
  .attr("cy", 50)
  .attr("r", 15)
  .attr("fill", "white");

svg3.append("circle")
  .attr("cx", 70)
  .attr("cy", 80)
  .attr("r", 12)
  .attr("fill", "white");

svg3.append("circle")
  .attr("cx", 130)
  .attr("cy", 80)
  .attr("r", 12)
  .attr("fill", "white");
