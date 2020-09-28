import { Usuario } from "./usuario.js";

const formulario = document.getElementById('formulario')

console.log(formulario)

let listadeusuarios=[]

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nombreusuario = document.getElementById('inputnombre').value 
    const apellidosusuario = document.getElementById('inputapellidos').value 
    const emailusuario= document.getElementById('inputemail').value 
    const claveusuario = document.getElementById('inputPassword').value 
    const alertainput = document.getElementById('alertacampo')

  

    if (nombreusuario.length>0 & apellidosusuario.length>0 & emailusuario.length>0 & claveusuario.length>0 ) {
        let usuario = new Usuario ({
            nombres : nombreusuario,
            apellidos : apellidosusuario,
            email : emailusuario,
            clave : claveusuario,
        });
        guardarusuario(usuario)
    } else {
        alertainput.innerText="Todos los campos son obligatorios "
    }

    
   
    
})

const guardarusuario =  (usuario)=>{
    if(localStorage.getItem('usuario')=== null){
        listadeusuarios.push(usuario)
        const guardarusuariostorage= JSON.stringify(listadeusuarios)
        localStorage.setItem('usuario',guardarusuariostorage)
        console.log(listadeusuarios)
        const nombreusuario = document.getElementById('inputnombre').value 
        let saludo="Felicidades "+nombreusuario
        swal({
            title: saludo,
            text: "ya estas registrado !!!",
            icon: "success",
        });
        setTimeout(() => {
            window.location = './assets/pages/Login.html';
        }, 2000);
    }else{
        listadeusuarios=JSON.parse(localStorage.getItem('usuario'))
        listadeusuarios.push(usuario)
        const guardarusuariostorage=JSON.stringify(listadeusuarios)
        localStorage.setItem('usuario',guardarusuariostorage)
        const nombreusuario = document.getElementById('inputnombre').value 
        let saludo="Felicidades "+nombreusuario
        swal({
            title: saludo,
            text: "ya estas registrado !!!",
            icon: "success",
        });
        setTimeout(() => {
            window.location = './assets/pages/Login.html';
        }, 2000);
    }

}