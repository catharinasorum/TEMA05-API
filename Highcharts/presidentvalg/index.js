
const options = {
    chart: {
        type: "bar",
        renderTo: "president-chart"
    },
    title: {
        text: "Hvem vil du ha som president?"
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: "Hvem har fått flest stemmer?"
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: "normal"
        }
    },
    series: [
        {
            name: "Obama",
            data: [33]
        },
        {
            name: "Trump",
            data: [33]
        },
        {
            name: "Hillary",
            data: [34]
        }
    ]
};


const chart = new Highcharts.Chart(options);


let obamaVotes = 0;
let trumpVotes = 0;
let hillaryVotes = 0;

const btns = document.querySelector("#btns");


btns.onclick = (evt) => {


    const president = evt.target.dataset.president;

    if(!president) return; // avlsutter funksjonen

    switch(president) {
        case "obama": 
            obamaVotes++;
            break;
        case "trump":
            trumpVotes++;
            break;
        case "hillary":
            hillaryVotes++;
    };
    
    const total = obamaVotes + trumpVotes + hillaryVotes;

    const obamaProsent = 100 * obamaVotes / total;
    const trumpProsent = 100 * trumpVotes / total;
    const hillaryProsent = 100 * hillaryVotes / total;

chart.series[0].update( {data: [obamaProsent]} );
chart.series[1].update( {data: [trumpProsent]} );
chart.series[2].update( {data: [hillaryProsent]} );


};
