
class Rectangulo {
    base = null;
    altura = null;
    resultado = null
constructor(bas,alt,rest){
    this.base = bas;
    this.altura = alt;
    this.resultado = rest
}
}

base = parseFloat(prompt('Ingrese La Base'));
altura = parseFloat(prompt('Ingrese La Altura'));
resultado = base * altura;
 

calcular=function(){
    return "El Área Es : " + resultado +" :)"
}


alert(calcular());





