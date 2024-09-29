// Clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Clase Alumno que hereda de Persona
class Alumno extends Persona {
    constructor(nombre, edad, grado, seccion) {
        super(nombre, edad);
        this.grado = grado;
        this.seccion = seccion;
    }
}

// Lista para almacenar los alumnos
let alumnos = [];

// Función para añadir un nuevo alumno
function añadirAlumno(nombre, edad, grado, seccion) {
    const nuevoAlumno = new Alumno(nombre, edad, grado, seccion);
    alumnos.push(nuevoAlumno);
    console.log(`Alumno ${nombre} añadido exitosamente.`);
    listarAlumnos();
}

// Función para actualizar el grado de un alumno
function actualizarGrado(nombre, nuevoGrado) {
    const alumno = alumnos.find(al => al.nombre === nombre);
    if (alumno) {
        alumno.grado = nuevoGrado;
        console.log(`Grado de ${nombre} actualizado a ${nuevoGrado}.`);
        listarAlumnos();
    } else {
        console.log(`Alumno ${nombre} no encontrado.`);
    }
}

// Función para listar todos los alumnos
function listarAlumnos() {
    const lista = document.getElementById('listaAlumnos');
    lista.innerHTML = '';
    if (alumnos.length === 0) {
        lista.innerHTML = '<li>No hay alumnos registrados.</li>';
    } else {
        alumnos.forEach(al => {
            const item = document.createElement('li');
            item.textContent = `Nombre: ${al.nombre}, Edad: ${al.edad}, Grado: ${al.grado}, Sección: ${al.seccion}`;
            lista.appendChild(item);
        });
    }
}

// Manejar el envío del formulario de añadir alumno
function manejarAñadirAlumno(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const grado = document.getElementById('grado').value;
    const seccion = document.getElementById('seccion').value;
    añadirAlumno(nombre, edad, grado, seccion);
}

// Manejar el envío del formulario de actualizar grado
function manejarActualizarGrado(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreActualizar').value;
    const nuevoGrado = document.getElementById('nuevoGrado').value;
    actualizarGrado(nombre, nuevoGrado);
}