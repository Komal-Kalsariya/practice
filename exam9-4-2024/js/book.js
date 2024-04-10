let books=JSON.parse(localStorage.getItem("book"))||[]
const book=(e)=>{
    e.preventDefault();

    let data={
        book:document.getElementById("book").value,
        auther:document.getElementById("auther").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value,
        year:document.getElementById("year").value

    }
    books.push(data)
    console.log(books)
    localStorage.setItem("book",JSON.stringify(books))
    window.location.href="/exam9-4-2024/index.html"
}
document.getElementById("data").addEventListener("submit",book)