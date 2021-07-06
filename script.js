let usuarios = [{"login":"kaio@gmail.com",  "senha":"kaio123", "username": "queijodefumado"}, 
                {"login":"master@gmail.com","senha":"master123",    "username": "nobre alien"}, 
                {"login":"rafa@gmail.com",  "senha":"rafa123",      "username": "ra98"}]


function entrar(){
   //alert("c")
    let usuario= document.getElementById("username").value.toLowerCase();
    let senha  = document.getElementById('password').value;
    //let nick   = document.getElementById("Username")[0]//.value.toLowerCase();
    for (var u in usuarios) {
        var us = usuarios[u];
        //alert("verificado")
        if ((us.login === usuario || us.username === usuario) && us.senha === senha) {//
            window.location = "index.html";
            return alert("Seja bem vindo!");  
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
/*
function cadastro(){
    let nick  =document.getElementsByName("username")[0].value.toLowerCase();
    let email1=document.getElementsByName("email1")[0].value.toLowerCase();
    let email2=document.getElementsByName("email2")[0].value.toLowerCase();
    let senha1=document.getElementsByName("senha1")[0].value.toLowerCase();
    let senha2=document.getElementsByName("senha2")[0].value.toLowerCase();
    if (email1 === email2 && senha1=== senha2){
        alert("email e senha são iguais!")
        if(nick ===)
        email = email1
        senha = senha1
        usuarios = usuarios + {"login": email,"senha": senha,"nick":nick}}
    }


}*/
