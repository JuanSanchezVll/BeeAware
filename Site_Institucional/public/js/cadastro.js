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

     
    }
   
    if (senhaVar != confirmacaoSenhaVar) {
      alert('As senhas não são iguais')

    }
    if (senhaVar.length < 6) {
      alert('A senha deve ter pelo menos 6 numeros!')

    }else{
    if (( email_com && ( email_arroba > -1 ) && senhaVar == confirmacaoSenhaVar) && (cnpjVar.length == 15)) {
      alert('Cadastro Efetuado com sucesso!!')

    } else if(cnpjVar.length != 15){
        alert(`CNPJ inválido`)
    }else {
        alert(`Email inválido`)
    }
  }
  }
   

