function cadastrar(){
    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_conf.value;
    var cnpjVar = input_cnpj.value;

    var email_com = emailVar.endsWith(".com")
    var email_arroba = emailVar.indexOf("@") 
    if (
      nomeVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == "" ||
      cnpjVar == ""
    ){
      alert('Preencha todos os campos para continuar');
    }else if (senhaVar != confirmacaoSenhaVar) {
      alert('As senhas não são iguais')
    }else if (senhaVar.length < 6) {
      alert('A senha deve ter pelo menos 6 numeros!')
    }else if (( email_com && ( email_arroba > -1 ) && senhaVar == confirmacaoSenhaVar) && (cnpjVar.length == 15)) {
      alert('Cadastro Efetuado com sucesso!!')

      fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nomeVar,
        emailServer: emailVar,
        cpfServer: cnpjVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  
    } else if(cnpjVar.length != 15){
        alert(`CNPJ inválido`)
    }else if(emailVar.indexOf(".com") < 0){
        alert(`Email inválido`)
    }

      
  }
   

