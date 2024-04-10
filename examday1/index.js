let eployees=[];

const dispaly=()=>{
    document.getElementById("box").innerHTML=""
    count=0
    eployees.map((ele,i)=>{
        let name=document.createElement("td")
        name.innerHTML=ele.name

        let phone=document.createElement("td")
        phone.innerHTML=ele.phone

        let address=document.createElement("td")
        address.innerHTML=ele.address

        let contory=document.createElement("td")
        contory.innerHTML=ele.contory

        let td=document.createElement("td")
        td.innerHTML="delete"
        td.addEventListener("click",()=>{
            eployees.splice(i,1)
            dispaly()
        })
        document.getElementById("dele").addEventListener("click",()=>{
            document.getElementById("box").innerHTML="";
        })
        count++;
        let tr=document.createElement("tr")
        tr.append(name,phone,contory,address,td)

        document.getElementById("box").append(tr)

    })

    document.getElementById("show").innerHTML=`${count}`
}

const employee=(e)=>{
    e.preventDefault();

    let data={
        name:document.getElementById("name").value,
        phone:document.getElementById("phone").value,
        address:document.getElementById("address").value,
        contory:document.getElementById("contory").value
    }
    eployees.push(data);
    console.log(eployees)
    dispaly()

}
document.getElementById("data").addEventListener("submit",employee)
