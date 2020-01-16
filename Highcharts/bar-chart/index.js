
const myChart = Highcharts.chart('container', {
    chart: {
        type: 'column' // kan også bruke bar
    },
    title: {
        text: 'Hvor mye frukt spiser vi?' // teksten som kommer i toppen
    },
    xAxis: {
        categories: ['Epler', 'Bananer', 'Appelsiner']
    },
    yAxis: {
        title: {
            text: 'Antall frukt spist'
        }
    },
    series: [{
        name: 'Catharina',
        data: [1, 3, 2]
    }, {
        name: 'Christine',
        data: [3, 4, 1]
    }]
});