function analisar(){

    var peso = Number(input_kg.value) 
    var preço = Number(input_preco.value)
    var temp = Number(input_temp.value)
    var rendimento = preço * peso
    var RendIdeal = rendimento * 1.36
    var RendAbaixo = rendimento * 0.76
    var RendAcima = rendimento * 0.88
    
    if (temp < 9 ) {
        div_mensg.innerHTML = 
    `<b><i style="color: DarkRed;">Sua produção:</i></b>
    <br>
    Temperatura: abaixo de 9°C 
    <br>
    status produção: Paralisada
    `
    }
    
    if (temp >= 9) {
         if (temp <= 29) {
            div_mensg.innerHTML = 
            `<b><i style="color: DarkOrange;">Sua produção:</i></b>
             <br>
             Temperatura: entre 29°C ~ 9°C
             <br>
             Status produção: prejuízo de até 24%
             <br>
             Rendimento: R$:${rendimento}
             <BR></BR>
    
             
             <b><i style="color: orange;">temperatura acima do ideal:</i></b>
             <br>
             Temperatura: entre 37°C ~ 40°C
             <br>
             Status produção: prejuízo de até 12%
             <br>
             Impacto no rendimento: R$:${rendimento * 1.12}
             <BR></BR>
    
             <b><i style="color: DarkGreen;">temperatura ideal:</i></b>
             <br>
             Temperatura: entre 30°C a 36°C
             <br>
             Status produção: ganho de até 36%
             <br>
             Impacto no rendimento: R$:${RendIdeal}
             `
        }
    }
    
    if (temp >= 30){
        if (temp <= 36) {
            div_mensg.innerHTML = 
            `<b><i style="color: DarkGreen;">Sua produção:</i></b>
            <br>
            Temperatura: entre 30°C a 36°C
            <br>
            Status produção: ganho de até 36%
            <br>
            Rendimento: R$:${rendimento}
            <BR></BR>
    
            <b><i style="color: orange;">temperatura acima do ideal:</i></b>
            <br>
            Temperatura: entre 37°C ~ 40°C
            <br>
            Status produção: prejuízo de até 12%
            <br>
            Impacto no rendimento: R$:${RendAcima}
            <BR></BR>
    
            <b><i style="color: DarkOrange;">temperatura abaixo do ideal:</i></b>
            <br>
            Temperatura: entre 29°C ~ 9°C
            <br>
            Status produção: prejuízo de até 24%
            <br>
            Impacto no rendimento: R$:${RendAbaixo}
            `
        }
    }
    
    if (temp >= 37) {
        if (temp <= 40) {
            div_mensg.innerHTML = 
            `<b><i style="color: orange;">Sua produção:</i></b>
            <br>
            Temperatura: entre 37°C ~ 40°C
            <br>
            Status produção: prejuízo de até 12%
            <br>
            Rendimento: R$:${rendimento}
            <BR></BR>
    
            <b><i style="color: DarkOrange;">temperatura abaixo do ideal:</i></b>
            <br>
            Temperatura: entre 29°C ~ 9°C
            <br>
            Status produção: prejuízo de até 24%
            <br>
            Impacto no rendimento: R$:${rendimento * 0.88}
            <BR></BR>
    
            <b><i style="color: DarkGreen;">temperatura ideal:</i></b>
            <br>
            Temperatura: entre 30°C a 36°C
            <br>
            Status produção: ganho de até 36%
            <br>
            Impacto no rendimento: R$:${RendIdeal}`
        }
    }
    
    if (temp > 40){
        div_mensg.innerHTML = 
    `<b><i style="color: DarkRed;">Sua produção:</i></b>
    <br>
    Temperatura: acima de 40°C 
    <br>
    Status produção: Paralisada
     `
    }
    }