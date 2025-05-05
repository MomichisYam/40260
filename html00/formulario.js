console.log("hola w")

const boton = document.getElementById("Enviar")
boton.addEventListener("click", 
    () => {
        console.log("los parámetros")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        console.log(user.value)
        console.log(password.value)
    }
)

