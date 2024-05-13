/*Funciones Contacto*/

window.addEventListener('DOMContentLoaded', function() {
    const enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre.trim() === '' || email.trim() === '' || asunto.trim() === '' || mensaje.trim() === '') {
            alert('Debe rellenar todos los campos.');
        } else {
            alert('El mensaje ha sido enviado.');
        }
    });
});

/*Funciones carrito*/ 
let carrito = [];


function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };
    carrito.push(producto);
    mostrarCarrito();
}


function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        listaCarrito.appendChild(li);
    });

    calcularTotal();
}


function eliminarProducto(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}


function calcularTotal() {
    const totalElement = document.getElementById('total');
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalElement.textContent = total;
}


function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}


function confirmarCompra() {
    const totalCarrito = parseFloat(document.getElementById('total').innerText);
    if (totalCarrito === 0) {
        alert('Para realizar una compra debe seleccionar algún producto.');
    } else {
        const confirmacion = confirm('¿Seguro que desea realizar esta compra?');
        if (confirmacion) {
            const respuesta = prompt('Por favor, ingrese "si" para confirmar la compra o "no" para cancelarla:');
            if (respuesta && respuesta.toLowerCase() === 'si') {
                alert('¡Su compra ha sido realizada con éxito!');
                vaciarCarrito();
            } else if (respuesta && respuesta.toLowerCase() === 'no') {
                alert('¡Su compra ha sido cancelada!');
            } else {
                alert('Respuesta no válida. Su compra ha sido cancelada.');
            }
        } else {
            alert('¡Compra cancelada!');
        }
    }
}

/*Funciones login*/
function validateLogin(event) {
    event.preventDefault();
    

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    

    var validUsername = "user";
    var validPassword = "password";
    

    if (username === validUsername && password === validPassword) {

      alert("Inicio Exitoso");
    
    } else {
    
      var errorMessage = document.getElementById('error-message');
      errorMessage.textContent = "Contraseña incorrecta porfavor intenta nuevamente.";
    }
}


/*Funcion para el modal*/
const btnAbrirModal =
    document.querySelector("#abrir-modal");
const btnCerrarModal =
    document.querySelector("#cerrar-modal");
const modal =
    document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
} )

btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})


/*Funciones contacto*/
const enviarBtn = document.getElementById('enviarBtn');
        enviarBtn.addEventListener('click', function() {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;

            if (nombre.trim() === '' || email.trim() === '' || asunto.trim() === '' || mensaje.trim() === '') {
                alert('Debe rellenar todos los campos.');
            } else {
                alert('El mensaje ha sido enviado.');
            }
        });

/*Funciones Registro*/
function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (username === "") {
        usernameError.textContent = "Por favor ingresa un usuario.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Por favor ingresa un correo electrónico.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Por favor ingresa un correo electrónico válido.";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Por favor ingresa una contraseña.";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
