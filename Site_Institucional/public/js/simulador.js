function analisar() {

    var peso = Number(input_kg.value)
    var preço = Number(input_preco.value)
    var temp = Number(input_temp.value)
    var qtdApi = Number(input_qtd_apiario.value)
    var rendimento_colmeia = preço * peso
    var rendimento = rendimento_colmeia * qtdApi
    var RendIdeal = (rendimento * 0.012).toFixed(2)
    var RendAbaixo = (rendimento * 0.24).toFixed(2)
    var RendAcima = (rendimento * 0.12).toFixed(2)


    if (peso == "" || preço == "" || temp == "") {
        alert("Preencha todos os campos para realizar análise");
    } else {



        if (temp < 9) {
            div_mensg.innerHTML =
                `<div class="alerta_40">
                            <img src="img/alerta.png" class="img_alerta">
            <br>
            Temperatura: abaixo de 9°C 
            <br>
            status produção: Paralisada</div>`;
        } else if (temp >= 9 && temp <= 29) {
            div_mensg.innerHTML =
                `
            <div class="div_pt1_respostas"> <span class="txt">Seu caso:</span>
            <fieldset class="preju_simulador"><legend><b><i class="preju">temperatura abaixo do ideal:</i></b> </legend>
            <div class="txt_fild">
             <br>txt_fild
             Temperatura: entre <b>29°C ~ 9°C</b>
             <br>
             Potencial prejuizo na produção: prejuízo de até <b style="color: red">24%</b>
             <br>
             Potencial perda:<b style="color: red">R$:${RendAbaixo}</b></div></fieldset></div>
    
            <div class="div_pt2_respostas">         
             <div class="div_dentro_pt2_respostas"> <span class="txt">Possível outro caso:</span><br><fieldset class="preju_simulador"><legend><b><i class="preju">temperatura acima do ideal:</i></b> </legend>
             <br>   
             Temperatura: entre <b> 37°C ~ 40°C </b>
             <br>
             Potencial prejuizo na produção: prejuízo de até <b style="color: red">12%</b>
             <br>
             Potencial perda:<b style="color: red"> R$:${RendAcima}</b> </fieldset></div>

    
            <div class="div_dentro_pt2_respostas"> <span class="txt">Com a BeeAwere:</span><br><fieldset class="ideal_simulador">
            <legend><b><i class="positivo">temperatura ideal:</i></b></legend>
            <br>
            Temperatura: entre 30°C a 36°C
            <br>
            Ganho de produção:  até <b style="color: green">1.2%</b>
            <br>
            Potencial lucro: <b style="color: green">R$:${RendIdeal}</b></fieldset></div>
            </div>`;

        } else if (temp >= 30 && temp <= 36) {
            div_mensg.innerHTML =
                `
            <div class="div_pt1_respostas"> <span class="txt">Seu caso está dentro do ideal porém</span>
            <span class="txt">Com a BeeAwere:</span><br><fieldset class="ideal_simulador">
            <legend><b><i class="positivo">temperatura ideal:</i></b></legend>
             <div class="txt_fild">
            <br>
            Temperatura: entre 30°C a 36°C
            <br>
            Ganho de produção:  até <b style="color: green">1.2%</b>
            <br>
            Potencial lucro: <b style="color: green">R$:${RendIdeal}</b></div></fieldset></div>
    
            <div class="div_pt2_respostas">         
             <div class="div_dentro_pt2_respostas"> <br><fieldset class="preju_simulador"><legend><b><i class="preju">acima do ideal:</i></b> </legend>
                <div class="txt_fild">
             Temperatura: entre <b> 37°C ~ 40°C </b>

             Status produção: prejuízo de até <b style="color: red">12%</b>
             <br>
             Potencial perda:<b style="color: red"> R$:${RendAcima}</b> </div></fieldset></div>

    
            <div class="div_dentro_pt2_respostas"><br>
            <fieldset class="preju_simulador"><legend><b><i class="preju"> abaixo do ideal:</i></b> </legend>
             <div class="txt_fild">
             Temperatura: entre <b>29°C ~ 9°C</b>

             Status produção: prejuízo de até <b style="color: red">24%</b>
            <br>
             Potencial perda: <b style="color: red">R$:${RendAbaixo}</b></div></fieldset></div>
            </div>`;

        } else if (temp >= 37 && temp <= 40) {

            div_mensg.innerHTML =
                `
            <div class="div_pt1_respostas"> <span class="txt">Seu caso:</span>
             <fieldset class="preju_simulador"><legend><b><i class="preju">temperatura acima do ideal:</i></b> </legend>
             <br>   
             Temperatura: entre <b> 37°C ~ 40°C </b>
             <br>
             Potencial prejuizo na produção: prejuízo de até <b style="color: red">12%</b>
             <br>
             Potencial perda:<b style="color: red"> R$:${RendAcima}</b> </fieldset></div>
    
            <div class="div_pt2_respostas">         
             <div class="div_dentro_pt2_respostas"> <span class="txt">Possível outro caso:</span><br>
                         <fieldset class="preju_simulador"><legend><b><i class="preju">temperatura abaixo do ideal:</i></b> </legend>
             <br>
             Temperatura: entre <b>29°C ~ 9°C</b>
             <br>
             Potencial prejuizo na produção: prejuízo de até <b style="color: red">24%</b>
             <br>
             Potencial perda:<b style="color: red">R$:${RendAbaixo}</b></fieldset></div>
             
    
            <div class="div_dentro_pt2_respostas"> <span class="txt">Com a BeeAwere:</span><br><fieldset class="ideal_simulador">
            <legend><b><i class="positivo">temperatura ideal:</i></b></legend>
            <br>
            Temperatura: entre 30°C a 36°C
            <br>
            Ganho de produção:  até <b style="color: green">1.2%</b>
            <br>
            Potencial lucro: <b style="color: green">R$:${RendIdeal}</b></fieldset></div>
            </div>`;
            
            // div_mensg.innerHTML =
            //     `<div class="divResp1"><b><i class="acimaideal">Sua produção:</i></b>
            // <br>
            // Temperatura: entre 37°C ~ 40°C
            // <br>
            // Status produção: prejuízo de até 12%
            // <br>
            // Rendimento: R$:${rendimento}
            // <BR></BR></div>
    
            // <div><b><i class="abaixoideal">temperatura abaixo do ideal:</i></b>
            // <br>
            // Temperatura: entre 29°C ~ 9°C
            // <br>
            // Status produção: prejuízo de até 24%
            // <br>
            // Impacto no rendimento: R$:${rendimento * 0.88}
            // <BR></BR></div>
    
            // <div class="divResp3"><b><i class="positivo"">temperatura ideal:</i></b>
            // <br>
            // Temperatura: entre 30°C a 36°C
            // <br>
            // Status produção: ganho de até 36%
            // <br>
            // Impacto no rendimento: R$:${RendIdeal}</div>`;
        } else {
            div_mensg.innerHTML =
                `<div class="alerta_40">
            <br>
            <img src="img/alerta.png" class="img_alerta">
            <br>
            Temperatura: acima de 40°C 
            <br>
            Status produção: Paralisação total de produção</div>`;
        }
    }
}