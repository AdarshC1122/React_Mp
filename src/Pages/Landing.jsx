import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center alighn-items-cente bg-black' style={{ height: '80 vh' }}>
        <div className='row p-5 shadow'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Media Player 2024</h1>
            <p>Exploring mediaplayer from youtube video upload and management,you can add and manage videos,categories and even check watch history</p>
            <div>
              <Link to={'/dash'} className='btn btn-success rounded-pill'>Explore...<i class="fa-solid fa-arrow-right fa-beat fa-xl"></i></Link>

            </div>

          </div>
          <div className='col'>

            <img src="https://i.pinimg.com/originals/83/82/06/83820619a50bc4676d642561a9fe7355.gif" alt="img" className='img-fluid shadow' />

          </div>    

        </div>

      </div>
      <div className='mt-3 p-5 bg-white ' >
        <h1 className='text-center mb-4' style={{color:"black"}}>Features</h1>
        <div className='d-flex mt-2 flexrow justify-content-between'>



          <div className="card" style={{ width: '20rem',backgroundColor:"black" }}>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*f7cZomxEUsR2AYQVlUXZog.gif" className="card-img-top " style={{ height: '250px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Upload videos</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card" style={{ width: '20rem',backgroundColor:"black"  }}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" className="card-img-top" style={{ height: '250px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Watch videos</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card" style={{ width: '20rem' ,backgroundColor:"black" }}>
            <img src="https://media0.giphy.com/media/WFmjWifrj9DJ50YaXj/giphy.gif?cid=790b7611z0y887kh20zxrtqye380c3hdelroq8zxbon5946f&ep=v1_gifs_search&rid=giphy.gif&ct=g" className="card-img-top" style={{ height: '250px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">View History</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>


        </div>
        <div className='mt-5 row ' style={{backgroundColor:'black'}}>
        <div className='col d-flex flex-column justify-content-center'>
          <h2>Simple,fast and secure!!</h2>
          <p style={{textAlign:'justify'}}>Media player 2024 is a platform for simple and faster youtube video uploading and management.you get to interact with video watch history too where you get a simple video player interface with the app.</p>
        </div>
        <div className='col'> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/id848Ww1YLo?si=9uD-BmTfP5gaZ_1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      </div>

      </div>

    </>
  )
}

export default Landing