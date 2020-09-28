const formulogin = document.getElementById('formulariologin')
let logueado = false


formulogin.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputcorreo = document.getElementById('inputEmail').value
    const inputclave = document.getElementById('inputPassword').value
    const inputnombre = document.getElementById('inputEmail').value

    let listausuarios = JSON.parse(localStorage.getItem('usuario'))

    if (listausuarios===null) {
        let invitaregistro = "Deseas registrarte ahora con  "+inputnombre+"?"
        swal({
            title: "Aun no estas registrado",
            text: invitaregistro,
            icon: "success",
            buttons: {
                cancel: true,
                confirm: true,
              },
          });
          

    } else {
        login(inputcorreo,inputclave)
    }
  
    
})

const login = (correo,clave)=>{
    let listausuarios = JSON.parse(localStorage.getItem('usuario'))
    console.log(correo.length,clave.length)
    let nombrelogueado
    let apellidoslogueado
/* PRIMERO VALIDO QUE LOS CAMPOS SI ESTE CON DATOS DILIGENCIADOS */

    if (correo.length > 0 & clave.length>0) {

        /* RECORRO EL ARRAY PARA VALIDAR CORREO Y CLAVE ALMACENADA */
        
        for (let i = 0; i < listausuarios.length; i++) {
            console.log(listausuarios)
            const mailalmacenado = listausuarios[i].email;
            const clavealmacenada =  listausuarios[i].clave;
            console.log(correo)
            console.log(clave)
            console.log(mailalmacenado)
            console.log(clavealmacenada) 
            if (mailalmacenado === correo & clavealmacenada===clave) {
                console.log("estado logueado")
                nombrelogueado=listausuarios[i].nombres
                apellidoslogueado=listausuarios[i].apellidos
                logueado=true
            }
        }
/* ACA ES DONDE CONFIRMO  SI SE CUMPLE LA VALIDACION Y DEBEMOS REDIRECIONAR A LA PAGINA DEL JUEGO  */
        if (logueado===true) {
            console.log("ya ingrese al login")
            let saludo = "HOLA "+nombrelogueado+"!!"
            let mensaje = "EMPIEZA EL RETO !SUERTE!"
           
            swal({
                title: saludo,
                text: mensaje,
                icon: "success",
              });
        }else{
            console.log("correo o clave no coinciden")
            swal({
                title: "Error",
                text: "El email o clave no coinciden",
                icon: "error",
              });
        }

    } else {
        console.log("campos vacios")
        swal({
            title: "Error",
            text: "Campo de Email o Password vacios",
            icon: "error",
          });    
    }


}