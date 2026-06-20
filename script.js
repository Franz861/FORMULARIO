document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();

    let mensaje = document.getElementById("mensaje");

    if(nombre === "" || correo === "" || telefono === ""){
        mensaje.textContent = "⚠ Todos los campos son obligatorios";
        mensaje.style.color = "#ffcccb";
        return;
    }

    let regexTelefono = /^\d{9}$/;

    if(!regexTelefono.test(telefono)){
        mensaje.textContent = "📱 El teléfono debe tener exactamente 9 dígitos";
        mensaje.style.color = "#ffcccb";
        return;
    }

    mensaje.textContent = "✅ Formulario enviado correctamente";
    mensaje.style.color = "#7CFF7C";

    this.reset();
});