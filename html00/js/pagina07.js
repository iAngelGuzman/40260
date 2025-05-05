const boton = document.getElementById("enviar");

boton.addEventListener("click", function() {
    console.log("Formulario enviado");
    let user = document.getElementById("nombre");
    let pass = document.getElementById("password");
    console.log(user.value);
    console.log(pass.value);
});