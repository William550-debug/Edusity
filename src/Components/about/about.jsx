import React from 'react'
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
import './about.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon'/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today </h2>
            <p>
            Our university is a hub for innovation, creativity, and academic excellence. We are committed to providing a world-class education that empowers students to succeed in their chosen careers. Our faculty and staff are dedicated to fostering a supportive and inclusive learning environment that encourages students to explore their passions and interests.
            </p>
        

            <p>Our mission is to provide high-quality education that prepares students for the challenges of the 21st century. We strive to create a community that values diversity, equity, and inclusion, and to promote academic excellence, critical thinking, and creativity.</p>

          


        </div>
    </div>
  )
}

export default About