import React from 'react'
import '../Styles/ServicesPage.css'

import logo from '../images/logo_becoders.png'

export default function Services(props) {
    return (
        <>
            <div className="container topHeading">
                <h4>What <span className='weDo'>We Do</span> </h4>
            </div>
            <br />
            <div className='container mt-5'>
                <div className='container row webdevouterdiv'>
                    <div className="col-12 col-xl-6 weblanding ">

                        <h4>Web Development</h4>
                        <p>For companies of all sizes, our team of web developers has vast expertise developing unique websites and web apps.encompassing Node.js, Angular.js, React.js, HTML5, CSS3, JavaScript, PHP, Ruby on Rails, and more. You can also get website development assistance from our web professionals.
                        </p>

                    </div>
                    <div className='col-12 col-xl-6 webDevImg'>

                    </div>

                </div>
            </div>


            <div className='container mt-4'>
                <div className='row appdevouter'>
                    <div className='col-12 col-xl-6 appDevImg'>

                    </div>
                    <div className="col-12 col-xl-6 applanding ">

                        <h4>App Development</h4>
                        <p>
                            We provide full-service mobile app development so you can easily and quickly produce a high-caliber mobile application. For both the iOS and Android operating systems, our skilled development team can create unique mobile apps. secure, and easy to use.
                        </p>

                    </div>

                </div>
            </div>

            <div className='container mt-5'>
                <div className='row graphicOuter'>
                    <div className="col-12 col-xl-6 graphiclanding ">

                        <h4>GRAPHIC DESIGN</h4>
                        <p>
                            For companies of all sizes, our team of web developers has vast expertise developing unique websites and web apps.encompassing Node.js, Angular.js, React.js, HTML5, CSS3, JavaScript, PHP, Ruby on Rails, and more. You can also get website development assistance from our web professionals.

                        </p>
                    </div>
                    <div className='col-12 col-xl-6 graphicImg'>

                    </div>


                </div>
            </div>


            <div className='container mt-5'>
                <div className='row uiuxOuter'>
                    <div className='col-12 col-xl-6 uiuxImg'>

                    </div>
                    <div className="col-12 col-xl-6 uiuxlanding ">

                        <h4>GRAPHIC DESIGN</h4>
                        <p>
                            For companies of all sizes, our team of web developers has vast expertise developing unique websites and web apps.encompassing Node.js, Angular.js, React.js, HTML5, CSS3, JavaScript, PHP, Ruby on Rails, and more. You can also get website development assistance from our web professionals.

                        </p>
                    </div>


                </div>
            </div>

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
