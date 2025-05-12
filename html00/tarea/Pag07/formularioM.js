console.log("Inicio")

// function mostrar() {
//     console.log("enviar ()")
//     let user=document.getElementById("user")
//     let password=document.getElementById("password")
//     console.log(user.value)
//     console.log(password.value)
// }

const mostrar = () => {
    console.log("los parámetros")
    let user = document.getElementById("user")
    let password = document.getElementById("password")
    console.log(user.value)
    console.log(password.value)

    let formulario = document.getElementsByTagName("form")
    console.log(formulario)
    user.setAttribute("name", "q")
    password.setAttribute("name", "password")
    formulario[0].setAttribute("action", "https://google.com/search")
    formulario[0].submit()
}