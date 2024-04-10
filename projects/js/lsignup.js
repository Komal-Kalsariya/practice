let signups=JSON.parse(localStorage.getItem("signup"))||[]

const signup=(e)=>{
    e.preventDefault();


    let data={
        user:document.getElementById("user").value,
        email:document.getElementById("email").value,
        pass:document.getElementById("pass").value,

    }
    let emailvalidation=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(!emailvalidation.test(data.email)){
        alert("please enter valid email address")
        return
    }
    let passwordvalidation=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    if(!passwordvalidation.test(data.pass)){
        alert("please enter valid password");
        return
    }
    
   
    signups.push(data)
    // console.log(signups)
    localStorage.setItem("signup",JSON.stringify(signups))
    window.location.href="/projects/index.html"

}
document.getElementById("data").addEventListener("submit",signup)