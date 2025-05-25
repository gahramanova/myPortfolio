import React, { useEffect, useRef, useState } from 'react'
import logo from "./assets/img/logo.svg"
import hello from "./assets/img/hello.svg"
import myPhoto from "./assets/img/myPhoto.svg"
import { MdOutlineFileDownload } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import webluna from "./assets/img/webluna.png"
import gulcu from "./assets/img/gulcu.png"
import streamvibe from "./assets/img/streamvibe.png"
import petpal from "./assets/img/petpal.png"
import CarouselSkills from './components/CarouselSkills';
import phone from "./assets/img/phone.svg"
import email from "./assets/img/email.svg"
import address from "./assets/img/address.svg"
import Aos from "aos";
import "aos/dist/aos.css"
import Preloader from './components/Preloader';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import resume from "./assets/img/narmingahramanovaresume.pdf"
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { Typewriter } from 'react-simple-typewriter'


const App = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vlqnrm6', 'template_zdvelp1', form.current, {
        publicKey: 'IvPidmPRkNf3dl1qX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return (
    <>

      {loading ? <Preloader /> : <main className=''>
        <header className="p-3 header-one">
          <div className="container-fluid px-5">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <img src={logo} style={{ width: "60px", height: "60px" }} />
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li className='nav-item'><a href="mailto:narminhikmat@gmail.com" className="nav-link px-2 text-light">narminhikmat@gmail.com</a></li>
                <li className='nav-item'><Link to="works" activeClass='active' spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2 text-light">Works</Link></li>
                <li className='nav-item'><Link to="resume" activeClass='active' spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2 text-light">Resume</Link></li>
                <li className='nav-item'><Link to="skills" activeClass='active' spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2 text-light">Skills</Link></li>
                <li className='nav-item'><Link to="contact" activeClass='active' spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2 text-light">Contact</Link></li>
              </ul>

              <div className="dropdown text-end">
                <button className='btn hire-me'>Hire me! </button>
              </div>
            </div>
          </div>
        </header>

        <header className='header-two'>
          <div className='container-fluid'>
            <nav className="navbar bg-body-dark">
              <div>
                <img src={logo} style={{ width: "60px", height: "60px" }} />
              </div>

              <div>

                <button className='btn hire-me'>Hire me! </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" aria-expanded="false" aria-label="Toggle navigation">
                  <HiOutlineMenuAlt3 style={{ color: "#ffffff", width: "50px", height: "50px" }} />
                </button>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-light" id="offcanvasScrollingLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className='p-0'>
                      <li className='nav-item border-bottom mb-4 text-light'><Link to="works" activeClass='active' spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2">Works</Link></li>
                      <li className='nav-item border-bottom mb-4 text-light'><Link to="resume" activeClass='active' spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2">Resume</Link></li>
                      <li className='nav-item border-bottom mb-4 text-light'><Link to="skills" activeClass='active' spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2">Skills</Link></li>
                      <li className='nav-item border-bottom mb-4 text-light'><Link to="contact" activeClass='active' spy={true} smooth={true} offset={-150} duration={500} className="nav-link px-2">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </nav>

          </div>
        </header>
        <section className='section-one mb-5'>
          <div className='d-flex justify-content-center align-items-center hello'>
            <img src={hello} style={{ backgroundAttachment: "fixed" }} />
          </div>
          <div className="container-fluid px-5 py-5">
            <div className="row flex-lg-row-reverse g-5 py-5">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6" data-aos="fade-left">
                <img src={myPhoto} className="d-block mx-lg-auto img-fluid myphoto" alt="Bootstrap Themes" style={{ width: "100%", height: "475px", marginTop: "-30px" }} />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-5">
                <h1 className='fw-bold text-light'>
                  I am Narmin
                </h1>
                <h1 className="display-1 fw-bold mb-3 frontend">
                  <Typewriter
                    words={[
                       'Front-end Developer']}
                    loop={Infinity}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <p className="lead" style={{ color: "#DDDDDD" }}>I break down complex user experinece problems to
                  create integritiy focussed solutions that connect
                  billions of people</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a href={resume} download="Narmin Gahramanova-Resume">
                    <button type="button" className="btn download-cv">Download CV <MdOutlineFileDownload style={{ width: "20px", height: "20px" }} />
                    </button>
                  </a>
                  <a href='https://www.facebook.com/profile.php?id=100089687614748&mibextid=ZbWKwL' target='_blank'>
                    <button className='btn icons'><RiFacebookFill /></button>
                  </a>

                  <a href="https://www.linkedin.com/in/narmin-gahramanova-a6478a234/" target='_blank'>
                    <button className='btn icons'><FaLinkedinIn /></button>
                  </a>

                  <a href='https://github.com/gahramanova' target='_blank' >
                    <button className='btn icons'><FaGithub /></button>
                  </a>

                </div>
              </div>
            </div>
          </div>
          <h1 className='text-center recent-works m-0 mt-5'>My Recent Works</h1>
          <div className='container-fluid px-5 mt-5' data-aos="fade-up">
            <div className='row g-4'>
              <div className='col-12 col-sm-6 col-md-6 '>

                <div className='project '>
                  <a href="https://petpal-kappa.vercel.app" target='_blank'>
                    <img src={petpal} style={{ width: "100%", objectFit: "contain" }} />
                    <div className='title'>
                      <h4 className='m-0'>Petpal - petcare</h4>
                      <p className='m-0'>Project was about presicion and information...</p>
                    </div>
                  </a>
                </div>

              </div>
              <div className='col-12 col-sm-6 col-md-6'>
                <div className='project'>
                  <a href='https://gulcu.az/' target='_blank'>
                    <img src={gulcu} style={{ width: "100%", objectFit: "contain" }} />
                    <div className='title'>
                      <h4 className='m-0'>Gülçü.az</h4>
                      <p className='m-0'>Project was about presicion and information...</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-md-6'>
                <div className='project'>
                  <a href="https://webluna.org/" target='_blank'>
                    <img src={webluna} style={{ width: "100%", objectFit: "contain" }} />
                    <div className='title'>
                      <h4 className='m-0'>Webluna Sofware</h4>
                      <p className='m-0'>Project was about presicion and information...</p>
                    </div>
                  </a></div>
              </div>
              <div className='col-12 col-sm-6 col-md-6'>
                <div className='project'>
                  <a href="https://streamvibe-beta.vercel.app/" target='_blank'>
                    <img src={streamvibe} style={{ width: "100%", objectFit: "contain" }} />
                    <div className='title'>
                      <h4 className='m-0'>StreamVibe movie</h4>
                      <p className='m-0'>Project was about presicion and information...</p>
                    </div>
                  </a>
                </div>
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
                          <h4 className="card-title date">2025 Feburary - Present</h4>
                          <h3 className="card-text profession">Junior Frontend Developer</h3>
                          <h5 className='company'>Perspektiv.az</h5>
                        </div>
                      </div>

                    </div>
                  
                    <div className='col-12 col-sm-6 col-md-10 mt-3' data-aos="fade-right">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title date">2022 October - 2024 August</h4>
                          <h3 className="card-text profession">Junior Frontend Developer</h3>
                          <h5 className='company'>Webluna Software Company</h5>
                        </div>
                      </div>

                    </div>
                      <div className='col-12 col-sm-6 col-md-10 mt-3' data-aos="fade-right">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title date">2022 October - 2022 December</h4>
                          <h3 className="card-text profession">Junior Frontend Developer - Intern</h3>
                          <h5 className='company'>OzunOyren startup</h5>
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

                    <form className='py-4 mt-4' ref={form} onSubmit={sendEmail}>
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
        <footer style={{ backgroundColor: "#140C1C" }}>
          <div className="container">
            <footer className="py-3">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Services</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Work</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Skills</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Experience</a></li>
              </ul>
              <p className="text-center" style={{ color: "#8750F7" }}>© {new Date().getFullYear()} All Rights Reserved by KhalidBabayev</p>
            </footer>
          </div>

        </footer>
      </main >
      }



    </>
  )
}

export default App