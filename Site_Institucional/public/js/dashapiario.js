function puxarHistorico() {
  apiario = sessionStorage.ID_APIARIO
  
  fetch(`/apiarioSetor/puxarHistorico/${apiario}`, {
    method: 'GET',
  })
  .then(res => { res.json() 
    .then(resposta => {
      console.log(resposta)

      for (var i = 0; i < resposta.length; i++){

          var temperatura = resposta[i].temperatura
          var dataAlerta = resposta[i].dataAlerta
          var resultado = resposta[i].resultado
          
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


function TotalAlertas() {
  apiario = sessionStorage.ID_APIARIO

  fetch(`/apiarioSetor/TotalAlertas/${apiario}`, {
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



