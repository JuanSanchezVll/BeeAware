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

  idUsuario = sessionStorage.ID_USUARIO

  fetch(`/apiarioSetor/carregarApiarioSetor/${idUsuario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(json => {

      var apiario = json

      var div_mensagem = document.getElementById('Scroll_apiario')

      for(var i = 0; i < apiario.length; i++){
        div_mensagem.innerHTML += `
        
        <div class="colmeia-card " >
            <div class="card-top " id="card_apiario_${apiario[i].idApiario}">
              <span>Apiario #${i + 1}</span>
              <span class="status-label " id="status_apiario_${apiario[i].idApiario}">Normal</span>
            </div>
            <div class="card-info">
              <p>Setor: <strong>${apiario[i].setor}</strong></p>
              <p id="card_temperatura_${apiario[i].idApiario}">Temperatura: <strong>${apiario[i].temperatura}ºC</strong></p>
              <p>Colônia: <strong>${apiario[i].identificador_colonia}</strong></p>
              <p id="Ultima_leitura_${apiario[i].idApiario}">Última leitura: <strong>Há 5 minutos</strong></p>
            </div>
            <button class="btn-detalhes" onclick="verInformação(${apiario[i].idApiario})" id="btn_apiario_${apiario[i].idApiario}">Ver Detalhes</button>
          </div>
        
        `
      }

    }
      

    )
  }

  )
  .catch(
    err => console.error('Erro ao carregar temperatura:', err)
  )

}

function verInformação(idApiario){
  sessionStorage.ID_APIARIO = idApiario
  window.location.href = 'dash-apiario.html';
}

function carregarTemperatura(){

  idUsuario = sessionStorage.ID_USUARIO
  
  fetch(`/apiarioSetor/carregarApiarioTemperatura/${idUsuario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(json => {

      var apiarioTemperatura = json

    
      for(var i = 0; i < apiarioTemperatura.length; i++){

        if(Number(apiarioTemperatura[i].temperatura) > 39 || Number(apiarioTemperatura[i].temperatura) < 20){
           var status_apiario = document.getElementById(`status_apiario_${apiarioTemperatura[i].idApiario}`)
           var btn_apiario = document.getElementById(`btn_apiario_${apiarioTemperatura[i].idApiario}`)
           var card_apiario = document.getElementById(`card_apiario_${apiarioTemperatura[i].idApiario}`)

          status_apiario.innerHTML = `Alerta`

          status_apiario.classList.add("alerta")
          btn_apiario.classList.add("alerta")
          card_apiario.classList.add("alerta")
        }else if(Number(apiarioTemperatura[i].temperatura) > 36 || Number(apiarioTemperatura[i].temperatura) < 32){
           var status_apiario = document.getElementById(`status_apiario_${apiarioTemperatura[i].idApiario}`)
           var btn_apiario = document.getElementById(`btn_apiario_${apiarioTemperatura[i].idApiario}`)
           var card_apiario = document.getElementById(`card_apiario_${apiarioTemperatura[i].idApiario}`)

          status_apiario.innerHTML = `Atenção`

          status_apiario.classList.add("atencao")
          btn_apiario.classList.add("atencao")
          card_apiario.classList.add("atencao")

        }else{
          var status_apiario = document.getElementById(`status_apiario_${apiarioTemperatura[i].idApiario}`)
          var btn_apiario = document.getElementById(`btn_apiario_${apiarioTemperatura[i].idApiario}`)
          var card_apiario = document.getElementById(`card_apiario_${apiarioTemperatura[i].idApiario}`)

          status_apiario.innerHTML = `Normal`

          status_apiario.classList.remove("alerta")
          btn_apiario.classList.remove("alerta")
          card_apiario.classList.remove("alerta")

          status_apiario.classList.remove("atencao")
          btn_apiario.classList.remove("atencao")
          card_apiario.classList.remove("atencao")
        }

        var div_mensagem = document.getElementById(`card_temperatura_${apiarioTemperatura[i].idApiario}`)
        var leitura = document.getElementById(`Ultima_leitura_${apiarioTemperatura[i].idApiario}`)

        leitura.innerHTML = `
        Última leitura: <strong>${apiarioTemperatura[i].dataLeitura}</strong>
        `

        div_mensagem.innerHTML = `
        
        Temperatura: <strong>${Number(apiarioTemperatura[i].temperatura)}ºC</strong>
        
        `
      }

    }
      

    )
  }

  )
  .catch(
    err => console.error('Erro ao carregar temperatura:', err)
  )
}
function apiarioAtivos(){

  idUsuario = sessionStorage.ID_USUARIO
  
  fetch(`/apiarioSetor/apiarioAtivos/${idUsuario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(resposta => {

      var apiarioTotal = resposta[0].total
      var apiarioAtivos = resposta[0].ativos

                  document.getElementById(`div_sens_atv`).innerText = ` Apiarios ativos : ${apiarioAtivos}/${apiarioTotal}`

    }
  )
  .catch(
    err => console.error('Erro ao carregar sensores ativos:', err)
  )
}
)
}

function carregarTabelaAlerta(){

fetch(`/apiarioSetor/carregarSetorAlerta/${idUsuario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(json => {

      var historicoAlerta = json

      var div_mensagem = document.getElementById('tbody_alerta')

      for(var i = 0; i < historicoAlerta.length; i++){
        div_mensagem.innerHTML += `
        
        <tr>
                <td>${historicoAlerta[i].data_formatada}</td>
                <td>${historicoAlerta[i].temperatura}ºC</td>
                <td>${historicoAlerta[i].recomendacao}</td>
                <td>${historicoAlerta[i].apiario}</td>
        </tr>
        `
      }

    }
      

    )
  }

  )
  .catch(
    err => console.error('Erro ao carregar temperatura:', err)
  )


}

function graficoAlerta(){
  idUsuario = sessionStorage.ID_USUARIO

  fetch(`/apiarioSetor/carregarAlertas/${idUsuario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(json => {

      var listaTotalAlerta = []
      var dadosAlerta = json

      for(var i = 0; i < dadosAlerta.length; i++){
        listaTotalAlerta.push(dadosAlerta[i].TotalAlertas)
      }

      alertChart.data.datasets[0].data = listaTotalAlerta
      alertChart.update()
    })})
}

function atualizacaoKPI(){

    idUsuario = sessionStorage.ID_USUARIO

    fetch(`/apiarioSetor/carregarAlertas/${idUsuario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(json => {
        var alertaDiario = json
        var alerta_diario= document.getElementById(`alerta_diario`)

        if(alertaDiario[0].TotalAlertas > 1){
          alerta_diario.innerHTML = `${alertaDiario[0].TotalAlertas} alertas`
        }else{
          alerta_diario.innerHTML = `${alertaDiario[0].TotalAlertas} alerta`
        }

    })})

    fetch(`/apiarioSetor/carregarKPIMensal/${idUsuario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(json => {
      var alertaMesal = json
      var alerta_mensal = document.getElementById(`alerta_mensal`)

      if(alertaMesal[0].TotalAlertas > 1){
          alerta_mensal.innerHTML = `${alertaMesal[0].TotalAlertas} alertas`
        }else{
          alerta_mensal.innerHTML = `${alertaMesal[0].TotalAlertas} alerta`
        }

    })})

}

setInterval(atualizacaoKPI, 1000) // mudar para 10000

setInterval(carregarTemperatura,1000)

setInterval(apiarioAtivos,1000)
