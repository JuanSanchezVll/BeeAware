const labels = [
    'APIÁRIO 01',
    'APIÁRIO 02',
    'APIÁRIO 03',
    'APIÁRIO 04',
    'APIÁRIO 05',
    'APIÁRIO 06'
];

const valores = [0, 10, 7, 4, 6, 2];
const cores = valores.map(valor => {
    if (valor <= 2) return '#47D359';     
    if (valor <= 4) return '#FFFF00';     
    if (valor <= 6) return '#FFC000';     
    if (valor <= 8) return '#FF0000';     
    return '#C00000';                      
});

const data = {
    labels: labels,
    datasets: [{
        label: 'GRAU DE PREJUIZO',
        data: valores,
        backgroundColor: cores,
        barPercentage: 0.5,
        barThickness: 40,
        maxBarThickness: 50,
        minBarLength: 5
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                ticks: {
                    stepSize: 1,
                    callback: function (value) {
                        return value;
                    }
                }
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    linha3: {
                        type: 'line',
                        yMin: 3,
                        yMax: 3,
                        borderColor: '#FFFF00',
                        borderWidth: 2,
                        label: {
                            content: '3',
                            enabled: true,
                            color: '#FFFF00'
                        }
                    },
                    linha5: {
                        type: 'line',
                        yMin: 5,
                        yMax: 5,
                        borderColor: '#FFC000',
                        borderWidth: 2,
                        label: {
                            content: '5',
                            enabled: true,
                            color: '#FFC000'
                        }
                    },
                    linha7: {
                        type: 'line',
                        yMin: 7,
                        yMax: 7,
                        borderColor: '#FF0000',
                        borderWidth: 2,
                        label: {
                            content: '7',
                            enabled: true,
                            color: '#FF0000'
                        }
                    },
                    linha9: {
                        type: 'line',
                        yMin: 9,
                        yMax: 9,
                        borderColor: '#C00000',
                        borderWidth: 2,
                        label: {
                            content: '9',
                            enabled: true,
                            color: '#C00000'
                        }
                    }
                }
            }
        }
    },
    plugins: [Chart.registry.getPlugin('annotation')]
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
