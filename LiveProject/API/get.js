const GetData=async(url)=>{
    let res=await fetch(url)
    let data=res.json()
    return data
}
export default GetData