
let products=JSON.parse(localStorage.getItem("addnews"))||[];



const addnews=(e)=>{
    e.preventDefault();

let data={
    title:document.getElementById("title").value,
    img:document.getElementById("img").value,
    content:document.getElementById("content").value,
    category:document.getElementById("category").value

}
products.push(data)
console.log(products)
localStorage.setItem("addnews",JSON.stringify(products))
window.location.href="/exam/index.html"

}
document.getElementById("data").addEventListener("submit",addnews)