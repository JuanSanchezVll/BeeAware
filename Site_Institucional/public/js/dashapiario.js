const labels = [
  'APIÁRIO 01',
  'APIÁRIO 02',
  'APIÁRIO 03',
  'APIÁRIO 04'
];

const valores = [0, 10, 7, 4]; // Apenas 4 valores
const cores = valores.map(valor => {
  if (valor <= 2) return '#47D359';     // Verde
  if (valor <= 4) return '#FFFF00';     // Amarelo
  if (valor <= 6) return '#FFC000';     // Laranja
  if (valor <= 8) return '#FF0000';     // Vermelho
  return '#8b008b';                     // Vermelho escuro
});

const data = {
  labels: labels,
  datasets: [{
    label: 'GRAU DE RISCO',
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
          color: '#FFFFFF', // Letras brancas no eixo Y
          stepSize: 1,
          callback: function (value) {
            return value;
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',  // branco com 20% de opacidade
          borderDash: [5, 5]                   // traço de 5px, espaço de 5px
        }
      },
      x: {
        ticks: {
          color: '#FFFFFF' // Letras brancas no eixo X
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',  // idem no eixo X
          borderDash: [5, 5]
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF' // Letras da legenda brancas
        }
      },
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
              color: '#FFFF00',
              backgroundColor: '#0000000',
              borderColor: '#FFFF00',
              borderWidth: 1

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
              color: '#FFC000',
              backgroundColor: '#0000000',
              borderColor: '#FFC000',
              borderWidth: 1
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
              color: '#FF0000',
              backgroundColor: '#0000000',
              borderColor: '#FF0000',
              borderWidth: 1
            }
          },
          linha9: {
            type: 'line',
            yMin: 9,
            yMax: 9,
            borderColor: '#8b008b',
            borderWidth: 2,
            label: {
              content: '9',
              enabled: true,
              color: '#8b008b',
              backgroundColor: '#0000000',
              borderColor: '#8b008b',
              borderWidth: 1
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
