let products=JSON.parse(localStorage.getItem("product"))||[];
const diaplay=()=>{
    document.getElementById("box").innerHTML=""
    products.map((ele)=>{
        let title=document.createElement("h2")
        title.innerHTML=ele.title

        let price=document.createElement("p")
        price.innerHTML=ele.price

        let img=document.createElement("img")
        img.src=ele.img

        let div=document.createElement("div")
        div.append(title,img,price)
        div.setAttribute("class","box1")
        img.setAttribute("class","imges")
        title.setAttribute("class","text-center")
        document.getElementById("box").append(div)
    })        


}
diaplay()