import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=> {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = ()=> {
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }



  return (
    <div className="testimonials">
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}> 
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div className="">
                                <h3>Carolyne Mwele</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                        My time at Edusity was transformative.  I came in unsure of what I wanted to do with my Computer Science degree, but the professors were incredibly supportive and the hands-on projects gave me real-world experience. I particularly loved the collaborative coding challenges – they really pushed me to think creatively and work as part of a team.  Edusity didn't just teach me how to code, they taught me how to learn and adapt in a rapidly changing field.  I landed my dream job as a Software Engineer at TechSpark right after graduation, and I owe a lot of that success to the foundation I built at Edusity
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div className="">
                                <h3>Peter Marmoush</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p> Edusity's Business Administration program was the perfect blend of theory and practice.  The case studies were challenging and relevant, and the guest lectures from industry leaders provided invaluable insights. What really stood out for me was the emphasis on leadership development.  Through workshops, group projects, and even student clubs, I learned the skills I needed to lead and inspire.  I'm now managing a team at a growing startup, and I constantly draw on the lessons I learned at Edusity.  It wasn't just a degree, it was an investment in my future</p>
                        
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div className="">
                                <h3>Maria Rodrigez</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                        Edusity's commitment to sustainability is truly inspiring.  As an Environmental Science student, I was drawn to the university's focus on research and real-world impact.  The field work opportunities were incredible – I got to study ecosystems firsthand and contribute to ongoing conservation projects.  The professors were passionate and knowledgeable, and they fostered a supportive learning environment.  I'm now pursuing my PhD, and I'm so grateful for the strong foundation Edusity provided.  They instilled in me not just knowledge, but a deep sense of responsibility to protect our planet
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div className="">
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                        My creative journey flourished at Edusity. The Fine Arts program provided me with the space, resources, and mentorship I needed to explore my artistic vision.  The studio classes were challenging but rewarding, and the faculty were always there to offer constructive criticism and guidance.  Edusity also connected me with the local art community through exhibitions and workshops, which was invaluable.  Since graduating, I've been working as a freelance artist, and I'm so thankful for the skills and confidence Edusity gave me to pursue my passion.  It's a vibrant and supportive community that truly nurtures artistic talent
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials