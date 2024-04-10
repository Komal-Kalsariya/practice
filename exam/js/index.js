let product=JSON.parse(localStorage.getItem("addnews"))||[];

const showdata=()=>{
let datas = localStorage.getItem("name")
let name1=document.createElement("h2")
name1.innerHTML=datas
let image=localStorage.getItem("images")
let img=document.createElement("img")
img.src=image
let btn=document.createElement("button")
btn.innerHTML="like"
let btn1=document.createElement("button")
btn1.innerHTML="Dislike"
btn.addEventListener("click",()=>{
    alert("Thank you...")
})
let btn3=document.createElement("button")
btn3.innerHTML="Logout"
btn3.addEventListener("click",()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("images")
    showdata()
})
img.setAttribute("class","proimg d-block mx-auto")
name1.setAttribute("class","text-center text-danger")
btn.setAttribute("class","btn btn-success ms-3 w-25")
btn1.setAttribute("class","btn btn-success ms-2")
btn3.setAttribute("class","btn btn-danger ms-5 m-1")
document.getElementById("boxes").append(img,name1,btn,btn1,btn3)
}
showdata()


// let signupdatas=JSON.parse(localStorage.getItem("signup"))||[]

//const diaplaysignup=()=>{
    //signupdatas.map((ele)=>{
       //let user=document.createElement("h2")
     //  user.innerHTML=ele.user
    //   let email=document.createElement("p")
//         email.innerHTML=ele.email
//         let category=document.createElement("p")
//         category.innerHTML=ele.category
//         let img=document.createElement("img")
//         img.src=ele.img

//         let div=document.createElement("div") 
    //div.append(user,email,category,img)
//         img.setAttribute("class","img1")
   // document.getElementById("boxes").append(div)
//     })
// }
// diaplaysignup()

// document.getElementById("boxes").addEventListener("submit",diaplaysignup)
const diaplay=(data)=>{
    document.getElementById("box").innerHTML=""
    data.map((ele)=>{
        let title=document.createElement("h2")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img

        let content=document.createElement("p")
        content.innerHTML=ele.content

        let category=document.createElement("p")
        category.innerHTML=ele.category


        let div=document.createElement("div")
        div.append(title,img,content,category)

        div.setAttribute("class","box1")
        document.getElementById("box").append(div)
    })

}
// diaplay()

const category=(val)=>{

    let temp=product.filter((ele)=>ele.category==val)
    diaplay(temp)

}
const search=(val)=>{
    let temp=product.filter((ele)=>ele.title==val)
    diaplay(temp)
}

const searchpro=(e)=>{
    e.preventDefault();
    let val=document.getElementById("search").value
    search(val)
}

document.getElementById("searchform").addEventListener("submit",searchpro)
document.getElementById("India").addEventListener("click",()=>category("India"))
document.getElementById("London").addEventListener("click",()=>category("London"))
document.getElementById("America").addEventListener("click",()=>category("America"))