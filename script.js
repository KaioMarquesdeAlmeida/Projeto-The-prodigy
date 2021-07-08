let usuarios = [{"login":"kaio@gmail.com",  "senha":"kaio123", "username": "queijodefumado"}, 
                {"login":"master@gmail.com","senha":"master123",    "username": "nobre alien"}, 
                {"login":"rafa@gmail.com",  "senha":"rafa123",      "username": "ra98"}]
function entrar(){  
    let usuario= document.getElementById("username").value.toLowerCase();
    let senha  = document.getElementById('password').value;
    for (var u in usuarios) {
        var us = usuarios[u];
        
        if ((us.login === usuario || us.username === usuario) && us.senha === senha) {//efetuando login
            window.location = "index.html";
            return alert(`Seja bem vindo ${us.username}!`);  
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
// Cadastro
function cadastro(){
    var ni =document.getElementById("nick"  ).value.toLowerCase()
    var e1 =document.getElementById("email1").value.toLowerCase()
    var e2 =document.getElementById("email2").value.toLowerCase()
    var s1 =document.getElementById("senha1").value.toLowerCase()
    var s2 =document.getElementById("senha2").value.toLowerCase()
     //return alert(`${ni}, ${e1}, ${e2},${s1}, ${s2} `)
    if ((e1 == e2) && (s1== s2)){     //verifica se o email e senha são realmente iguais
        email = e1
        senha = s1
        for (var c in usuarios){
            var uc = usuarios[c];
            if( uc.username == ni ){
                return alert(`O nick "${ni}" já foi cadastrado tente outro nick`)
            }
        }
        nick = ni
        usuarios +={"login":email,  "senha":senha,"username":ni }
        return alert(`${{"login":email,"senha":senha,"username":ni}, {"login":email.value,"senha":senha.value,"username":ni.value }}`)        
        //return false;
        
    }else {
        return alert(`Os dados apresentados estão diferentes`)}
}
