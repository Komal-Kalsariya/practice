
let books=JSON.parse(localStorage.getItem("book"))||[]
let carts=JSON.parse(localStorage.getItem("cart"))||[]
const cartt=(ele)=>{
    carts.push(ele)

    console.log(carts)
    localStorage.setItem("cart",JSON.stringify(carts))
}
const display=()=>{
    document.getElementById("box").innerHTML=""
    books.map((ele,i)=>{
        let book=document.createElement("p")
        book.innerHTML=ele.book
        let auther=document.createElement("p")
        auther.innerHTML="AutherName:"+ele.auther

        let img=document.createElement("img")
        img.src=ele.img
        let price=document.createElement("p")
        price.innerHTML="price:"+ele.price
        let year=document.createElement("p")
        year.innerHTML="year:"+ele.year

        let btn1=document.createElement("button")
        btn1.innerHTML="Delete"
        let btn2=document.createElement("button")
        btn2.innerHTML="Buy"
      
        btn1.addEventListener("click",()=>{
            books.splice(i,1)
            display()
        })
        btn2.addEventListener("click",()=>cartt(ele))
            
        let div=document.createElement("div")
        book.setAttribute("class","text-center")
        div.setAttribute("class","box1")
        btn1.setAttribute("class","btn btn-info me-2")
        btn2.setAttribute("class","btn btn-info")
        div.append(book,img,auther,price,year,btn1,btn2)
        document.getElementById("box").append(div)
    })
}
display()




