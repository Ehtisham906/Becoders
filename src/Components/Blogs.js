import React from 'react'
import "../Styles/Jumbotron.css"
import jumbotronImg from '../images/undraw_visionary_technology_re_jfp7 1.png'
import blog1 from "../images/blogs/blog1.png"
import blog2 from "../images/blogs/blog2.png"
import blog3 from "../images/blogs/blog3.png"

import logo from '../images/logo_becoders.png'

import "../Styles/Blog.css"

export default function Blogs(props) {
    return (
        <>

            <div className='container-fluid' >

                <div className='container p-5'>
                    <div className="row ">


                        <div className="col-lg-8 col-xl-8 col-sm-8 col-12"  >
                            <h2 style={{ color: props.mode === 'light' ? '#165f9b' : '#165f9b', fontSize: "64px" }}>
                                <strong>
                                    Let's Put
                                </strong>
                            </h2>
                            <h1 style={{ color: props.mode === 'light' ? '#f86400' : '#f86400', fontSize: "64px" }}>
                                <strong>

                                    Tech Skills <br />
                                    Into Work
                                </strong>
                            </h1>
                            <h2 style={{ color: props.mode === 'light' ? '#165f9b' : '#165f9b', fontSize: "64px" }}>
                                <strong>

                                    Together.
                                </strong>
                            </h2>
                            <h5 style={{ color: props.mode === 'light' ? '#165f9b' : '#165f9b', fontSize: "18px" }}>
                                Customer Software Design & Development
                            </h5>
                            <button className='btn' id='jumbotonregisterBtn' style={{ marginTop: "20px" }} >Register Now</button>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-sm-4 col-12 jumbotronImg">
                            <img src={jumbotronImg} alt="" width={"100%"} height={"100%"} />

                        </div>
                    </div>
                </div>


            </div>

            <div className='container-fluid blogsOuter row mt-4'>

                <div className='col-12 col-md-3 col-xxl-3 col-xl-3 mt-4 p-3 blog1'>
                    <img src={blog1} alt="" width={"100%"} />
                    <p>Posted on June 2023</p>
                    <h4>Web design involves</h4>
                    <p>Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional website using programming languages like HTML, CSS, and JavaScript....</p>
                    <button>
                        Read More
                    </button>
                </div>
                <div className='col-12 col-md-3 col-xxl-3 col-xl-3  mt-4 blog1 p-3'>
                    <img src={blog2} alt="" width={"100%"} />
                    <p>Posted on Oct 2023</p>
                    <h4>the art and practice of planning
                        and projecting ideas</h4>
                    <p>
                    Graphic design is “the art and practice of planning and projecting ideas and experiences with visual and textual content,” according to the American. In simple terms, graphic designers ...
                    </p>
                    <button>
                        Read More
                    </button>
                </div>
                <div className='col-12 col-md-3 col-xxl-3 col-xl-3 mt-4 blog1 p-3'>
                    <img src={blog3} alt="" width={"100%"} />
                    <p>Posted on Oct 2023</p>
                    <h4>the art and practice of planning
                        and projecting ideas</h4>
                    <p>
                    Graphic design is “the art and practice of planning and projecting ideas and experiences with visual and textual content,” according to the American. In simple terms, graphic designers ...
                    </p>
                    <button>
                        Read More
                    </button></div>

            </div>

            <div className='container ' style={{ marginTop: "100px" }}>
                <div className="row">

                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <iframe title='maps-google' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16589.93270164993!2d74.35383166856256!3d35.908492992961385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64951c45992c1%3A0x235ceb0933d57f0c!2sBecoders!5e0!3m2!1sen!2s!4v1704182196021!5m2!1sen!2s"
                            width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h3 style={{color:props.mode==='dark'?'white':'black'}}>
                            We <span style={{ color: "#f86400" }}>Are Reachable via</span> Message!
                        </h3>
                        <div action="">
                            <div className='container col-12 my-3'>

                                <label className='col-12 form-label' htmlFor="fullName" style={{color:props.mode==='dark'?'white':'black'}}><strong>Full Name</strong></label>
                                <input className='col-12' type="text" placeholder='Full Name' id='fullName' autoComplete='given-name' />
                            </div>
                            <div className='container col-12 my-3'>

                                <label className='col-12 form-label' htmlFor="email" style={{color:props.mode==='dark'?'white':'black'}} ><strong>Email</strong> </label>
                                <input className='col-12' type="email" placeholder='Email' id='email' autoComplete='given-email' />
                                <small id="emailHelp" className={`form-text text-${props.mode==='dark'?'light':'dark'} `}  >We'll never share your email with anyone else.</small>

                            </div>
                            <div className='container col-12 my-3'>

                                <label className='col-12 form-label' htmlFor="projectDescription" style={{color:props.mode==='dark'?'white':'black'}} ><strong>Projet Description</strong></label>
                                <textarea name="" id="text-area" style={{ width: "100%" }} rows="10" placeholder='Tell Us What You Are Looking htmlFor'></textarea>
                            </div>
                            <div className='container col-12 my-4 my-3'>
                                <div className="mb-3">
                                    <label htmlFor="uploadingDocuments" className="form-label col-12" style={{color:props.mode==='dark'?'white':'black'}}><strong>Upload Documents</strong></label>
                                    <input className="form-control col-12" type="file" id="uploadDocuments" autoComplete='off' />
                                </div>
                            </div>
                            <div className='container col-12 text-center' >
                                <button className='btn' id='contactSendMessageBtn'> SEND US A MESSAGE</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className=' mt-5 footer' style={{ backgroundColor: "#061723" }}>
                <div className='container row justify-content-between'>
                    <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-4 col-sm-12 col-12 ">
                        <div className='col'>
                            <img src={logo} width={"139px"} height={"139px"} alt="" />
                        </div>
                        <div className='col' style={{ color: "#ffff" }}>
                            <h6>Leading software design and development firm
                                Becodesrs.pk serves clients in the markets for
                                supply chain management, logistics, market place,
                                healthcare, fintech, education, ERP, eCommerce,
                                compliance management, and telecommunications.
                                Our areas of expertise are enterprise business
                                solutions and AI embedded software solutions.
                            </h6>
                        </div>
                    </div>
                    <div className="col-lg-2 col-xl-2 col-xxl-2 col-md-2 col-sm-12 col-12 my-5" style={{ color: "#ffff" }}>
                        <div className='col'><h3>Services</h3></div>
                        <div className='col mt-5'><h6>WEB DEVELOPMENT</h6></div>
                        <div className='col mt-4'><h6>APP DEVELOPMENT</h6></div>
                        <div className='col mt-4'><h6>GRAPHIC DESIGN</h6></div>
                        <div className='col mt-4'><h6>UI UX DESIGN</h6></div>
                    </div>
                    <div className="col-lg-2 col-xl-2 col-xxl-2 col-md-2 col-sm-12 col-12 my-5" style={{ color: "#ffff" }}>
                        <div className='col'><h3>Quick Links</h3></div>
                        <div className='col mt-5'><h6>HOME</h6></div>
                        <div className='col mt-4'><h6>ABOUT US</h6></div>
                        <div className='col mt-4'><h6>SERVICES</h6></div>
                        <div className='col mt-4'><h6>BLOGS</h6></div>
                        <div className='col mt-4'><h6>CONTACT US</h6></div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-sm-12 col-12 my-5" style={{ color: "#ffff" }}>
                        <div className='col'><h3>CONTACT US</h3></div>
                        <div className='col mt-5'><h6> <i className='fa fa-phone text-light'></i>  +923-434695407</h6></div>
                        <div className='col mt-4'><h6> <i className="fa fa-envelope" aria-hidden="true"></i> Becoder.pk@gmail.com</h6></div>
                        <div className='col mt-4'><h6 ><i className="fa fa-address-book"></i> Naveed Shaheed Road Near Salman Garments Plaza</h6></div>

                    </div>
                </div>

                <hr style={{ backgroundColor: "#f86400", height: "2px", width: "100%" }} />

                <div className='text-center d-flex align-items-center'>
                    <div className='col-5 text-end'>

                        <img src={logo} alt="" width={"7%"} />
                    </div>
                    <div className='col text-start mt-3'>

                        <h6 className='text-white'>
                            ©2024 Becoders Company. All Right Reserved.</h6>
                    </div>
                </div>
            </div>















        </>
    )
}
