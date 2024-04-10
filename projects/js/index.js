
let products=JSON.parse(localStorage.getItem("product"))||[]

let deleteprod=(i)=>{
    products.splice(i,1);
    display()
    localStorage.setItem("product",JSON.stringify(products))
}

let display=(data)=>{
    let count=0
    document.getElementById("box").innerHTML="";
   
    data.map((ele,i)=>{

        let title=document.createElement("h2")
        title.innerHTML=ele.title

        if(ele.title=="mobile"){
            count++;
        }
       
        

        let img=document.createElement("img")
        img.src=ele.img

        let price=document.createElement("p")
        price.innerHTML="Price:"+ele.price

        let btn=document.createElement("button")
        btn.innerHTML="DELETE"

        btn.addEventListener("click",()=>deleteprod(i))

        let btn1=document.createElement("button")
        btn1.innerHTML="UPDATE"

        btn1.addEventListener("click",()=>{
            window.location.href="/projects/pages/add.html"
            document.getElementById("title").value=ele.title
            document.getElementById("img").value=ele.img
            document.getElementById("price").value=ele.price

            let div=document.createElement("div")
            div.append(title,img,price,btn,btn1)
            document.getElementById("box").append(div)
        })

        let div=document.createElement("div")
        div.append(title,img,price,btn,btn1)
        div.setAttribute("class","box1")
        btn.setAttribute("class","btn  btn-danger")
        btn1.setAttribute("class","btn  btn-warning ms-2")
        document.getElementById("box").append(div)
    })

    document.getElementById("box1").innerHTML=`total:${count}`
}

display(products)

let search=(val)=>{
    let temp=products.filter((ele)=>ele.title==val)
    display(temp)
}


const searchproduct=(e)=>{
    e.preventDefault();
    let val=document.getElementById("search").value
    console.log(val)
    search(val)
    
}

let handelefilter=(val)=>{
    let temp
    if(val=="htl"){
        temp=products.sort((a,b)=>b.price- a.price)
        display(temp)
    }
    else{
        temp=products.sort((a,b)=>a.price - b.price)
        display(temp)
    }
}
document.getElementById("searchform").addEventListener("submit",searchproduct)
document.getElementById("htl").addEventListener("click",()=>handelefilter("htl"))
document.getElementById("lth").addEventListener("click",()=>handelefilter("lth"))