var options = {
    series: [{
        name: 'Агломерат ЗСМК крупный',
        data: [23.9, 26.2, 27.2, 27.3, 27.4, 26.9]
    }, {
        name: 'Агломерат ЗСМК мелкий',
        data: [43.2, 42.8, 43.8, 43.9, 44.3, 43.3]
    }, {
        name: 'Агломерат складской',
        data: [8.8, 16.9, 16.6, 16.4, 16.8, 30.9]
    }, {
        name: 'Окатыши карельские НО',
        data: [17.7, 16.3, 13.8, 13.6, 13.5, 14.4]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    xaxis: {
        categories: ['2021-05-04Е09:50:20', '2021-05-04T10:30:40', '2021-05-04T11:05:52', '2021-05-04T11:44:28', '2021-05-04T12:26:10', '2021-05-04T13:01:01']

    },
    legend: {
        position: 'right',
        offsetY: 40
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

document.querySelector('#update').addEventListener('click', () => {
    var datetime = document.querySelector('#datetime').value
    var val1 = document.querySelector('#value1').value
    var val2 = document.querySelector('#value2').value
    var val3 = document.querySelector('#value3').value
    var val4 = document.querySelector('#value4').value
    // chart.w.config.labels.push(datetime)
    // var newData = options.series
    options.series[0].data.push(+val1)
    options.series[1].data.push(+val2)
    options.series[2].data.push(+val3)
    options.series[3].data.push(+val4)
    options.xaxis.categories.push(+datetime)
    console.log(options.series);
    // chart.appendData([
    //     { data: [val1] },
    //     { data: [val2] },
    //     { data: [val3] },
    //     { data: [val4] },
    // ])
    chart.destroy();
    chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render()
})

document.querySelector('#delete').addEventListener('click', () => { 
    options.series[0].data.pop()
    options.series[1].data.pop()
    options.series[2].data.pop()
    options.series[3].data.pop()
    options.xaxis.categories.pop()
    chart.destroy();
    chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render()
})