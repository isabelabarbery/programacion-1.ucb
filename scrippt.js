 function mostrarNombre() {
        const nombre=document.getElementById("nombre").value;
        const resultado = document.getElementById("resultado");

        if (nombre.trim()===""){
            resultado.textContent="Por favor, escribe tu nombre.";
        } else{
            resultado.textContent = "Hola, "+nombre+"👋";
        }
    }

var lista = [];
function InsertarLista(){
   //constst nombre = document.getElementById("nombres").value;
   var valorAleatorio = Math.floor(Math.random() * 10); 
    const resultado = document.getElementById("resultado");

    lista.push(valorAleatorio);
    resultado.textContent = lista.toString();
     const nuevoBoton = document.createElement("button");
  nuevoBoton.textContent = valorAleatorio;
  nuevoBoton.classList.add("boton-lista"); // Para animación y estilo

  // Oculto al principio para animación
  nuevoBoton.style.opacity = 0;
  nuevoBoton.style.transform = "translateY(-10px)";
  
  // Insertarlo al DOM
  contenedor.appendChild(nuevoBoton);

  // Activar transición después de un breve delay (forzar el reflow)
  setTimeout(() => {
    nuevoBoton.style.opacity = 1;
    nuevoBoton.style.transform = "translateY(0)";
  }, 10);
}

function EliminarElementoLista(){
    //
    const input=document.getElementById("input").value;

    while (lista.includes(input)){
        console.log("Input del usuario:", input)
        var pos = lista.indexOf(input);
        console.log("Input en la posicion:",pos)
        lista.splice(pos,1);
        console.log("Input eliminado ----------:",input)

        }
        console.log("Lista actualizada !!!")
        console.log(lista.toString())
    }

