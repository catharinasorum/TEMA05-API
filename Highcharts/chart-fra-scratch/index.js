// Bruk helst dette oppsettet på charts.

const options = {
    chart: {
        renderTo: "container",
        type: "column"
    },
    title: {
        text: "Fotball-statistikk"
    },
    series: [
        {
            name: "Eksempel spiller",
            data: [10, 5, 2]
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

/*// Knappen skal bytte spiller når den trykkes på
const btn = document.querySelector("#btn");
btn.onclick = () => {
    chart.title.update(
        {text: "Fotball-statistikk"}
    );
    chart.series[0].update(
        {
            name: "Tom Lund",
            data: [20, 30, 40]
        }
    );
};
*/

// Tom
const btnTom = document.querySelector("#btnTom");
btnTom.onclick = () => {

    chart.series[0].update(
        {
            name: "Tom Lund",
            data: [20, 30, 40]
        }
    );
};

// Alan
const btnAlan = document.querySelector("#btnAlan");
btnAlan.onclick = () => {
    chart.series[0].update(
        {
            name: "Alan Ball",
            data: [20, 15, 5]
        }
    );
};
