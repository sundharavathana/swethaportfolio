import { useEffect } from "react"
import Typed from "typed.js";
import "./styles/home.css";
import profile from "../assets/profile.jpeg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {Link} from "react-router-dom"
import "./contact.jsx" 

export function Home(){
    useEffect(()=>{
        const typed =new Typed(".text",{
            strings:[
                "frontend developer",
                "backend developer",
                "web developer",
                "python developer"
            ],
            typeSpeed:100,
            backSpeed:100,
            backDelay:1000,
            loop:true
       });
       return()=>{
       typed.destroy();
       };
    },[]);
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                {/* left con */}
                <div className="col-12 col-md-6">
                    <h1 className="name">SWETHA CT</h1>
                      <h2 className="para">
              I’m a <span className="text"></span> 
            </h2>
            
                    <h3 className="para">I’m a Python Full-Stack Developer skilled in building dynamic and user-focused web applications using Python, Django,React. I love creating scalable, efficient, and production-ready solutions from front-end to back-end.</h3>
                    <div className="btn-icon-group">
                  <a
              href="\swethacithabarm-resume.pdf"
              download="swetha_Resume.pdf" className="btn"
            >resume </a>
                    <Link to="/Contact" className="btn btn-1">connnect with me</Link>
                    


            <div className="social-icons">
              <a
                href="mailto:swetha.pythondevp@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/swetha-cithabaram-543a83296"
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/swethacithabaram"
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
              >
                <FaGithub />
              </a>
            </div>
            </div>

                </div>

                {/* right con */}
            <div className="col-12 col-md-6 text-center">
            <img
              src={profile}
              alt="Profile"
              className="profile-img"
            />
          </div>


            </div>
        </div>
        </>
    )
}