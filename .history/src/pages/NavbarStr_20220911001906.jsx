
import {NavLink } from 'react-router-dom';

const Navbar= () => { 

  return (
    <>

  <header className="header-custom">
          <div className="container-fluid light-bg">
            <div className="container">
              <div className="social-strip d-flex justify-content-end align-items-center">
                <div><a href="/"><img src="/icon-github.svg" alt="git" /></a></div>
                <div><a href="/"><img src="/icons-linkedin.svg" alt="linkedin" /></a></div>
                <div><a href="/"><img src="/icons-twitter.svg" alt="twitter" /></a></div>
              </div>
            </div>
          </div>
          
          <nav className="sw-nav navbar navbar-expand-lg navbar-light">
            <div className="container px-0 px-xl-3">
              <a className="navbar-brand" href="/"><img src="/logoSocialWell.svg" alt="SocialWell" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/About">About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Projects">Projects</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" to="/Blog">Blogs</NavLink>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
          <div className="light-bg">
            <div className="container">
              <div className="d-flex justify-content-start align-items-center header-01" >
                <div>
                  <h1>SocialWell Technologies</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
    </>
  );
};

export default Navbar; 