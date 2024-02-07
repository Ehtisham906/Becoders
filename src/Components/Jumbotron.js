import React from 'react'
import "../Styles/Jumbotron.css"
import jumbotronImg from '../images/undraw_visionary_technology_re_jfp7 1.png'
import personImage from '../images/personImgUsingComputer.jpg'
import webDev from '../images/webdevelopment.svg'
import appDev from '../images/appdevelopment.svg'
import graphicDesign from '../images/graphicDesign.svg'
import uiuxDesign from '../images/uiuxdesign.svg'
import '../Styles/Services.css'
// import React from 'react';
import '../Styles/Carousel.css';
import businessImg from '../images/bussinessPlaning.svg';
import analysis from '../images/analysisDocumentation.svg'
import designandprototyping from '../images/designandprototyping.svg'
import implementationandCoding from '../images/implementationadncoding.svg'
import qualityassuranceandtestiing from '../images/qualityassuarnceandtesting.svg'
import deploymentandtraining from '../images/deploymentandtraining.svg'
import WebContentandSEO from '../images/WebContentandSEO.svg'
import maintenanceandSupport from '../images/maintanceandsupport.svg'
import '../Styles/Contact.css'

import logo from '../images/logo_becoders.png'
import '../Styles/Ending.css'



export default function Jumbotron(props) {
    const readMoreWebDev = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("readMoreBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read More";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read Less";
            moreText.style.display = "inline";
            moreText.style.transition = "3s"
        }
    }
    const readMoreAppDev = () => {
        var dots = document.getElementById("dotsAppDev");
        var moreText = document.getElementById("moreAppDev");
        var btnText = document.getElementById("readMoreBtnAppDev");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read More";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read Less";
            moreText.style.display = "inline";
        }
    }
    const readMoreGraphicDesign = () => {
        let dots = document.getElementById("dotsGraphicDesign");
        let moreText = document.getElementById("moreGraphicDesign");
        let btnText = document.getElementById("readMoreBtnGraphicDesign");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read More";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read Less";
            moreText.style.display = "inline";
        }
    }
    const readMoreUIUXDesign = () => {
        let dots = document.getElementById("dotsUIUXDesign");
        let moreText = document.getElementById("moreUIUXDesign");
        let btnText = document.getElementById("readMoreBtnUIUXDesign");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read More";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read Less";
            moreText.style.display = "inline";
        }
    }
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
                            <button className='btn' id='jumbotonregisterBtn' style={{marginTop:"20px"}} >Register Now</button>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-sm-4 col-12 jumbotronImg">
                            <img src={jumbotronImg} alt="" width={"100%"} height={"100%"} />

                        </div>
                    </div>
                </div>


                <div className='container'  >
                    <div className="row ">
                        <div className="col-lg-7 col-xl-6 col-md-6 col-sm-12 col-12 p-5">
                            <span style={{ color: props.mode === 'light' ? '#165f9b' : '#165f9b', fontSize: "24px" }}>
                                <strong>
                                    Our Identity
                                </strong>
                            </span>
                            <br />
                            <span style={{ color: props.mode === 'light' ? '#f86400' : '#f86400', fontSize: "40px" }}>
                                <strong>
                                    ENTHUSIASTIC, TECHNICAL
                                    PROFESSIONAL
                                </strong>
                            </span>
                            <br />
                            <span style={{ color: props.mode === 'light' ? '#165f9b' : '#165f9b', fontSize: "18px" }}>
                                Technology specialists, UI designers, UX engineers, programmers,
                                DevOps experts, business analysts, software architects, QA engineers,
                                and project managers are among the highly skilled individuals that
                                make up our team. Our combined knowledge enables us to provide
                                clients in every industry long-term solutions that guarantee their
                                success in a rapidly changing technical environment. Select BECODERS
                                Technologies as your reliable associate.

                            </span>
                        </div>
                        <div className="col-lg-5 col-xl-6 col-md-6 col-sm-12 col-12 ourIdentityImg">
                            <div className="dots1">

                                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="82.5" r="2.5" fill="#F86400" />
                                </svg>

                            </div>
                            <img src={personImage} alt="" width={"100%"} height={"547px"} />
                            <div className='dots'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="2.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="12.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="22.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="32.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="42.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="52.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="62.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="72.5" r="2.5" fill="#F86400" />
                                    <circle cx="2.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="12.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="22.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="32.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="42.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="52.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="62.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="72.5" cy="82.5" r="2.5" fill="#F86400" />
                                    <circle cx="82.5" cy="82.5" r="2.5" fill="#F86400" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container ' style={{ marginTop: "100px" }}>
                <h5 style={{ color: "#165f9b", fontSize: "24px" }}>
                    <strong>
                        OUR SERVICES
                    </strong>
                </h5>
                <div className="row justify-content-between">
                    <div className='col-lg-2 col-6 text-center p-2' style={{ height: "fit-content" }}>
                        <img src={webDev} alt="" width={"100%"} />
                        <h6 style={{ color: "#f86400" }} className='mt-2'><strong>WEB DEVELOPMENT</strong></h6>
                        <p className='text-start' style={{ color: props.mode === "dark" ? "white" : "black" }}>For companies of all sizes, our team of web developers has vast expertise developing unique <span id='dots'>...</span>
                            <span id='more'>
                                websites and web apps.encompassing Node.js, Angular.js, React.js, HTML5, CSS3, JavaScript, PHP, Ruby on Rails, and more. You can also get website development assistance from our web professionals.
                            </span>
                        </p>

                        <button className='btn  btn-sm text-start' style={{ backgroundColor: "#165f9b", color: "white" }} id='readMoreBtn' onClick={readMoreWebDev}>Read More</button>

                    </div>
                    <div className='col-lg-2 col-6 text-center p-2' style={{ height: "fit-content" }}>
                        <img src={appDev} alt="" width={"100%"} />
                        <h6 style={{ color: "#f86400" }}><strong>APP DEVELOPMENT</strong></h6>
                        <p className='text-start' style={{ color: props.mode === "dark" ? "white" : "black" }}>We provide full-service mobile app development so you can easily and quickly <span id='dotsAppDev'>...</span>
                            <span id="moreAppDev">
                                produce a high-caliber mobile application. For both the iOS and Android operating systems, our skilled development team can create unique mobile apps. secure, and easy to use.
                            </span>
                        </p>
                        <button className='btn  btn-sm text-start' style={{ backgroundColor: "#165f9b", color: "white" }} id='readMoreBtnAppDev' onClick={readMoreAppDev}>Read More</button>
                    </div>
                    <div className='col-lg-2 col-6 p-2  text-center' style={{ height: "fit-content" }}>
                        <img src={graphicDesign} alt="" width={"100%"} />
                        <h6 style={{ color: "#f86400" }}><strong>GRAPHIC DESIGN</strong></h6>
                        <p className='text-start' style={{ color: props.mode === "dark" ? "white" : "black" }}>We provide a variety of graphic design services, such as print, web, and logo
                            <span id='dotsGraphicDesign'> ...</span>
                            <span id='moreGraphicDesign'> design. Our talented team of designers can produce eye-catching designs that are intended to stand out from the competition and have an effect. We can work within any budget and guarantee the finest quality.
                            </span>
                        </p>
                        <button className='btn  btn-sm text-start' style={{ backgroundColor: "#165f9b", color: "white" }} id='readMoreBtnGraphicDesign' onClick={readMoreGraphicDesign}>Read More</button>

                    </div>
                    <div className='col-lg-2 col-6 p-2 text-center' style={{ height: "fit-content" }}>
                        <img src={uiuxDesign} alt="" width={"100%"} />
                        <h6 style={{ color: "#f86400" }}><strong>UI UX DESIGN</strong></h6>
                        <p className='text-start' style={{ color: props.mode === "dark" ? "white" : "black" }}>Our company provides UI/UX design services to assist businesses in
                            <span id='dotsUIUXDesign'> ...</span>
                            <span id='moreUIUXDesign'>
                                creating user-friendly interfaces for their goods and services. Our experts are well-versed in the principles of user-centered design and have a thorough understanding of how users interact with digital products and services.
                            </span>
                        </p>
                        <button className='btn  btn-sm text-start' style={{ backgroundColor: "#165f9b", color: "white" }} id='readMoreBtnUIUXDesign' onClick={readMoreUIUXDesign}>Read More</button>
                    </div>
                </div>
            </div>
            {/* Carousel */}
            <div className='container-fluid carouselOuter mt-5 p-5 '>

                <div className='container carouselContent'>
                    <h5 className='text-light'>
                        <strong>
                            Our Methodology for Developing Software
                        </strong>
                        <p className='text-light' style={{ fontSize: "18px" }}>
                            A peek into our meticulous approach to developing unique applications. We turn concepts into outcomes, from conception to coding.
                        </p>
                    </h5>
                </div>

                <div className='container carouselOuter mt-5'>
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active ">
                                <div className='container firstCrouselItem mb-4'>
                                    <div className="row">

                                        <div className="col-12 text-center">
                                            <h5 className='text-light'>Planning and Strategy For Projects</h5>
                                            <p className='text-light'>Defining Road Map, Assigning Roles & Responsibilities,
                                                Environment Setup.</p>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <img src={businessImg} className="" height={"300px"} width={"420px"} alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container secondCrouselItem mb-4'>
                                    <div className="row">

                                        <div className="col-12 text-center">
                                            <h5 className='text-light'>Analysis And Documentation</h5>
                                            <p className='text-light'>Gathering requirements, Generating backlog, Preparing
                                                architecture & process modeling.</p>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <img src={analysis} className="" height={"300px"} width={"420px"} alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container firstCrouselItem mb-4'>
                                    <div className="row">

                                        <div className="col-12 text-center">
                                            <h5 className='text-light'>Design and Prototyping</h5>
                                            <p className='text-light'>Creating User Flows, Low Fidelity Design, High Fidelity Prototypes</p>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <img src={designandprototyping} className="" height={"300px"} width={"420px"} alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container firstCrouselItem mb-4'>
                                    <div className="row">

                                        <div className="col-12 text-center">
                                            <h5 className='text-light'>Implementation and Coding</h5>
                                            <p className='text-light'>Front-End Development, Back-End Development, API & Database Connection</p>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <img src={implementationandCoding} className="" height={"300px"} width={"420px"} alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container firstCrouselItem mb-4'>
                                    <div className="row">

                                        <div className="col-12 text-center">
                                            <h5 className='text-light'>Quality Assuarnce and Testing</h5>
                                            <p className='text-light'>Creating a test plan & strategy manual testing, Automation test.</p>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <img src={qualityassuranceandtestiing} className="" height={"300px"} width={"420px"} alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container firstCrouselItem mb-4'>
                                    <div className="row">

                                        <div className="col-12 text-center">
                                            <h5 className='text-light'>Deployment and Training</h5>
                                            <p className='text-light'>Hosting & Going Live, Crafting User Manuals, Training Session.</p>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <img src={deploymentandtraining} className="" height={"300px"} width={"420px"} alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container firstCrouselItem mb-4'>
                                    <div className="row">

                                        <div className="col-12 text-center">
                                            <h5 className='text-light'>Web Content and SEO</h5>
                                            <p className='text-light'>Optimized Web Pages with technical an on page SEO.</p>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <img src={WebContentandSEO} className="" height={"300px"} width={"420px"} alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container firstCrouselItem mb-4'>
                                    <div className="row">

                                        <div className="col-12 text-center">
                                            <h5 className='text-light'>Maintenance and Support</h5>
                                            <p className='text-light'>Technical & User Support, Upgrading & Enhancement, Bug Fixing.</p>
                                        </div>
                                        <div className='col-12 text-center'>
                                            <img src={maintenanceandSupport} className="" height={"300px"} width={"420px"} alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
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
