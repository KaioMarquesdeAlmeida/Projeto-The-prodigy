let usuarios = [{"login":"kaio@gmail.com",  "senha":"kaiolindo123", "nick": "QueijoDeFumado"}, 
                {"login":"master@gmail.com","senha":"master123",    "nick": "Nobre Alien"}, 
                {"login":"rafa@gmail.com",  "senha":"rafa123",      "nick": "Ra98"}]


function entrar(){
    let usuario = document.getElementsByName('Email')[0].value.toLowerCase();
    let senha = document.getElementsByName('password')[0].value;
    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "index.html";
            return alert("Seja bem vindo!");  
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
function cadastro(){
    let nick  =document.getElementsByName("nick")[0].value.toLowerCase();
    let email1=document.getElementsByName("email1")[0].value.toLowerCase();
    let email2=document.getElementsByName("email2")[0].value.toLowerCase();
    let senha1=document.getElementsByName("senha1")[0].value.toLowerCase();
    let senha2=document.getElementsByName("senha2")[0].value.toLowerCase();
    if (email1 === email2 && senha1=== senha2){
        
    }


}
