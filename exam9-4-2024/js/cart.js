let carts=JSON.parse(localStorage.getItem("cart"))||[]

const display=()=>{
    document.getElementById("box").innerHTML=""
    carts.map((ele)=>{
        let book=document.createElement("td")
        book.innerHTML=ele.book
        let auther=document.createElement("td")
        auther.innerHTML=ele.auther

        let img=document.createElement("img")
        img.src=ele.img
        let price=document.createElement("td")
        price.innerHTML=ele.price
        let year=document.createElement("td")
        year.innerHTML=ele.year

      
        let tr=document.createElement("tr")
        book.setAttribute("class","text-center")
        
        img.setAttribute("class","img1")
        tr.append(book,auther,img,price,year)
        document.getElementById("box").append(tr)
    })
}
display(carts)