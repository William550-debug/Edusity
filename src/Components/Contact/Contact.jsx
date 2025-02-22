import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "45db833b-05b7-4ccc-aacb-8efab17aadcd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send us a Message  <img src={msg_icon} alt="" /> </h3>
            <p>
                We're eager to assist you with any inquiries.  Whether you have questions about our offerings or need support, please don't hesitate to reach out. Our team is ready to provide prompt and helpful responses. Contact us today and let us know how we can help you.
            </p>
            <ul>
                <li><img src={location_icon} alt="" />55 Steward California</li>
                <li><img src={phone_icon} alt="" /> +1 (123) 456-7890</li>
                <li><img src={mail_icon} alt="" />  info@Sniperdevs.dev</li>
            </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input type="text"  name='name' placeholder='Enter your name' required/>

               

                <label>Phone</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>

                <label>Message</label>
                <textarea name='message' rows="6" placeholder='Write your message' required/>

                <button type='submit' className='btn dark-btn'>Submit Now
                    <img src={white_arrow} alt="" /> 
                </button>

            </form>
            <span>{result}</span>
          
        </div>

    </div>
  )
}

export default Contact;