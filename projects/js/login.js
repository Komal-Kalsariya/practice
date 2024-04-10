let logins=JSON.parse(localStorage.getItem("signup"))||[]
console.log(logins);

const login=(e)=>{
    e.preventDefault();
    let mail=document.getElementById("mail").value
    let pas=document.getElementById("pas").value
    
    let newuser=logins.filter((ele)=>ele.email==mail && ele.pass==pas)
    if(newuser.length==1){
        alert("login sucessfull....")
        window.location.href="/projects/index.html"
    }
    else{
        alert("please signup")
        window.location.href="/projects/pages/signup.html"
    }
   
}
document.getElementById("data").addEventListener("submit",login)