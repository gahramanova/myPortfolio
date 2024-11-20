import React, { useEffect } from 'react'
import logo from "./assets/img/logo.svg"
import hello from "./assets/img/hello.svg"
import myPhoto from "./assets/img/myPhoto.svg"
import { MdOutlineFileDownload } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import webluna from "./assets/img/webluna.png"
import gulcu from "./assets/img/gulcu.png"
import CarouselSkills from './components/CarouselSkills';
import phone from "./assets/img/phone.svg"
import email from "./assets/img/email.svg"
import address from "./assets/img/address.svg"
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from 'react-scroll';
const App = () => {

  useEffect(() => {
    Aos.init();
}, []);
  return (
    <>

      <main className=''>
      <header className="p-3">
        <div className="container-fluid px-5">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <img src={logo} style={{ width: "60px", height: "60px" }} />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className='nav-item'><a href="mailto:narminhikmat@gmail.com" className="nav-link px-2 text-light">narminhikmat@gmail.com</a></li>
              <li className='nav-item'><Link to="works" spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2 text-light">Works</Link></li>
              <li className='nav-item'><Link to="resume" spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2 text-light">Resume</Link></li>
              <li className='nav-item'><Link to="skills" spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2 text-light">Skills</Link></li>
              <li className='nav-item'><Link to="contact" spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2 text-light">Contact</Link></li>
            </ul>

            <div className="dropdown text-end">
              <button className='btn hire-me'>Hire me! </button>
            </div>
          </div>
        </div>
      </header>
        <section className='section-one mb-5'>
          <div className='d-flex justify-content-center align-items-center hello'>
            <img src={hello} style={{ backgroundAttachment: "fixed" }} />
          </div>
          <div className="container-fluid px-5 py-5">
            <div className="row flex-lg-row-reverse g-5 py-5">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <img src={myPhoto} className="d-block mx-lg-auto img-fluid myphoto" alt="Bootstrap Themes" style={{ width: "100%", height: "475px" }} />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-5"  data-aos="fade-right">
                <h1 className='fw-bold text-light'>I am Narmin</h1>
                <h1 className="display-1 fw-bold mb-3 frontend">Front-end <br />Developer</h1>
                <p className="lead" style={{ color: "#DDDDDD" }}>I break down complex user experinece problems to
                  create integritiy focussed solutions that connect
                  billions of people</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn download-cv">Download CV <MdOutlineFileDownload style={{ width: "20px", height: "20px" }} />
                  </button>
                  <button className='btn icons'><RiFacebookFill /></button>
                  <button className='btn icons'><FaLinkedinIn /></button>
                  <button className='btn icons'><FaGithub /></button>

                </div>
              </div>
            </div>
          </div>
          <h1 className='text-center recent-works m-0 mt-5'>My Recent Works</h1>
          <div className='container-fluid px-5 mt-5' data-aos="fade-up">
            <div className='row g-4'>
              <div className='col-12 col-sm-6 col-md-6 '>

                <div className='project '>
                  <a href="https://webluna.org/" target='_blank'>
                    <img src={webluna} style={{ width: "100%", height: "100%" }} />
                  </a>
                </div>

              </div>
              <div className='col-12 col-sm-6 col-md-6'>
                <div className='project'>
                  <a href=''>
                    <img src={gulcu} style={{ width: "100%", height: "100%" }} />
                  </a>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6'>
                <div className='project'></div>
              </div>
              <div className='col-12 col-sm-6 col-md-6'>
                <div className='project'></div>
              </div>
            </div>
          </div>

          <div className='container-fluid px-5 mt-5'>
            <div className='row g-4'>
              <div className='col-12 col-sm-6 col-md-6 experience-card'>
                <h1 className='text-center experience mb-5 display-3'>My Experience</h1>
                <div className='row g-4'>
                  <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className='col-12 col-sm-6 col-md-10' data-aos="fade-right">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title date">2024 April - present</h4>
                          <h3 className="card-text profession">Junior Frontend Developer</h3>
                          <h5 className='company'>Webluna Software</h5>
                        </div>
                      </div>

                    </div>
                    <div className='col-12 col-sm-6 col-md-10 mt-3' data-aos="fade-right">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title date">2023 May - 2024 April</h4>
                          <h3 className="card-text profession">Information Technolgy Assitant</h3>
                          <h5 className='company'>IDEA</h5>
                        </div>
                      </div>

                    </div>
                    <div className='col-12 col-sm-6 col-md-10 mt-3' data-aos="fade-right">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title date">2022 December - 2023 April</h4>
                          <h3 className="card-text profession">Frontend Developer - Intern</h3>
                          <h5 className='company'>Ozun Oyren - startup</h5>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6 experience-card'>
                <h1 className='text-center experience mb-5 display-3'>My Education</h1>
                <div className='row g-4'>
                  <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className='col-12 col-sm-6 col-md-10' data-aos="fade-left">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title date">2024 October - present (Master Degree)</h4>
                          <h3 className="card-text profession">IT and Cyber Security</h3>
                          <h5 className='company'>Maria Curie-Skłodowska University</h5>
                        </div>
                      </div>

                    </div>
                    <div className='col-12 col-sm-6 col-md-10 mt-3' data-aos="fade-left">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title date">2023 October - 2024 April</h4>
                          <h3 className="card-text profession">Frontend Developer</h3>
                          <h5 className='company'>Matrix Academy</h5>
                        </div>
                      </div>

                    </div>
                    <div className='col-12 col-sm-6 col-md-10 mt-3' data-aos="fade-left">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title date">2019 - 2023 (Bachelor Degree) </h4>
                          <h3 className="card-text profession">Information Technology</h3>
                          <h5 className='company'>Azerbaijan University of Architecture and Construction</h5>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className='text-center skills mt-5 display-3'>My Skills</h1>
          <p className='text-center text-light'>We put your ideas and thus your wishes in the form of a unique web project that
            inspires you and you customers.</p>

          <CarouselSkills />

          <div className='container'>
            <div className='row g-4'>
              <div className='col-12 col-sm-6 col-md-6' data-aos="fade-up">
                <div className='contact'>
                  <div className='content'>
                    <h1 className='display-5 work'>Let's work together!</h1>
                    <h6 style={{ color: "#DDDDDD" }}>I design and code beautifully simple things and i love what i do.
                      Just simple like that!</h6>

                    <form className='py-4 mt-4'>
                      <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6'>
                          <div className='py-3 mb-3'>
                            <input
                              className='input-contact'
                              type='text'
                              name='name'
                              placeholder="First Name"

                            />
                          </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6'>
                          <div className='py-3 mb-3'>
                            <input
                              className='input-contact'
                              type='text'
                              name='surname'
                              placeholder="Last Name"

                            />
                          </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6'>
                          <div className='py-3 mb-3'>
                            <input
                              className='input-contact'
                              type='text'
                              name='email'
                              placeholder="Email"

                            />
                          </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6'>
                          <div className='py-3 mb-3'>
                            <input
                              className='input-contact'
                              type='text'
                              name='phone'
                              placeholder="Phone number"

                            />
                          </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-11'>

                          <textarea name='message' className="form-control input-contact" id="message" rows="4" placeholder="Write your message" ></textarea>
                        </div>
                      </div>
                      <div className='d-flex justify-content-end align-items-end'>
                        <button type="submit" className="btn mt-3 mx-5 message">Send message</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6'>
                <div className='aside-contact d-flex flex-column'>
                  <div className='d-flex justify-content-center align-items-center mb-5'>
                    <img src={phone} style={{ width: "50px", height: "50px" }} />
                    <div className='mx-2' style={{ minWidth: "200px" }}>
                      <p className='m-0 text-light'>Phone</p>
                      <span className='phone text-light'>+48453317797</span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center align-items-center mb-5'>
                    <img src={email} style={{ width: "50px", height: "50px" }} />
                    <div className='mx-2' style={{ minWidth: "200px" }}>
                      <p className='m-0 text-light'>Email</p>
                      <a href='mailto:narminhikmat@gmail.com' className='phone text-light'>narminhikmat@gmail.com</a>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center align-items-center mb-5'>
                    <img src={address} style={{ width: "50px", height: "50px" }} />
                    <div className='mx-2' style={{ minWidth: "200px" }}>
                      <p className='m-0 text-light'>Address</p>
                      <span className='phone text-light'>Lublin, Poland</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer style={{backgroundColor:"#140C1C"}}>
        <div className="container">
          <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Services</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Work</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Skills</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Experience</a></li>
            </ul>
            <p className="text-center" style={{color:"#8750F7"}}>© 2024 All Rights Reserved by KhalidBabayev</p>
          </footer>
        </div>

      </footer>
      </main >

      

    </>
  )
}

export default App