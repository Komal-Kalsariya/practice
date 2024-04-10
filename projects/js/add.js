let products=JSON.parse(localStorage.getItem("product"))||[]

const product=(e)=>{
    e.preventDefault()

    let data={
        title:document.getElementById("title").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value
    }
    products.push(data)
    console.log(products);
    localStorage.setItem("product",JSON.stringify(products))
    window.location.href="/projects/index.html"


}
document.getElementById("data").addEventListener("submit",product)