import React from 'react';
import '../css/LandingPage.css';
import logo from '../assets/logo.png';
import hero from '../assets/hero.png';
import vyn from '../assets/vyn.jpg';
//import { FaLinkedinIn, FaGithub, FaTwitter, FaFigma, FaFacebook } from 'react-icons/fa';

const LandingPage = () => {

  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Capstone Connect Logo" />
        </div>
        <ul className="nav-pill-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="nav-button">Sign In</button>
          <button className="nav-button register">Register</button>
        </div>
      </nav>

      <div className="landing-body" id="home">
        <div className="text-wrapper">
          <div className="heading-wrapper">
            <h1>
              <span className="welcome">Welcome to</span> <br />
              <span className="capstone">Capstone</span>
              <span className="connect">Connect</span>
            </h1>
          </div>
          <p className="description">
            Find your perfect match for your capstone project in a swipe
          </p>
          <div className="button-wrapper">
            <button className="cta-button">Get Started</button>
          </div>
        </div>

        <div className="map-wrapper">
          <img src={hero} alt="Map" />
        </div>
      </div>

      <div className="MidPage" id="dashboard">
        <div className="HeadingWrapper">
          <h1>Matching Algorithm</h1>
          <p>Discover your perfect match on CapstoneConnect with our innovative matching algorithm.</p>
        </div>
        <div className="Wrapper">
          <div className="FeatureList">
            <h2>Personalized Matches</h2>
            <p>Find connections that truly resonate with you based on your interests and preferences.</p>
          </div>
          <div className="FeatureList">
            <h2>Compatibility Scores</h2>
            <p>Get insights into your compatibility with other users to make informed decisions.</p>
          </div>
          <div className="FeatureList">
            <h2>Mutual Interests</h2>
            <p>Explore shared interests with potential matches to spark meaningful conversations.</p>
          </div>
        </div>
      </div>

      {/* New About Us Section */}
      <div className="AboutPage" id="about">
        <div className="AboutHeader">
          <h1>Our Team</h1>
          <p>Meet the talented developers behind our success. We're a passionate team dedicated to creating exceptional digital experiences.</p>
        </div>

        <div className="TeamContainer">
          <div className="TeamMember">
            <div className="MemberImage">
              <span className="MemberRole">Frontend</span>
              <img src={vyn} alt="Team Member" />
            </div>
            <div className="MemberInfo">
              <h3>Jhovynn Aldrich Apurado</h3>
              <p className="Role">Frontend Developer</p>
              <p className="Bio">Specializing in responsive design and user experience.</p>
              <div className="SocialIcons">
                {/*}
                <a href="#"><FaFigma /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaFacebook /></a>
                  */}
              </div>
            </div>
          </div>

          <div className="TeamMember">
            <div className="MemberImage">
              <span className="MemberRole">Frontend</span>
              <img src="https://placehold.co/400x400" alt="Team Member" />
            </div>
            <div className="MemberInfo">
              <h3>Harold Destura</h3>
              <p className="Role">Frontend Developer</p>
              <p className="Bio">Expert in modern JavaScript frameworks.</p>
              <div className="SocialIcons">
                {/*
                <a href="#"><FaFigma /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaFacebook /></a>
                 */}
              </div>
            </div>
          </div>

          <div className="TeamMember">
            <div className="MemberImage">
              <span className="MemberRole">Backend</span>
              <img src="https://placehold.co/400x400" alt="Team Member" />
            </div>
            <div className="MemberInfo">
              <h3>Tovi Joshua Hermosisima</h3>
              <p className="Role">Backend Developer</p>
              <p className="Bio">Building robust server-side architectures.</p>
              <div className="SocialIcons">
                {/*
                <a href="#"><FaFigma /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaFacebook /></a>
                 */}
              </div>
            </div>
          </div>

          <div className="TeamMember">
            <div className="MemberImage">
              <span className="MemberRole">Backend</span>
              <img src="https://placehold.co/400x400" alt="Team Member" />
            </div>
            <div className="MemberInfo">
              <h3>John Gerard Donaire</h3>
              <p className="Role">Backend Developer</p>
              <p className="Bio">Database expert ensuring optimized systems.</p>
              <div className="SocialIcons">
                {/*
                <a href="#"><FaFigma /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaFacebook /></a>
                 */}
              </div>
            </div>
          </div>

          <div className="TeamMember">
            <div className="MemberImage">
              <span className="MemberRole">Frontend</span>
              <img src="https://placehold.co/400x400" alt="Team Member" />
            </div>
            <div className="MemberInfo">
              <h3>John David Calimpong</h3>
              <p className="Role">Frontend Developer</p>
              <p className="Bio">Creating beautiful, accessible interfaces.</p>
              <div className="SocialIcons">
                {/*
                <a href="#"><FaFigma /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaFacebook /></a>
                 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;