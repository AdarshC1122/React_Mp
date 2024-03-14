import axios from "axios"

const commonApi=async(reqmethod,apiUrl,body)=>{
    const reqConfig={
        method:reqmethod,
        url:apiUrl,
        data:body,
        header:{'content-Type':'application/json'}
    }
    return await axios(reqConfig).then(res=>{
        return res
}).catch(err=>{
    return err
})

}


export default commonApi