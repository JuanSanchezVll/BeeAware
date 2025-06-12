function analisar() {

    var peso = Number(input_kg.value)
    var preco = Number(input_preco.value).toFixed(2)
    var qtdApi = Number(input_qtd_apiario.value)
    var rendimento_colmeia = preco * peso
    var rendimento = rendimento_colmeia * qtdApi
    var RendAbaixo = (rendimento * 0.24).toFixed(2)
    var RendAcima = (rendimento * 0.12).toFixed(2)


        if(peso == "" || preco == "" || qtdApi == ""){
        alert("Preencha todos os campos para realizar análise");
    }
    else if(peso <=0 || preco <= 0 || qtdApi <= 0){
        alert("Preencha todos os campos para realizar análise");
    }
    else{
        div_resposta_sim.innerHTML =`
        <div id="div_resposta_simulador">
    <p>No seguinte cenário: você possui <span style="font-weight: 800;">${qtdApi} apiários</span>, cada um produzindo em média <span style="font-weight: 800;">${peso}kg de mel</span>. Com o quilo sendo vendido a <span style="font-weight: 800;">R$ ${preco}</span></p>
    
    <div class="alerta-quente">
        <i class="fa-solid fa-temperature-high"></i>
        <p>Se a temperatura ficar <span class="texto-quente">elevada demais</span>, você pode ter um prejuízo de até <span class="texto-quente">R$ ${RendAcima}</span>!</p>
    </div>

    <div class="alerta-frio">
        <i class="fa-solid fa-temperature-low"></i>
        <p>Se ela estiver <span class="texto-frio">baixa demais</span>, o prejuízo pode chegar a <span class="texto-quente">R$ ${RendAbaixo}</span>!</p>
    </div>
</div>
  <div class="div_buton_sim ">
    <button onclick="window.location.href='cadastro.html'">
      Quero proteger meu apiário agora!
    </button>
    <button onclick="replay_sim()">Novo teste </button>
  </div>
        `
tabela_resp_sim.style.display="flex"
tb_sim.style.display = "none"
    }
    }
function replay_sim(){
input_kg.value = ""
input_preco.value = ""
input_qtd_apiario.value = ""
tabela_resp_sim.style.display = "none"
tb_sim.style.display = "flex"
}