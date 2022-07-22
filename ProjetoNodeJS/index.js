function VerificarEntrada(){
    NomeConvidado = document.getElementById("nome").value;
    ConvidadosLucia = ["Paulo","Romildo","Adriana","Renato","Bernardo","Felipe","Marcos"];
   
    
    if(ConvidadosLucia.includes(NomeConvidado)){
        document.getElementById("PermisaoDeEntrada").innerText = "Você pode Entrar";
    }else{
        document.getElementById("PermisaoDeEntrada").innerText = "Você NÃO pode Entrar";
    }
}