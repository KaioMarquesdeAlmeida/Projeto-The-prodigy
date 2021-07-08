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
            return alert(`Seja bem vindo ${us.username}!`);  
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
// Cadastro
function cadastro(){
    //return alert("Ação de cadastro")
    /*
    let nick  =document.getElementsByName("username2")[0].value.toLowerCase();
    let email1=document.getElementsByName("email1")[0].value.toLowerCase();
    let email2=document.getElementsByName("email2")[0].value.toLowerCase();
    let senha1=document.getElementsByName("senha1")[0].value.toLowerCase();
    let senha2=document.getElementsByName("senha2")[0].value.toLowerCase();
    if (email1 === email2 && senha1=== senha2){
        alert("email e senha são iguais!")
        for(var n in usuarios){
            var user = usuarios[u];
            if(user.username === nick){
                alert(`Já existe um usuario com esse nick: ${nick} tente outro.`)

        }   else{
                email = email1
                senha = senha1
                alert(`Deu certo Sr° ${nick}`)
                //usuarios = usuarios + {"login": email,"senha": senha,"nick":nick}}
        }
        
    }


}*/
}
