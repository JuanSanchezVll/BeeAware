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
  apiario = sessionStorage.ID_APIARIO

  fetch(`/apiarioSetor/TemperturaAtualApiario/${apiario}`, {
    method: 'GET',
  })
    .then(res => {
      res.json()
        .then(resposta => {
          console.log(resposta)

        }
        )
        .catch(
          err => console.error('Erro ao carregar temperatura:', err)
        )
    }
    )
}

function TemperturaMediaApiario() {
  apiario = sessionStorage.ID_APIARIO

  fetch(`/apiarioSetor/TemperturaMediaApiario/${apiario}`, {
    method: 'GET',
  })
    .then(res => {
      res.json()
        .then(resposta => {
          console.log(resposta)

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
  const apiario = sessionStorage.ID_APIARIO;

  fetch(`/apiarioSetor/TotalAlertas/${apiario}`, {
    method: 'GET',
  })
    .then(res => res.json()) // <- retornando o res.json() aqui
    .then(resposta => {
      console.log(resposta);
      
      // Exemplo de como exibir o dado na página (descomente e adapte conforme necessário):
      // const alertas_totais = document.getElementById("alertas_totais");
      // alertas_totais.innerHTML = `Alertas totais 24h<br><strong>${resposta.total}</strong>`;
    })
    .catch(err => {
      console.error('Erro ao carregar temperatura:', err);
    });
}


function HistoricoTemperatura() {
  apiario = sessionStorage.ID_APIARIO

  fetch(`/apiarioSetor/HistoricoTemperatura/${apiario}`, {
    method: 'GET',
  })
    .then(res => {
      res.json()
        .then(resposta => {
          console.log(resposta)

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

setInterval(puxarHistorico, 10000)
setInterval(TotalAlertas, 1000)