let logins=JSON.parse(localStorage.getItem("signup"))||[]


let login=(e)=>{
    e.preventDefault();

    let data={
      
        email:document.getElementById("email").value,
       
        pass:document.getElementById("pass").value
    }
let newuser=logins.filter((ele)=>ele.email==data.email && ele.pass == data.pass)
console.log(newuser)
if(newuser.length==1){
    alert("login successfull.........")

    newuser=logins.filter((ele)=>{
       return ele.email==data.email && ele.pass == data.pass
    })[0]
    localStorage.setItem("name",newuser.user)
    localStorage.setItem("images",newuser.img)
     window.location.href="/exam/index.html"
   
}
else{
    window.location.href="/exam/pages/signup.html"
}

    
}
document.getElementById("data").addEventListener("submit",login)