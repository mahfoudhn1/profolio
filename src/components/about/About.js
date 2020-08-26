import React from 'react'
import "./about.scss"
import profile from './profile.jpeg'

function About() {
    return (
        <div className="about" id="about">
            <h1 className="title"> -About Me- </h1>
            <div className='about-body'>
                <div className="picture">
                    <img src={profile}  alt= 'profilepic'/>
                    <div className="square" ></div>
                </div>
                <div className="text-section">
                    <h1>Mahfoud Hentouri</h1>
                    <p>Hello World my name is mahfoud hentouri and i am a full stack web developer
                        i am from algeria and my hobby is to learn deffrent and new technologies
                        i have also intermidate knowledge in Networking (CCNA) and security (security+)
                    </p>
                    <div className="social-media">
                        <a href=""><i class="fab fa-github-alt"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-hackerrank"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
