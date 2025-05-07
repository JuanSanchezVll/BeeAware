const labels = [
    'SENSOR 01',
    'SENSOR 02',
    'SENSOR 03'
];

// Valores de temperatura
const valores = [24, 34, 42];

// mapeamento de cores segundo as suas faixas
const cores = valores.map(valor => {
    if (valor <= 19) return '#FF0000';
    if (valor >= 20 && valor < 32) return '#FFFF00';
    if (valor >= 32 && valor < 37) return '#47D359';
    if (valor >= 37 && valor <= 40) return '#FFFF00';
    return '#FF0000';
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
                    color: '#FFFFFF',
                    callback: value => value + '°C'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',  // idem no eixo X
                    borderDash: [5, 5]
                }
            },
            x: {
                ticks: { color: '#FFFFFF' },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',  // idem no eixo X
                    borderDash: [5, 5]
                }
            }
        },
        plugins: {
            legend: {
                labels: { color: '#FFFFFF' }
            },
            annotation: {
                annotations: {
                    linha0: {
                        type: 'line',
                        yMin: 0,
                        yMax: 0,
                        borderColor: '#FF0000',
                        borderWidth: 2
                    },
                    linha20: {
                        type: 'line',
                        yMin: 20,
                        yMax: 20,
                        borderColor: '#FFFF00',
                        borderWidth: 2,
                        label: {
                            content: '20°C',
                            enabled: true,
                            color: '#FFFF00',
                            backgroundColor: '#000000',
                            borderColor: '#FFFF00',
                            borderWidth: 1,
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
                            backgroundColor: '#000000',
                            borderColor: '#47D359',
                            borderWidth: 1,
                            position: 'end'
                        }
                    },
                    linha37: {
                        type: 'line',
                        yMin: 37,
                        yMax: 37,
                        borderColor: '#FFFF00',
                        borderWidth: 2,
                        label: {
                            content: '37°C',
                            enabled: true,
                            color: '#FFFF00',
                            backgroundColor: '#000000',
                            borderColor: '#FFFF00',
                            borderWidth: 1,
                            position: 'end'
                        }
                    },
                    linha40: {
                        type: 'line',
                        yMin: 40,
                        yMax: 40,
                        borderColor: '#FF0000',
                        borderWidth: 2,
                        label: {
                            content: '40°C',
                            enabled: true,
                            color: '#FF0000',
                            backgroundColor: '#000000',
                            borderColor: '#FF0000',
                            borderWidth: 1,
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




