let botaoEnviar = document.querySelector("#botaoEnviar");
let usuario = document.querySelector("#usuario");
let senha = document.querySelector("#senha");
let valor = document.querySelector("#valor");
let listaCheckBox = document.querySelectorAll("input[type=checkbox]");
let listaRadio = document.querySelectorAll("input[type=radio]");


botaoEnviar.addEventListener("click", function(evento){
    evento.preventDefault(); 
    if(usuario.value.trim() === ""){
        alert("Por favor digite seu nome de usuário!");
    }
    if(senha.value.trim() === ""){
        alert("Digite a sua senha!");     
    }
    if(senha.value.length < 6){
        alert("Sua senha precisa de pelo menos 6 caracteres!");
    }
    if(isNaN(valor.value) || valor.value.trim() === ""){
        alert("Tem que ser um valor!");
    }
    else{
        alert("Enviado com sucesso!");
    }
    
    for( let i=0, tamanhoCheckBox = listaCheckBox.length; i < tamanhoCheckBox; i++){
        if(listaCheckBox[i].checked){
            console.log(checkBox[i].value);            
        }
    }
    for( let i=0, tamanhoRadio = listaRadio.length; i <tamanhoRadio; i++){
        if(listaRadio[i].checked){
            console.log(radio[i].value);
        }
    }

     

});