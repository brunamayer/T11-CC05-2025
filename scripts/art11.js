const width11 = 500, height11 = 500;
        
        const art11 = d3.select("#art11")
            .append("svg")
            .attr("width", width11)
            .attr("height", height11);

        let houseX = 200, houseY = 250;
        
        const houseGroup = art11.append("g")
            .attr("transform", `translate(${houseX},${houseY})`);

        // Base da casa
        const base = houseGroup.append("rect")
            .attr("width", 100)
            .attr("height", 100)
            .attr("fill", "#8B0000")
            .attr("stroke", "black");

        // Telhado
        const roof = houseGroup.append("polygon")
            .attr("points", "0,0 50,-50 100,0")
            .attr("fill", "#A52A2A")
            .attr("stroke", "black");

        houseGroup.on("mouseover", function () {
            base.attr("fill", "#FF4500");
            roof.attr("fill", "#FF6347");
        }).on("mouseout", function () {
            base.attr("fill", "#8B0000");
            roof.attr("fill", "#A52A2A");
        });