//Just like before, we load the data from a file
d3.csv("wiki_data_country.csv", null,
    //Then, we can "clean up" the data before we use it
    function(data) {
        return {
            //we only want country and its total alcohol consumption
            country: data["Country"],
            total: data["Total"],
            projection: data["2025 projection"]
        };
    }).then(
    function(data) {

        var margin = { top: 30, right: 30, bottom: 130, left: 30 };
        var width = 2900;
        var height = 400;

        var svg = d3.select('#c1viz')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ")");
        //A Band scale is good for discrete values, such as the number of bars in a bar chart
        var x = d3.scaleBand()
                    .domain(data.map(function(d) { 
                        return d.country; 
                    }))
                    .range([0, width])
                    .padding(0.1);

        //A Linear scale is good for continuous values, such as real numbers (like birthrates)
        var y = d3.scaleLinear()
        .domain([0, 17])
        .range([height, 0]);



        svg.selectAll(".bar")
            .data(data)
            .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", function(d) { return x(d.country); })
                .attr("y", function(d) { return y(d.total); })
                .attr("width", x.bandwidth())
                .attr("height", function(d) { return height - y(d.total); })
                .attr("fill", function(d){ return d.country == " United Kingdom"? "#B80F08" : "steelblue"});

        // console.log(height);

        //Add the x axis
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

        //Add the y axis
        svg.append("g")
        .call(d3.axisLeft(y));

        data = data.sort(function(a, b){
            // This function is what is called a 'comparator'. Comparators return -1 if the first value is less than the second, 0 if both are equal, or 1 if the first value is greater than the second.
            if (a.total < b.total) {
              return -1;
            }
            else if (a.total === b.total) {
              return 0;
            }
            return 1;
          });


          
    }
);

d3.csv("beaudata.csv").then(
    function(data) {
        var final = [];
        var bev = ['Other alcoholic beverages', 'Spirits', 'Wine', 'Beer', 'All types'];

        data.forEach(function(d){
            if (bev.indexOf(d.Beverage) > -1){
                var processedData = [];
                processedData.bev = d.Beverage;
                processedData.values = [];
                data.columns.slice(1).forEach(function(year){
                    var dataPoint = {};
                    dataPoint.year = new Date(+year, 0 , 1);
                    dataPoint.value = +d[year];
                    processedData.values.push(dataPoint);
                });
                final.push(processedData);
            }
        });


        data = final;

        var margin = { top: 100, right: 0, bottom: 100, left: 50 };
        var width = 780;
        var height = 300;

        var svg = d3.select('#c2g')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom) 
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ")");


        //Our scales are a little more complicated this time
        //Because we have an array of arrays, we need to call d3.min and d3.max *twice*
        var x = d3.scaleTime()
        .domain([
        d3.min(data, function(c) { return d3.min(c.values, function(d) { return d.year; }); }),
        d3.max(data, function(c) { return d3.max(c.values, function(d) { return d.year; }); })
        ])
        .range([0, width]);

        var y = d3.scaleLinear()
        .domain([
        d3.min(data, function(c) { return d3.min(c.values, function(d) { return d.value; }); }),
        d3.max(data, function(c) { return d3.max(c.values, function(d) { return d.value; }); })
        ])
        .range([height, 0]);

        //We're also going to define a colourscheme;
        var colourScheme = d3.scaleOrdinal(d3.schemeCategory10)
        .domain(data.map(function(d) { return d.Beverage; }));

        //Now to define the line: this looks similar to how we did it previously,
        //but pay attention to how we use it below!
        var line = d3.line()
        .x(function(d) { return x(d.year); })
        .y(function(d) { return y(d.value); });


        //We use selectAll to create (and manipulate) a number of
        //groups at once
        var bev = svg.selectAll(".beverage")
        .data(data)
        .enter().append("g")
        .attr("class", "beverage");

        //We then add a path to *every* "beverage" group at once
        bev.append("path")
        .attr("class", "line")
        //This time, when we create the line, we pass the array of values
        //for each beverage directly to it as a *parameter*
        .attr("d", function(d) { return line(d.values); })
        .attr("fill", "none")
        .attr("stroke-width", 3)
        //Finally, we set the colour based on the scheme
        .style("stroke", function(d) {
            // console.log(d);    
            return colourScheme(d.bev); 
        });

        pathLength = 1000;

        const transitionPath = d3
                                .transition()
                                .ease(d3.easeSin)
                                .duration(3000);

        bev
        .attr("stroke-dashoffset", pathLength)
        .attr("stroke-dasharray", pathLength)
        .transition(transitionPath)
        .attr("stroke-dashoffset", 0);

        //Add the x axis
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .append("text")
        .attr("fill", "#000")
        .attr("y", 40)
        .attr("x", width/2)
        .attr("text-anchor", "middle")
        .text("Year");

        //Add the y axis
        svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("y", -40)
        .attr("x", -height/2)
        .attr("transform", "rotate(-90)")
        .attr("text-anchor", "middle")
        .text("Litres of pure alcohol");

        var legend = svg.selectAll(".legend")
                        .data(data)
                        .enter().append("g")
                        .attr("class", "legend")
                        .attr("transform", function(d, i) { return "translate(0," + (i+3) * 20 + ")"; });
        legend.append("rect")
        .attr("x", width - 10)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function(d){ return colourScheme(d.bev)});

        legend.append("text")
        .attr("x", width - 15)
        .attr("y", 5)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .style("font-size", "60%")
        .style("font-weight", "bold")
        .text(function(d) { return d.bev; });


    }
  );




d3.csv("pie.csv").then(
    function(data) {
        
        var margin = { top: 50, right: 50, bottom: 50, left: 50 };
        var width = 200;
        var height = 200;
        var svg = d3.select('#pie')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ")");

        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var ordScale = d3.scaleOrdinal(d3.schemeCategory10)
                        .domain(data.map(function(d) { return d.Name; }));
        
        // console.log(ordScale('Beer'));
        var pie = d3.pie().value(function(d) {
            return d.Value;
        });

        // console.log(pie(data));
        var arcs = g.selectAll("arcs")
                    .data(pie(data))
                    .enter();
        
        arc = arcs;
        var path = d3.arc()
                    .outerRadius(130)
                    .innerRadius(0);
        
        arcs.append("path")
            .attr("d", path)
            .attr("fill", function(d) { 
                return ordScale(d.data.Name); 
            }
        );

        var arcLabel = function(){
            const radius = Math.min(width, height) / 2 * 0.8;
            return d3.arc().innerRadius(radius).outerRadius(radius);
        }
        console.log(arcLabel);
        console.log(arc);
        arcs.append("text")
            .attr("transform", d => `translate(${arcLabel().centroid(d)})`)
            .text(function(d){
                return d.data.Value;
            })
            .attr("font-size", "80%")
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle");


    }
);
