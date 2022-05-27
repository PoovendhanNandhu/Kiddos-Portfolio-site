import './index.scss'
import LogoTitle from '../../assets/assets/images/P25png.png'
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import ParticleBackground from '../particleBackground'
import Logo from './Logo';

const Home=() => {
    const [letterClass,setLetterClass]=useState('text-animate')
    const nameArray=['o','o','v','e','n','d','h','a','n']
    const jobArray=['A',' ','D','e','v','e','l','o','p','e','r','.']

useEffect ( () => {
    setTimeout(() =>{
        setLetterClass('text-animate-hover')
    },4000)
},[])


    return (
        <>
<div className="container home-page" >
    <div className='particle_bg'><ParticleBackground/></div>

    <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span> 
            <span className={`${letterClass} _12`}>i,</span> 
            
            <br/> <span className={`${letterClass} _13`}>I</span> 
            <span className={`${letterClass} _14`}>'m</span> 
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray} 
        idx={15}  />
        <br/>
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray} 
        idx={20}  />
        </h1>
        <h2>Frontend Developer / Malware Develpoer / AI enthusiastic</h2>
        <Link to="/contact" className='flat-button'> CONTACT ME</Link>
    </div>
<Logo/>
</div>
<Loader type="pacman" />
</>
    );
}

export default Home