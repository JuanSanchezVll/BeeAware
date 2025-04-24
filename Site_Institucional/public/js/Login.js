function login(){

    var email_login = input_email.value;
    var senha_login = input_senha.value; 

    var email = "Usuario01@beeaware.com"; 
    var senha = "Bee.2025"; 

    // validação: campo vazio 
    if(email_login == "" || senha_login == "") {
        alert("Preencha os campos para realizar o login.");
    }

    // validação campos corretos
    if(email_login == email && senha_login == senha) {
        alert("Login efetuado");
        
    } else {
        alert("Email e/ou senha incorretos.");
    }

}
