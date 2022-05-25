$(document.ready(function(){

    // on ready
    });
    
    async function  () {
        let datos = {};
        datos.nombre = document.getElementById("txtNombre").value;
        datos.apellido = document.getElementById("txtApellido").value;
        datos.email = document.getElementById("txtEmail").value;
        datos.password = document.getElementById("txtPassword").value;
         
        let (repetirPassword != datos.password) {
            alert ('No coinciden las contraseñas');
            return;
        }
        
        
        const request = await fetch('api/usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/JSON',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        const usuarios = await request.json();