class Persona{
    nombre;
    apellidos;
    f_nacimiento;
    a_actual;
    #Curp = null;
    #rfc;
}
    function savePerson(){
        Persona.nombre = document.getElementById("name").value;
        Persona.apellidos =document.getElementById("lastname").value;
        Persona.f_nacimiento=document.getElementById("year").value;
        Persona.a_actual=document.getElementById("day").value;
        Persona.Curp=document.getElementById("Curp").value;
        Persona.rfc=document.getElementById("rfc").value;
    }


    //Ventana
        nombre = (prompt('Ingrese El Nombre'));
        apellidos=(prompt('Ingrese Los Apellidos'));
        a_actual=(prompt('Ingresa El Año Actual'));
        f_nacimiento = parseInt(prompt('Ingrese Su Fecha De Nacimiento'));
        Curp = (prompt('Ingrese El Curp'));
        rfc = (prompt('Ingresa El RFC'));

    //RFC

    function rfc(){
        return(rfc);
    }

    //Genero
    function genero(){
       return(Curp()); 
    }
    const str = Curp;
    let result = str.slice(10,11);
    

    //Edad
    edad = a_actual - f_nacimiento;


    //Alerta
    alert('Sus datos son: '+nombre+" "+apellidos+" "+"Edad: "+edad+" Años"+" "+"Genero: "+result+" "+"RFC: "+rfc);
