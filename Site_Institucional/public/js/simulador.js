function analisar() {

    var peso = Number(input_kg.value)
    var preço = Number(input_preco.value)
    var temp = Number(input_temp.value)
    var rendimento = preço * peso
    var RendIdeal = rendimento * 1.2
    var RendAbaixo = rendimento * 0.76
    var RendAcima = rendimento * 0.88


    if (peso == "" || preço == "" || temp == "") {
        alert("Preencha todos os campos para realizar análise");
    } else {
        
  

    if (temp < 9) {
        div_mensg.innerHTML =
            `<div class="divResp1"><b><i style="color: DarkRed;">Sua produção:</i></b>
            <br>
            Temperatura: abaixo de 9°C 
            <br>
            status produção: Paralisada</div>`;
    } else if (temp >= 9 && temp <= 29) {
        div_mensg.innerHTML =
            `<div class="divResp1"><b><i class="abaixoideal">Sua produção:</i></b>
             <br>
             Temperatura: entre 29°C ~ 9°C
             <br>
             Status produção: prejuízo de até 24%
             <br>
             Rendimento: R$:${rendimento}
             <BR></BR></div>
    
             
             <div class="divResp2"><b><i class="acimaideal">temperatura acima do ideal:</i></b>
             <br>
             Temperatura: entre 37°C ~ 40°C
             <br>
             Status produção: prejuízo de até 12%
             <br>
             Impacto no rendimento: R$:${rendimento * 1.12}
             <BR></BR></div>

    
             <div class="divResp3"><b><i class="positivo">temperatura ideal:</i></b>
             <br>
             Temperatura: entre 30°C a 36°C
             <br>
             Status produção: ganho de até 36%
             <br>
             Impacto no rendimento: R$:${RendIdeal}</div>`;
    } else if (temp >= 30 && temp <= 36) {
        div_mensg.innerHTML =
            `<div class="divResp1"><b><i class="positivo">Sua produção:</i></b>
            <br>
            Temperatura: entre 30°C a 36°C
            <br>
            Status produção: ganho de até 36%
            <br>
            Rendimento: R$:${rendimento}
            <BR></BR></div>
    
            <div><b><i class="acimaideal">temperatura acima do ideal:</i></b>
            <br>
            Temperatura: entre 37°C ~ 40°C
            <br> class="divResp2"
            Status produção: prejuízo de até 12%
            <br>
            Impacto no rendimento: R$:${RendAcima}
            <BR></BR></div>
    
            <div class="divResp3"><b><i class="abaixoideal">temperatura abaixo do ideal:</i></b>
            <br>
            Temperatura: entre 29°C ~ 9°C
            <br>
            Status produção: prejuízo de até 24%
            <br>
            Impacto no rendimento: R$:${RendAbaixo}</div>`;
    } else if (temp >= 37 && temp <= 40) {
        div_mensg.innerHTML =
            `<div class="divResp1"><b><i class="acimaideal">Sua produção:</i></b>
            <br>
            Temperatura: entre 37°C ~ 40°C
            <br>
            Status produção: prejuízo de até 12%
            <br>
            Rendimento: R$:${rendimento}
            <BR></BR></div>
    
            <div><b><i class="abaixoideal">temperatura abaixo do ideal:</i></b>
            <br>
            Temperatura: entre 29°C ~ 9°C
            <br>
            Status produção: prejuízo de até 24%
            <br>
            Impacto no rendimento: R$:${rendimento * 0.88}
            <BR></BR></div>
    
            <div class="divResp3"><b><i class="positivo"">temperatura ideal:</i></b>
            <br>
            Temperatura: entre 30°C a 36°C
            <br>
            Status produção: ganho de até 36%
            <br>
            Impacto no rendimento: R$:${RendIdeal}</div>`;
    } else {
        div_mensg.innerHTML =
            `<div class="divResp1"><b><i style="color: DarkRed;">Sua produção:</i></b>
            <br>
            Temperatura: acima de 40°C 
            <br>
            Status produção: Paralisada</div>`;
    }
}
}