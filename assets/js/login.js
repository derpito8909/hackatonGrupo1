const formulogin = document.getElementById('formulariologin')

formulogin.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputcorreo = document.getElementById('inputEmail')
    const inputclave = document.getElementById('inputPassword')
    let correo=inputcorreo
    let clave = inputclave
    let correoalmacenado= localStorage.getItem('usuario')
    let clavealmacenada = localStorage.getItem('usuario')
    console.log(correoalmacenado)
    console.log(clavealmacenada)
    
    login(correo,clave)
  


})

const login = (correo,clave)=>{
    if (correo === localStorage.getItem('usuario')) {
        console.log("ya ingrese al login")
        swal({
            title: "Bienvenido",
            text: "has ingresado correctamente",
            icon: "success",
          });
    }else{
        console.log("pailas esto no valida")
        swal({
            title: "Error",
            text: "El email o clave no coinciden",
            icon: "error",
          });
    }
}