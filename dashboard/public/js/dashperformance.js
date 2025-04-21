const labels = [
    'SETOR 01',
    'SETOR 02',
    'SETOR 03',
    'SETOR 04',
    'SETOR 05',
    'SETOR 06'
];

const valores = [0, 10, 24, 36, 55, 80];
const cores = valores.map(valor => {
    if (valor < 16) return '#C00000'; // vermelho escuro
    if (valor < 26) return '#FF0000'; // vermelho
    if (valor <= 49) return '#FFC000'; // laranja
    if (valor <= 74) return '#FFFF00'; // amarelo
    return '#47D359'; // verde
});

const data = {
    labels: labels,
    datasets: [{
        label: 'SETORES',
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
                max: 100,
                ticks: {
                    callback: function (value) {
                        return value + '%';
                    }
                }
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    linha16: {
                        type: 'line',
                        yMin: 16,
                        yMax: 16,
                        borderColor: '#FF0000',
                        borderWidth: 2,
                        label: {
                            content: '16%',
                            enabled: true,
                            color: '#FF0000'
                        }
                    },
                    linha26: {
                        type: 'line',
                        yMin: 26,
                        yMax: 26,
                        borderColor: '#FFC000',
                        borderWidth: 2,
                        label: {
                            content: '26%',
                            enabled: true,
                            color: '#FFC000'
                        }
                    },
                    linha50: {
                        type: 'line',
                        yMin: 50,
                        yMax: 50,
                        borderColor: '#FFFF00',
                        borderWidth: 2,
                        label: {
                            content: '50%',
                            enabled: true,
                            color: '#FFFF00'
                        }
                    },
                    linha75: {
                        type: 'line',
                        yMin: 75,
                        yMax: 75,
                        borderColor: '#47D359',
                        borderWidth: 2,
                        label: {
                            content: '75%',
                            enabled: true,
                            color: '#47D359'
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

