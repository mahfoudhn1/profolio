import React from 'react'
import Navbar from '../Navbar/Navbar'
import './header.scss'
import  back from './back.jpg'
import { Link } from 'react-scroll'

function Header() {

    return (
        <div className="header">
            <Navbar />
            <div className="body">
                <h1>Hi</h1>
                <h1>I am Mahfoud</h1>
                <p className="header-p">and i am a full stack Web Developer</p>
                
                <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                >
                <div class="scroll-downs">
                <div class="mousey">
                    <div class="scroller"></div>
                </div>
                </div> 
                </Link>
            </div>
        </div>
    )
}

export default Header
