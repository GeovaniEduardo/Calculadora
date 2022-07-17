btSoma.addEventListener("click", function() {
    var inN1= document.getElementById("inN1");
    var inN2 = document.getElementById("inN2");
    var outResult = document.getElementById("outResult");
    var btLimpar = document.getElementById("btLimpar");

    var n1 = Number(inN1.value);
    var n2 = Number(inN2.value);

    if (n1 == "" || isNaN(n1) || n2 == "" || isNaN(n2)) {
        alert("Digite números válidos");
        inN1.focus();
        return;
    }
    
    var resul = n1 + n2;
    outResult.value = resul;
    btLimpar.className = "exibe";       
});
    
btSubtrai.addEventListener("click", function() {
    var inN1= document.getElementById("inN1");
    var inN2 = document.getElementById("inN2");
    var outResult = document.getElementById("outResult");
    var btLimpar = document.getElementById("btLimpar");

    var n1 = Number(inN1.value);
    var n2 = Number(inN2.value);

    if (n1 == "" || isNaN(n1) || n2 == "" || isNaN(n2)) {
        alert("Digite números válidos");
        inN1.focus();
        return;
    }
    var resul = n1 - n2;
    outResult.value = resul;
    btLimpar.className = "exibe";  
});

btMultiplica.addEventListener("click", function() {
    var inN1= document.getElementById("inN1");
    var inN2 = document.getElementById("inN2");
    var outResult = document.getElementById("outResult");
    var btLimpar = document.getElementById("btLimpar");

    var n1 = Number(inN1.value);
    var n2 = Number(inN2.value);

    if (n1 == "" || isNaN(n1) || n2 == "" || isNaN(n2)) {
        alert("Digite números válidos");
        inN1.focus();
        return;
    } 
    
    var resul = n1 * n2;
    outResult.value = resul;
    btLimpar.className = "exibe";     
});

btDivide.addEventListener("click", function() {
    var inN1= document.getElementById("inN1");
    var inN2 = document.getElementById("inN2");
    var outResult = document.getElementById("outResult");
    var btLimpar = document.getElementById("btLimpar");

    var n1 = Number(inN1.value);
    var n2 = Number(inN2.value);

    if (n1 == "" || isNaN(n1) || n2 == "" || isNaN(n2)) {
        alert("Digite números válidos");
        inN1.focus();
        return;
    }
    
    var resul = n1/n2;
    outResult.value = resul.toFixed(2);
    btLimpar.className = "exibe";  
});

btLimpar.addEventListener("click", function() {
    var inN1= document.getElementById("inN1").value = "";
    var inN2 = document.getElementById("inN2").value = "";
    var outResult = document.getElementById("outResult").value= "";
    btLimpar.className = "oculta";
});