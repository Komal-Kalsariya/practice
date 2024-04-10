let signups=JSON.parse(localStorage.getItem("signup"))||[]

let signup=(e)=>{
    e.preventDefault();

    let data={
        user:document.getElementById("user").value,
        email:document.getElementById("email").value,
        category:document.getElementById("category").value,
        img:document.getElementById("img").value,
        pass:document.getElementById("pass").value
    }

    signups.push(data)
    localStorage.setItem("signup",JSON.stringify(signups))
    window.location.href="/exam/index.html"

}
document.getElementById("data").addEventListener("submit",signup)