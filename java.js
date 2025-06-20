document.getElementById("Inicio").addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  
  if (usuario === "admin" && contrasena === "12345") {
    alert('Inicio de sesión exitoso, ¡Bienvenido!');
    window.location.href = "Menu.html";
  } else {
    alert('Usuario o contraseña incorrecta. Inserta nuevamente los datos');
  }
});

function enviarWhatsapp() {
    
      const nombre = document.getElementById("nombre").value;
      const numero = "529331323096"; 
       const texto = `Hola, soy ${nombre}. Quisiera saber más informacion sobre LittleFootprints`;
  
const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    }