import React from 'react'
import './Homepage.css'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();
  
    const handleLinkClick = (url) => (e) => {
      e.preventDefault();
  
      document.querySelector('.homepage').classList.add('scroll-up');
  
      setTimeout(() => {
        navigate(url); 
      }, 500);
    }


  return (
    <div className='homepage'>
        <div className="homepage-title">
            <h1 className="part1">BRINGING</h1>
            <h1 className="part2">IDEAS</h1>
            <h1 className="part3">TO LIFE</h1>
        </div>

        <div className='homepage-content'>
            <h2 className='homepage-content-title'>SEONG KANG /  Web Developer <br/>(pronounced as /sʌŋ kɑːŋ/)</h2>
            <p className='homepage-content-description'>I bring pixel-perfect & <br/> accessible digital experiences. <br/><br/> U.S. Army veteran, background in behavioral health, electrical work, and entertainment technology.<br/><br/>I bring unique perspective to problem-solving. <br/><br/>My main focus is to blend technical skills with thoughtful UI/UX design.</p>
        </div>

        <div className='homepage-content-links'>
            <Link to='/' className='homepage-content-links-item part1' onClick={handleLinkClick('/')}>/</Link>
            <Link to='/projects' className='homepage-content-links-item part2' onClick={handleLinkClick('/projects')}>PROJECTS</Link>
            <Link to='/contact' className='homepage-content-links-item part3' onClick={handleLinkClick('/contact')}>CONNECT</Link>
            <Link to='/resume' className='homepage-content-links-item part4' onClick={handleLinkClick('/resume')}>RESUME</Link>
        </div>
    </div>
  )
}

export default Homepage