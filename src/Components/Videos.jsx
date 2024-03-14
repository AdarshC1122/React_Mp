import React,{useState,useEffect} from 'react'
import CardVideo from './CardVideo'
import { getVideo } from '../services/allApi'


function Videos(addStatus) {

  const [allVideos,setAllVideos]=useState([])
  const [delStatus,setDelStatus]=useState([])

  useEffect(()=>{
    getData()
  },[addStatus,delStatus])

  const getData=async()=>{
    const res=await getVideo()
    //console.log(res.data)
    setAllVideos(res.data)  
    //console.log(allVideos)
  }

  return (
    <div className='bg-white row border border-5 border-success p-3 '>
      {
        allVideos?
        allVideos.map(item=>(
          <CardVideo video={item} setDelStatus={setDelStatus}/>
        ))
        :
        <h1>No Videos</h1>
      }
      
    </div>
  )
}

export default Videos

