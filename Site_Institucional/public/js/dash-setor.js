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

function sair(){
  window.location = "login.html";
}

// Pesquisa e integração dos dados da empresa

function carregarApiario(){

  idEmpresa = sessionStorage.ID_USUARIO

  fetch(`/apiarioSetor/carregarApiarioSetor/${idEmpresa}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(json => {

      var apiario = json

      var div_mensagem = document.getElementById('Scroll_apiario')

      for(var i = 0; i < apiario.length; i++){
        div_mensagem.innerHTML += `
        
        <div class="colmeia-card normal">
            <div class="card-top">
              <span>Apiario #${i + 1}</span>
              <span class="status-label normal">Normal</span>
            </div>
            <div class="card-info">
              <p>Setor: <strong>${apiario[i].setor}</strong></p>
              <p>Temperatura: <strong>${apiario[i].temperatura}ºC</strong></p>
              <p>Colônia: <strong>${apiario[i].identificador_colonia}</strong></p>
              <p>Última leitura: <strong>Há 5 minutos</strong></p>
            </div>
            <button class="btn-detalhes" onclick="verInformação(${apiario[i].idApiario})">Ver Detalhes</button>
          </div>
        
        `
      }

    }
      

    )
  }

  )
  .catch(

  )

}

function verInformação(idApiario){
  sessionStorage.ID_APIARIO = idApiario
  window.location.href = 'dash-apiario.html';
}