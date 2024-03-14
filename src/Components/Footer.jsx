import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className=' w-100 d-flex flex-column justify-content-center bg-black border'>
                <div className="row p-5">
                    <div className="col">
                        <h4  style={{color:'RED'}}>Media Player 2024</h4>
                        <p style={{ textAlign: 'justify' ,color:'white'}}>There are a number of reasons you may need a block of text and when you do, a random paragraph can be the perfect solution. If you happen to be a web designer and you need some random text to show in your layout, a random paragraph can be an excellent way to do this. If you're a programmer and you need random text to test the program, using these paragraphs can be the perfect way to do this. Anyone who's in search of realistic text for a project can use one or more of these random paragraphs to fill their need.

                            Improve Writing..</p>
                    </div>
                    
                    <div className="col">
                        <h4 style={{color:'RED'}}>LINKS:</h4>
                        <Link to={'/'} style={{color:'green'}}>Landing</Link><br />
                        <Link to={'/dash'} style={{color:'green'}}>Dashboard</Link><br />
                        <Link to={'/his'} style={{color:'green'}}>History</Link><br />
                    </div>
                    <div className="col">
                        <h4  style={{color:'RED'}}>REFERENCES:</h4>
                        <a href="https://getbootstrap.com/" style={{color:'green'}} target="_blank">Bootstrap</a><br />
                        <a href="https://react-bootstrap.netlify.app/" style={{color:'green'}}target="_blank">React-Bootstrap</a><br />
                        <a href="https://react.dev/" style={{color:'green '}}target="_blank">React</a><br />
                    </div>
                    <div className="text-center">
                        <p>&copy;Media Player 2024

                        </p>

                    </div>
                </div>
            </div>



        </>

    )
}
export default Footer