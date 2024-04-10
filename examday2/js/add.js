
 let products=JSON.parse(localStorage.getItem("product"))||[];

const product=(e)=>{
    e.preventDefault();

    let data={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        img:document.getElementById("img").value
    }
    products.push(data)
    console.log(products)

    localStorage.setItem("product",JSON.stringify(products))
    window.location.href="/examday2/index.html"
}
document.getElementById("data").addEventListener("submit",product)