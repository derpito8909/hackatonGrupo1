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

    let usuario = new Usuario ({
        nombres : nombreusuario,
        apellidos : apellidosusuario,
        email : emailusuario,
        clave : claveusuario,
    });

    guardarusuario(usuario)
    swal({
        title: "Felicidades ",
        text: "ya estas registrado !!!",
        icon: "success",
      });
    
})

const guardarusuario =  (usuario)=>{
    if(localStorage.getItem('usuario')=== null){
        listadeusuarios.push(usuario)
        const guardarusuariostorage= JSON.stringify(listadeusuarios)
        localStorage.setItem('usuario',guardarusuariostorage)
    }else{
        listadeusuarios=JSON.parse(localStorage.getItem('usuario'))
        listadeusuarios.push(usuario)
        const guardarusuariostorage=JSON.stringify(listadeusuarios)
        localStorage.setItem('usuario',guardarusuariostorage)
    }

}