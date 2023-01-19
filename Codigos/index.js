let año_actual = parseInt(prompt('Ingrese El Año Actual'));
let año_nacimiento = parseInt(prompt('Ingrese La Fecha De Nacimiento'));
let resultado = año_actual - año_nacimiento;
var alumno = {
    nombre: null,
    apellidos: null,
    fecha_nacimiento: null,
    saluda(){
        
        return "Hola mi nombre es: "+ this.nombre +" "+ this.apellidos + " mucho gusto. Mi edad es :"+" "+ resultado;
    }, 
    
    }


function saveStudent(){
    alumno.nombre = document.getElementById('name').value;
    alumno.apellidos = document.getElementById('lastname').value;
    alumno.fecha_nacimiento = document.getElementById('age').value;
}

function saludar(){
   alert(alumno.saluda());
}


