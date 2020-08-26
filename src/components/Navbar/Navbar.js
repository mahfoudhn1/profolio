import React from 'react'
import './navbar.scss'
import { Link } from 'react-scroll'


function Navbar() {
    return (
        <div className="nav">
            <h1><a href='#'>Mah</a></h1>
            <ul>
            <li>
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
                About
                </Link>
                </li>
                <li>
                <Link activeClass="active"
                to="target"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                >
                Projects
                </Link>
                </li>
                <li>
                <Link activeClass="active"
                to="target"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={100}
                isDynamic={true}

                ignoreCancelEvents={false}
                >
                Skils
                </Link>
                </li>
                <li>
                <Link activeClass="active"
                to="target"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={100}
                isDynamic={true}

                ignoreCancelEvents={false}
                >
                Resume
                </Link>
                </li>
                <li>
                <Link activeClass="active"
                to="target"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={100}
                isDynamic={true}

                ignoreCancelEvents={false}
                >
                Contact
                </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
