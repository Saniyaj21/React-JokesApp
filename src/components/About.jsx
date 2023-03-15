import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
} from "react-icons/ai";

import me from '../assets/profile.png'

const Blog = () => {
    return (

        <>

            <div className="me">
                <a href="https://saniyajmallikportfolio.netlify.app/" target={'blank'}>
                    <img src={me} alt="" />
                    <p>Saniyaj Mallik</p>
                </a>
            </div>

            <div className='about-main'>



                <div className='social-icons'
                    style={{
                        animationDelay: "0.3s",
                    }}

                >
                    <a href="https://www.instagram.com/saniyajmallik12/" target={'blank'}><AiFillInstagram /></a>

                </div>
                <div className='social-icons'
                    style={{
                        animationDelay: "0.5s",
                    }}

                >
                    <a href="https://github.com/Saniyaj21" target={'blank'}><AiFillGithub /></a>

                </div>


                <div className='social-icons'

                    style={{
                        animationDelay: "0.7s",
                    }}
                >

                    <a href="https://www.linkedin.com/in/saniyaj-mallik-27809923a/" target={'blank'}><AiFillLinkedin /></a>
                </div>


            </div>
        </>
    )
}

export default Blog