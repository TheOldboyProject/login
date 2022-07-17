// se oculta la información de los navegadores antiguos

  function informar(){

    var mensaje = "Usuario no autorizado...";
    var usuarios = new Array(3);
    var claves = new Array(3);
    
    usuarios[0] = "JORGE";
    usuarios[1] = "admin";
    usuarios[2] = "PEPE";

    claves[0] = "cz3d"
    claves[1] = "8742"
    claves[2] = "atr99"

    for (i=0; i<usuarios.length; i++){
        if ((usuarios[i]==document.miFormulario.usuario.value.toUpperCase())
            && (claves[i]==document.miFormulario.password.value)){
            mensaje = "Bienvenido al sistema Admin...";
            break;
        }
    } 
  
    alert(mensaje);
    document.miFormulario.botonLimpiar.click();
    document.miFormulario.usuario.focus();
  
  }
 
// final del comentario
