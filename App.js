function calcular(){
    //alert("Deu certo")
    var formulario = document.getElementById("formulario");

    var kilos = Number(formulario.kilos.value);
    var metros = Number(formulario.metros.value);
    var centimetros = Number(formulario.centimetros.value);

    var altura = ((metros * 100 + centimetros)/100);

    var imc = (kilos / (altura * altura));
    imc = imc.toFixed(2)
    //alert(imc)
    
    if(imc<18.50){
        alert('Você está abaixo do peso!');
    }
   
    else if(imc>18.5 && imc<24.9){
    alert("Você está com o peso normal!")
    }

    else if(imc>25 && imc<29.9){
        alert("Você está com Excesso de peso")
    }

    else if(imc>30 && imc<34.9){
        alert("Você está com Obessidade de Classe1")
    }
         
    else if(imc>35 && imc<39.9){
        alert("Você está com Obessidade de Classe2")
    }

    else{
        alert("Não conseguimos vê o seu IMC")
    }

}