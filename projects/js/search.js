


let searchs=localStorage.getItem("product");



const search=(e)=>{
    e.prevendefault();

    let data={
        title:document.getElementById("search").value
    }

    searchs.map((ele)=>{
        if(ele.title==data.title){

            let btn=document.createElement("button")
            btn.innerHTML=btn

            btn.addEventListener("click",()=>{
                searchs.localStorage.getItem("product")
                document.getElementById("box").innerHTML=searchs
            })
        }
    })    
    searchs.push(data)
}