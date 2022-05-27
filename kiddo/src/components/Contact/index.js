import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useRef,useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
  
  

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_b15t7pl', 'template_9wlvm2g', refForm.current, 'wlgQgiqu3MyDCCUFh')
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          );
      };
    
    return(
        <>
        <div className='container contact-page'>
          
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}/>

                </h1>
                <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>

          <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                    <input type="text" name="name" placeholder='Name' required />
                        </li>
                        <li className='half'>
                    <input type="email" name="email" placeholder='Email' required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required></textarea>
                        </li>
                        <input type="submit" className='flat-button' value="SEND" />
                    </ul>
                </form>
            </div>
            </div>
            <div className='info-map'>
                Poovendhan,
                <br/>
                India,
                <br/>
                No.42, Avadi-Vel Tech Road, Poonamallee - Avadi High Rd, Vel Nagar, Chennai, Tamil Nadu 600062
                <br/>
            <span>poovendhannandhu@gmail.com</span>
            </div>
            <div className="map-wrap">
          <MapContainer center={[13.17651196761729, 80.09826088205097]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.17651196761729, 80.09826088205097]}>
              <Popup>I live here for now</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
        <Loader type='pacman'/>
        
        </>
    )
}

export default Contact