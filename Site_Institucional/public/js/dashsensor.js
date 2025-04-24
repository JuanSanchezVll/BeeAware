const labels = [
    'SENSOR 01',
    'SENSOR 02',
    'SENSOR 03'
];

// Valores de temperatura
const valores = [14, 34, 42];

const cores = valores.map(valor => {
    if (valor < 0) return '#C00000';      
    if (valor < 11) return '#FF0000';     
    if (valor < 21) return '#FFC000';     
    if (valor < 32) return '#FFFF00';     
    if (valor < 37) return '#47D359';     
    if (valor < 40) return '#FFC000';     
    return '#C00000';                     
});

const data = {
    labels: labels,
    datasets: [{
        label: 'TEMPERATURA (°C)',
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
                max: 45,
                ticks: {
                    stepSize: 5,
                    callback: function (value) {
                        return value + '°C';
                    }
                }
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    linha11: {
                        type: 'line',
                        yMin: 11,
                        yMax: 11,
                        borderColor: '#FFC000',
                        borderWidth: 2,
                        label: {
                            content: '11°C',
                            enabled: true,
                            color: '#FFC000',
                            position: 'end'
                        }
                    },
                    linha21: {
                        type: 'line',
                        yMin: 21,
                        yMax: 21,
                        borderColor: '#FFFF00',
                        borderWidth: 2,
                        label: {
                            content: '21°C',
                            enabled: true,
                            color: '#FFFF00',
                            position: 'end'
                        }
                    },
                    linha32: {
                        type: 'line',
                        yMin: 32,
                        yMax: 32,
                        borderColor: '#47D359',
                        borderWidth: 2,
                        label: {
                            content: '32°C',
                            enabled: true,
                            color: '#47D359',
                            position: 'end'
                        }
                    },
                    linha37: {
                        type: 'line',
                        yMin: 37,
                        yMax: 37,
                        borderColor: '#FFC000',
                        borderWidth: 2,
                        label: {
                            content: '37°C',
                            enabled: true,
                            color: '#FFC000',
                            position: 'end'
                        }
                    },
                    linha40: {
                        type: 'line',
                        yMin: 40,
                        yMax: 40,
                        borderColor: '#C00000',
                        borderWidth: 2,
                        label: {
                            content: '40°C',
                            enabled: true,
                            color: '#C00000',
                            position: 'end'
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
