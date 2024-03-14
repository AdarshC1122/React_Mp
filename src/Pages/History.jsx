import React,{useEffect, useState} from 'react'
import { getHistory,deleteHistory} from '../services/allApi'
import { toast } from 'react-toastify'


function history(status) {
  const[his,setHis]=useState([])
  const [hisstatus,setDelStatus]=useState({})

 
 

  useEffect(()=>{
    getData()
  },[status,hisstatus])

  const getData=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setHis(res.data)
  }

  const handleDelete=async(id)=>{
    const res=await deleteHistory(id)
    if(res.status>=200 && res.status<300){
      setDelStatus(res)
      toast.success("History Deleted Successfully!!")
    }
    else{
      toast.error("History Deletion Failed")
    }
  }





  return (
    <div className='p-5'>
      <h1>Watch History</h1>
      <table className='table table-bordered'>
        <tr>
          <th>Caption</th>
          <th>URL</th>
          <th>Date & Time</th>
        </tr>
        {
          his ?
          his.map(item=>(
            <tr>
            <td>{item.caption}</td>
            <td>{item.url}</td>
            <td>{item.datetime}</td>
            <td>
            <i class="fa-solid fa-trash text-light" onClick={()=>{handleDelete(item.id)}} ></i>
            </td>
            </tr>

          ))
          :
          <tr>
            <p className='text-danger'>No Watch History</p>
          </tr>


        }

        

      </table>

    </div>
  )
}

export default history