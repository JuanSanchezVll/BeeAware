// Captura o elemento canvas pelo ID
const ctx2 = document.getElementById('alertChart').getContext('2d');

// Cria o gráfico de barras com dados simulados para os últimos 15 dias
const alertChart = new Chart(ctx2, {
  type: 'bar', // tipo de gráfico
  data: {
    labels: Array.from({ length: 15 }, (_, i) => `Dia ${i + 1}`), // rótulos do eixo X
    datasets: [{
      label: 'Quantidade de Alertas',
      data: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3], // dados simulados
      backgroundColor: '#F76D57' // cor das barras
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Alertas nos últimos 15 dias', // título do gráfico
        color: '#4B3A2F',
        font: {
          size: 18
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true // começa o eixo Y no zero
      }
    }
  }
});
