import GetData from "../API/get.js"
import Display from "../component/UiMaker.js"
import navBar from "../component/navbar.js"

document.getElementById("navbar").innerHTML=navBar()

const get=async()=>{
    let data=await GetData("http://localhost:3000/products")
    Display(data,"box")

}
get()