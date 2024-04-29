

import GetData from "../API/get.js";
import Display from "../component/UiMaker.js";

import navBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navBar()

const searchdata=(val,data)=>{
let temp=data.filter((ele)=>ele.title==val)
Display(temp,"box")
}

const search=(e)=>{
e.preventDefault();
let val=document.getElementById("search").value
searchdata(val)
}
document.getElementById("searchform").addEventListener("click",search)


const get=async()=>{
let data=await GetData("http://localhost:3000/products")
Display(data,"box")
}
get()