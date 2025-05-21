function buscarUsuario(email, senha){

    var query = `SELECT USUARIO, NOME, EMAIL FROM BEEAWARE_USUARIOS WITH(nolock) WHERE EMAIL = ${email} AND SENHA = ${senha} `;
    return database.executar(query);
}

function autenticarUsuario(email, senha){
    
}

//Tudo que vc precisa sobre usuario, tu faz aqui.