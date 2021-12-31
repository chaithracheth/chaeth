import React from "react";
import {Parallax} from 'react-parallax'
import './FirstComponent.css'
import Img from '../img/pexels-photo3.jpeg'
const inLineStyles = {
    background:'#ffffff',
    left:'50%',
    top:'50%',
    position:'absolute',
    padding:'20px',
    transform: 'translate(-50%, -50%)',
}

const FirstComponent = () => {
    return (
        <div className="Wrapper">
            <Parallax strength={100} >
                <div style={{position:'relative'}}>
                   <p>hellloo</p>
                </div>
            </Parallax>
        </div>
    )

}
export default FirstComponent