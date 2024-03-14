import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideos from '../Components/Addvideos'
import Videos from '../Components/Videos'
import Categories from '../Components/Categories'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function Dashboard() {
  const [addStatus,setAddStatus]=useState({})
  return (
    <>
      <div>
        <h3>Dashboard</h3>
        <a href="/His">Watch History</a>
        <Row className='p-5 bg-black'>
        <Col sm='1'md='1'> 
          <Addvideos setAddStatus={setAddStatus}/>
        </Col>
        <Col sm='4'md='8'> 
          <Videos addStatus={addStatus}/>
        </Col>
        <Col sm='2'md='3'> 
          <Categories/>
        </Col>

        </Row>

      </div>
      <ToastContainer/>



    </>
  )
}

export default Dashboard