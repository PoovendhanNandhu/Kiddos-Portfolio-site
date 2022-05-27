import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGit, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import ParticleBackground from '../particleBackground'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    return (
       <> 
       <div className='container about-page'>
           <div><ParticleBackground/></div>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}/>
                </h1>
                <p >I'm a student who is very amibitous on cyber-space and AI. </p>
                <p>I'm introvert but very confident in my work which I love todo. </p>
                <p>If I want to define about me in one sentence that would be a boy with a greater goals. </p>
            </div>
            <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529"' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGit} color='#5ED4F4' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faJs} color='yellow' />
                </div>
            </div>
            </div>

        </div>
        <Loader type="pacman" />
</>
    )
}

export default About