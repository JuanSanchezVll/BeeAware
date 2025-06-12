const { json } = require("express")


function puxarHistorico() {
  apiario = sessionStorage.ID_APIARIO
  
  fetch(`/apiarioSetor/puxarHistorico/${apiario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(resposta => {
      console.log(resposta)
      scroll_alertas.innerHTML = ``
      scroll_alertas = document.getElementById("scroll_alertas")

      for (var i = 0; i < resposta.length; i++){

          let temperatura = resposta[i].temperatura
          let dataAlerta = resposta[i].dataAlerta
          let resultado = resposta[i].resultado
          
          console.log(temperatura, dataAlerta, resultado)
            
           scroll_alertas.innerHTML +=
    
    
           `<div class="colmeia alerta medio"> Alerta dia ${dataAlerta} - ${resultado} ${temperatura}°C</div>`;


        }
      }
  )
  .catch(
    err => console.error('Erro ao carregar temperatura:', err)
  )
}
)
}

function TemperturaAtualApiario() {
  idApiario = sessionStorage.ID_APIARIO
  idUsuario = sessionStorage.ID_USUARIO

  fetch(`/apiarioSetor/TemperturaAtualApiario/${idApiario}/${idUsuario}`, {
    method: 'GET',
  })
    .then(res => {
      res.json()
        .then(resposta => {
          console.log()
          let temperaturaAtual = resposta[0].temperatura
          const temperatura_atual = document.getElementById(`temperatura_atual`)

          temperatura_atual.innerHTML = `Temperatura Atual<br><strong>${resposta[0].temperatura}°C</strong>`

          temperatureChart.data.datasets[0].data = [temperaturaAtual]
          temperatureChart.data.labels = [resposta[0].dtLeitura]
          temperatureChart.update()
        }
        )
        .catch(
          err => console.error('Erro ao carregar temperatura:', err)
        )
    }
    )
}

function TemperturaMediaApiario() {
  idApiario = sessionStorage.ID_APIARIO
  idUsuario = sessionStorage.ID_USUARIO

  fetch(`/apiarioSetor/TemperturaMediaApiario/${idApiario}/${idUsuario}`, {
    method: 'GET',
  })
    .then(res => {
      res.json()
        .then(resposta => {
          console.log(resposta)
          const temperatura_media = document.getElementById(`temperatura_media`)

          temperatura_media.innerHTML = `Temperatura Média 24h<br><strong>${resposta[0].mediaTemperatura}°C</strong>`

        }




        )
        .catch(
          err => console.error('Erro ao carregar temperatura:', err)
        )

        
    }
    )
}

// function TotalAlertas() {
//   apiario = sessionStorage.ID_APIARIO

//   fetch(`/apiarioSetor/TotalAlertas/${apiario}`, {
//     method: 'GET',
//   })
//     .then(res => { res.json()
//         .then(resposta => {
//           // resposta = json
//           console.log(resposta)
//           const alertas_totais = document.getElementById("alertas_totais")
          
//           alertas_totais.innerHTML = `Alertas totais 24h<br><strong>${resposta.dtLeitura}</strong>`
//         }
//         )
//         .catch(
//           err => console.error('Erro ao carregar temperatura:', err)
//         )
//     }
//     )
// }

function TotalAlertas() {
  const idApiario = sessionStorage.ID_APIARIO;

  fetch(`/apiarioSetor/TotalAlertas/${idApiario}`, {
    method: 'GET',
  })
    .then(res => res.json()) // <- retornando o res.json() aqui
    .then(resposta => {
      console.log(resposta);
      const alertas_totais = document.getElementById("alertas_totais");
      // div_alertas_totais.innerHTML = `${resposta[0].dtLeitura}`
      
      // Exemplo de como exibir o dado na página (descomente e adapte conforme necessário):
      
      alertas_totais.innerHTML = `Alertas totais 24h<br><strong>${resposta[0].dtLeitura}</strong>`;
    })
    .catch(err => {
      console.error('Erro ao carregar temperatura:', err);
    });
}


function HistoricoTemperatura() {
  idApiario = sessionStorage.ID_APIARIO
  idUsuario = sessionStorage.ID_USUARIO

  fetch(`/apiarioSetor/HistoricoTemperatura/${idApiario}/${idUsuario}`, {
    method: 'GET',
  })
    .then(res => {
      res.json()
        .then(resposta => {
          console.log(resposta)
          let temperaturaMedia = []
          let HoratemperaturaMedia = []
          for(let i = resposta.length ; i > 0; i--){
            temperaturaMedia.push(resposta[i - 1].temperaturaMedia)
            HoratemperaturaMedia.push(resposta[i - 1].hora)
          }

          temperatureChart2.data.datasets[0].data = temperaturaMedia
          temperatureChart2.data.labels = HoratemperaturaMedia
          temperatureChart2.update()

        }
        )
        .catch(
          err => console.error('Erro ao carregar temperatura:', err)
        )
    }
    )
}

function carregarApiario(){
  const titulo_dashboard = document.getElementById("titulo_dashboard")
  idApiario = sessionStorage.ID_APIARIO

  titulo_dashboard.innerHTML = `Dashboard - Apiário ${idApiario}`

}

function atualizarDashboard() {
  puxarHistorico();
  TotalAlertas();
  TemperturaAtualApiario();
  TemperturaMediaApiario();
  HistoricoTemperatura();
}

setInterval(atualizarDashboard, 5000);

