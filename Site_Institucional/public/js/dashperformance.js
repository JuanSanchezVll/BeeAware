const labels = [
    'SETOR 01',
    'SETOR 02',
    'SETOR 03',
    'SETOR 04',
    'SETOR 05',
    'SETOR 06'
];

const valores = [0, 90, 24, 36, 55, 80];
const cores = valores.map(valor => {
    if (valor < 16) return '#8b008b'; 
    if (valor < 26) return '#FF0000';
    if (valor <= 49) return '#ff8c00'; 
    if (valor <= 74) return '#FFFF00';
    return '#47D359'; 
});

const data = {
    labels: labels,
    datasets: [{
        label: 'PERFORMANCE',
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
            color: '#FFFFFF',
            callback: value => value + '%'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)',  // branco com 20% de opacidade
            borderDash: [5, 5]                   // traço de 5px, espaço de 5px
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
                    linha16: {
                        type: 'line',
                        yMin: 16,
                        yMax: 16,
                        borderColor: '#FF0000',
                        borderWidth: 2,
                        label: {
                            content: '16%',
                            enabled: true,
                            color: '#FF0000',
                            backgroundColor: '#00000', // fundo transparente
                            borderColor: '#FF0000',
                            borderWidth: 1,
                            
                        }
                    },
                    linha26: {
                        type: 'line',
                        yMin: 26,
                        yMax: 26,
                        borderColor: '#ff8c00',
                        borderWidth: 2,
                        label: {
                            content: '26%',
                            enabled: true,
                            color: '#ff8c00',
                            backgroundColor: '#00000',
                            borderColor: '#ff8c00',
                            borderWidth: 1,
                            
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
                            color: '#FFFF00',
                            backgroundColor: '#00000',
                            borderColor: '#FFFF00',
                            borderWidth: 1,
                            
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
                            color: '#47D359',
                            backgroundColor: '#00000',
                            borderColor: '#47D359',
                            borderWidth: 1,
                            
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
