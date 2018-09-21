let botaoEnviar = document.querySelector("#botaoEnviar");
let usuario = document.querySelector("#usuario");
let senha = document.querySelector("#senha");
let valor = document.querySelector("#valor");


botaoEnviar.addEventListener("click", function(evento){
    evento.preventDefault(); // A função prevent.Default(); impede que as informações de um form sejam apagadas logo após clicar no botão, foi preciso colocá-la em cada uma das condições.
    if(usuario.value === ""){
        alert("Por favor digite seu nome de usuário!");
    }
    if(senha.value === ""){
        alert("Digite a sua senha!");     
    }
    if(senha.value.length < 6){
        alert("Sua senha precisa de pelo menos 6 caracteres!");
    }
    if(isNaN(valor.value) || valor.value === ""){
        alert("Tem que ser um valor!");
    }
    else{
        alert("Enviado com sucesso!");
    }
    
    
  

});