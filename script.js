let botaoEnviar = document.querySelector("#botaoEnviar");
let usuario = document.querySelector("#usuario");
let senha = document.querySelector("#senha");
let valor = document.querySelector("#valor");


botaoEnviar.addEventListener("click", function(evento){
    
    if(usuario.value === ""){
        alert("Por favor digite seu nome de usuário!");
        evento.preventDefault(); // A função prevent.Default(); impede que as informações de um form sejam apagadas logo após clicar no botão, foi preciso colocá-la em cada uma das condições.

    }
    if(senha.value === ""){
        alert("Digite a sua senha");
        evento.preventDefault();
        
    }
    if(senha.value.length < 6){
        alert("Sua senha precisa de pelo menos 6 caracteres!");
        evento.preventDefault();

    }
    if(valor.value === ""){
        alert("Tem que ser um valor!");
        evento.preventDefault();
    }
    if(valor.value === NaN){
        alert("Tem que ser um valor!");
        evento.preventDefault();

    }
    else{
        alert("Enviado com sucesso!");
    }
    
    
  

});