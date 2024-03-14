import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../services/allApi';
import CategoriesList from './CategoriesList';

function Categories() {

  const [category, setCategory] = useState({
    name: '', videos: []
  })

  const[addStatus,setAddStatus]=useState({})
  const [show, setShow] = useState(false);


  const getCategory = (val) => {
    if (val) {
      setCategory({ ...category, name: val })
    }
  }
  const handleAdd = async () => {
    console.log(category)
    if (category.name) {
      const res = await addCategory(category)
      // console.log(res)
      if (res.status >= 200 && res.status < 300) {
        // setAddStatus(res.data)
        toast.success("Category Add Successfully!!!")
        handleClose()
        setAddStatus(res.data)
      }
      else {
        toast.error("Category Add Failed!!!")
      }
    }
    else {
      toast.info("Enter Valid Data")
    }
  }




  const handleClose = () => {
    setShow(false)
    setCategory({ name: '', videos: [] })
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid'>
        <Button variant='success' className='btn' onClick={handleShow}>Add Category</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>category</Form.Label>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => { getCategory(e.target.value) }} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>Save</Button>
        </Modal.Footer>
      </Modal>
      <CategoriesList/>
    </>
  )
}

export default Categories
