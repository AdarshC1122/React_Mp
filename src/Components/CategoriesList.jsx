import React, { useState ,useEffect} from 'react'
import { getCategories } from '../services/allApi'
import { deleteCategory ,getSpecificVideo,updatecategory} from '../services/allApi'
import { toast } from 'react-toastify'
import CardVideo from './CardVideo'


function CategoriesList(status){
    const [cat,setcat]=useState([])
    const [delstatus,setDelstatus]=useState({})


    useEffect(()=>{
        getCat()    
    },[status,delstatus])

    const getCat=async()=>{
        const res=await getCategories()
        console.log(res.data);
        setcat(res.data)
    }

    const handleDelete=async(id)=>{
        const res=await deleteCategory(id)

        if(res.status>=200 && res.status<300){
            setDelstatus(res)
        toast.success("Category deleted")
        }
        else{
            toast.error("Category Deletion failed!!")
        }

    }


    const handleDrop=async(e,id)=>{
        console.log("Category ID:"+id)
        const vid=e.dataTransfer.getData("VideoID")
        console.log("Droped Video Id:"+vid)
        let category=cat.find(item=>item.id==id)
        console.log(category)
        const res=await getSpecificVideo(vid)
        category.videos.push(res.data)
        console.log(category)
        const rescat=await updatecategory(category,id)

        if(rescat.status>=200 && rescat.status<300){
            toast.success(`${res.data.caption} is added to ${category.name}`)
            getCat()
        }
        else{
            toast.error("Video adding to category failed!!!")
        }

    }

    const handleDragOver=(e)=>{
        e.preventDefault()
        console.log("Dragging over category")

    }
    

  return (
    <>
    <div className='border border-success p-3 mt-3'>
        {
            cat?
            cat.map(item=>(
                <div className='bg-info mb-3 p-3 rounded shadow' onDragOver={e=>{handleDragOver(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}}>
                   <div>
                   <span>{item.name}</span>
                     <i className='fa-solid fa-trash float-end'  onClick={()=>{handleDelete(item.id)}}   style={{color:'#ff0000'}}></i>
                   </div>
                   <div>
                    {
                        item?.videos.map(v=>(
                            <CardVideo video={v} cat={true}/>
                        ))
                    }

                   </div>
                </div>
            ))
            :
            <h1>No Categories</h1>
        }
    </div>



    </>
    )
}
  


export default CategoriesList