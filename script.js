let container = d3.select("#container");
let figure = container.select("figure");
let article = container.select("article");

// initiate the scrollama
let scroller = scrollama();

    let step = article.selectAll(".step");
    let titles = ["Eva Marsh", "Published Works", "Blog/Writings", "Connect"];

    scroller
    .setup({
        step: "#container article .step",
        offset: .75,
        debug: false
    })
    .onStepEnter(response => {
        step.classed("is-active", function(d, i) {
            return i === response.index;
        })
        let title = titles[response.index];

        figure.select("h1").text(`${title}`);
        figure.selectAll("p").text("");

    })
    .onStepExit(response => {
    });

