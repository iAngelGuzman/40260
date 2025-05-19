const boton = document.getElementById("enviar");

boton.addEventListener("click", function() {
    console.log("Formulario enviado");
    let user = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let correo = document.getElementById("email");
    let pass = document.getElementById("password");
    let confirmarpass = document.getElementById("password2");
    console.log(user.value);
    console.log(apellido.value);
    console.log(correo.value);
    console.log(pass.value);
    console.log(confirmarpass.value);
    console.log("Contraseña igual: " + pass.value == confirmarpass.value)
});

const mostrar = () => {
    console.log("Mostrar");
    let user = document.getElementById("user");
    let password = document.getElementById("password");
    console.log(user.value);
    console.log(password.value);
    
    let formulario = document.getElementById("formulario");
    console.log(formulario);
}