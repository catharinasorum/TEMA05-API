// Bruk helst dette oppsettet på charts.

const options = {
    chart: {
        renderTo: "container",
        type: "column"
    },
    title: {
        text: "Mitt diagram"
    },
    series: [
        {
            name: "Allan Ball",
            data: [20, 15, 5]
        }
    ],
    xAxis: {
        categories: ["Scoringer", "Assists", "Gule kort"]
    },
    yAxis: {
        title: {
            text: ""
        }
    }
};

const chart = new Highcharts.Chart(options);