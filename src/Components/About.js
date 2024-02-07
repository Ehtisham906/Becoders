import React from 'react'
import pic1 from '../images/Becoders-Team/wajid.png'
import pic2 from '../images/Becoders-Team/ehti.png'
import pic3 from '../images/Becoders-Team/gmk.png'
import pic4 from '../images/Becoders-Team/saleem.png'
import pic5 from '../images/Becoders-Team/adnan.png'
import pic6 from '../images/Becoders-Team/shujaat.png'
import pic7 from '../images/Becoders-Team/perviaz.png'
import pic8 from '../images/Becoders-Team/ali.png'
import logo from '../images/logo_becoders.png'
import '../Styles/About.css'



export default function About(props) {

    return (
        <>


            <div className="container">
                <h4 className='text-center'>
                    Our Team
                </h4>
                <div className="row">
                    <div className="box-item col-6 col-sm-6  col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="flip-box">
                            <div className="flip-box-front text-center" >
                                <div className="inner text-light" >
                                    <h3 className="flip-box-header">
                                        <strong>

                                            Wajid Ali
                                        </strong>
                                    </h3>
                                    <p>Cheif Executive Officer (CEO)</p>
                                    <img src={pic1} width={"100%"} alt="..." className='flip-box-img' />
                                </div>
                            </div>

                            <div className="flip-box-back text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">UI UX Designer</h3>
                                    <p>For the past 3 years obsessed with crafting enchanting mobile & website Design experiences that users love.</p>
                                    <a href="https://www.linkedin.com/in/wajid-ali077/" target='_blank'>
                                        <button className='flip-box-button'><i className='fa fa-linkedin fa-lg text-light'></i></button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="box-item col-6 col-sm-6  col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="flip-box">
                            <div className="flip-box-front text-center" >
                                <div className="inner text-light" >
                                    <h3 className="flip-box-header">
                                        <strong>

                                            Ehtisham Zahid
                                        </strong>
                                    </h3>
                                    <p>Cheif Technology Officer (CTO)</p>
                                    <img src={pic2} width={"100%"} height={'262px'} alt="..." className='flip-box-img' />
                                </div>
                            </div>

                            <div className="flip-box-back text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">Full Stack Developer</h3>
                                    <p>3+ years of experience in building websites. Using market standard frameworks.</p>
                                    <a href="https://www.linkedin.com/in/wajid-ali077/" target='_blank'>
                                        <button className='flip-box-button'><i className='fa fa-linkedin fa-lg text-light'></i></button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="box-item col-6 col-sm-6 col-md-3 col-lg-3  col-xl-3 col-xxl-3">
                        <div className="flip-box">
                            <div className="flip-box-front text-center" >
                                <div className="inner text-light" style={{ height: "" }}>
                                    <h3 className="flip-box-header">
                                        <strong>
                                            Murtaza
                                        </strong>
                                    </h3>
                                    <p>Cheif Technology Officer (CTO)</p>
                                    <img src={pic3} width={"100%"} alt="..." className='flip-box-img' />
                                </div>
                            </div>

                            <div className="flip-box-back text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">Sr. Graphic Designer | Blockchain Developer</h3>
                                    <p> Graphic Designer with over 3+ years of experience in designing visually attractive graphics understanding each client's unique requirement.</p>
                                    <a href="https://www.linkedin.com/in/ghulammurtazakhan" target='_blank'>
                                        <button className='flip-box-button'><i className='fa fa-linkedin fa-lg text-light'></i></button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="box-item col-6 col-sm-6 col-md-3 col-lg-3  col-xl-3 col-xxl-3">
                        <div className="flip-box">
                            <div className="flip-box-front text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">
                                        <strong>

                                            Saleem Shah
                                        </strong>
                                    </h3>
                                    <p>Cheif Technology Officer (CTO)</p>
                                    <img src={pic4} width={"100%"} alt="..." className='flip-box-img' />
                                </div>
                            </div>

                            <div className="flip-box-back text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">Flutter App Developer</h3>
                                    < p>2+ years of experience in building Cross Platform Apps. That work on both IOS and Android.</p>
                                    <a href="https://www.linkedin.com/in/saleem-shah-68b70520a/" target='_blank'>
                                        <button className='flip-box-button'><i className='fa fa-linkedin fa-lg text-light'></i></button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="box-item col-6 col-sm-6 col-md-3 col-lg-3  col-xl-3 col-xxl-3">
                        <div className="flip-box">
                            <div className="flip-box-front text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">
                                        <strong>
                                            Adnan Ali
                                        </strong>
                                    </h3>
                                    <p>Human Resource Manager</p>
                                    <img src={pic5} width={"100%"} alt="..." className='flip-box-img' />
                                </div>
                            </div>

                            <div className="flip-box-back text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">Front-End WEB Developer </h3>
                                    <p>Two years of experience designing websites, creating user-friendly and appealing websites and developing server software</p>
                                    <a href="https://www.linkedin.com/in/saleem-shah-68b70520a/" target='_blank'>
                                        <button className='flip-box-button'><i className='fa fa-linkedin fa-lg text-light'></i></button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="box-item col-6 col-sm-6 col-md-3 col-lg-3  col-xl-3 col-xxl-3">
                        <div className="flip-box">
                            <div className="flip-box-front text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">
                                        <strong>
                                            Shujaat Ahmed
                                        </strong>
                                    </h3>
                                    <p>Cheif Marketing Officer</p>
                                    <img src={pic6} width={"100%"} alt="..." className='flip-box-img' />
                                </div>
                            </div>

                            <div className="flip-box-back text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">Full Stack Developer</h3>
                                    <p>Two years of experience designing websites, creating user-friendly and appealing websites and developing server software</p>
                                    <a href="https://www.linkedin.com/in/saleem-shah-68b70520a/" target='_blank'>
                                        <button className='flip-box-button'><i className='fa fa-linkedin fa-lg text-light'></i></button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="box-item col-6 col-sm-6 col-md-3 col-lg-3  col-xl-3 col-xxl-3">
                        <div className="flip-box">
                            <div className="flip-box-front text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">
                                        <strong>
                                            Pervaiz Ali Shah
                                        </strong>
                                    </h3>
                                    <p>
                                        <strong>

                                            Front End Developer
                                        </strong>
                                    </p>
                                    <img src={pic7} width={"100%"} alt="..." className='flip-box-img' />
                                </div>
                            </div>

                            <div className="flip-box-back text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">Full Stack Developer</h3>
                                    <p>Two years of experience designing websites, creating user-friendly and appealing websites and developing server software</p>
                                    <a href="https://www.linkedin.com/in/saleem-shah-68b70520a/" target='_blank'>
                                        <button className='flip-box-button'><i className='fa fa-linkedin fa-lg text-light'></i></button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="box-item col-6 col-sm-6 col-md-3 col-lg-3  col-xl-3 col-xxl-3">
                        <div className="flip-box">
                            <div className="flip-box-front text-center" >
                                <div className="inner text-light">
                                    <h3 className="flip-box-header">
                                        <strong>
                                            Ali Murad
                                        </strong>
                                    </h3>
                                    <p>Accounts Officer</p>
                                    <img src={pic8} width={"100%"} alt="..." className='flip-box-img' />
                                </div>
                            </div>

                            <div className="flip-box-back text-center" >
                                <div className="inner text-light">

                                    <h3 className="flip-box-header">
                                        <strong>

                                            Accountant & Bookkeeper
                                        </strong>
                                    </h3>
                                    <p>Enthusiastic bookkeeper with a master's degree in Business Administration. Having extensive accounting knowledge from working with several SMEs</p>
                                    <a href="https://www.linkedin.com/in/ali-murad-569718259/" target='_blank'>
                                        <button className='flip-box-button'><i className='fa fa-linkedin fa-lg text-light'></i></button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>



            {/* Contact */}
            <div className='container ' style={{ marginTop: "100px" }}>
                <div className="row">

                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <iframe title='maps-google' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16589.93270164993!2d74.35383166856256!3d35.908492992961385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64951c45992c1%3A0x235ceb0933d57f0c!2sBecoders!5e0!3m2!1sen!2s!4v1704182196021!5m2!1sen!2s"
                            width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                            We <span style={{ color: "#f86400" }}>Are Reachable via</span> Message!
                        </h3>
                        <div action="">
                            <div className='container col-12 my-3'>

                                <label className='col-12 form-label' htmlFor="fullName" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}><strong>Full Name</strong></label>
                                <input className='col-12' type="text" placeholder='Full Name' id='fullName' autoComplete='given-name' />
                            </div>
                            <div className='container col-12 my-3'>

                                <label className='col-12 form-label' htmlFor="email" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} ><strong>Email</strong> </label>
                                <input className='col-12' type="email" placeholder='Email' id='email' autoComplete='given-email' />
                                <small id="emailHelp" className={`form-text text-${props.mode === 'dark' ? 'light' : 'dark'} `}  >We'll never share your email with anyone else.</small>

                            </div>
                            <div className='container col-12 my-3'>

                                <label className='col-12 form-label' htmlFor="projectDescription" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} ><strong>Projet Description</strong></label>
                                <textarea name="" id="text-area" style={{ width: "100%" }} rows="10" placeholder='Tell Us What You Are Looking htmlFor'></textarea>
                            </div>
                            <div className='container col-12 my-4 my-3'>
                                <div className="mb-3">
                                    <label htmlFor="uploadingDocuments" className="form-label col-12" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}><strong>Upload Documents</strong></label>
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
            {/* Contact End */}

            {/* footer start */}
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

            {/* footer end */}
        </>
    )
}
