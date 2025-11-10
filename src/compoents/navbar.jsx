import { About } from "./about"
import { Contact } from "./contact"
import { Education } from "./education"
import { Home } from "./home"
import { Skills } from "./skills"
import { Projects } from "./projects"
import "./styles/navbar.css"
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
export function Navbar(){
    return(
        <><BrowserRouter>
         <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
    
          <h1>portfolio</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " href="#" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/education' className="nav-link" href="#">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/skills' className="nav-link" href="#">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/project' className="nav-link" href="#">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link" href="#">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/about" element={<About />}></Route>
           <Route path="/skills" element={<Skills />}></Route>
           <Route path="/education" element={<Education />}></Route>
           <Route path="/project" element={<Projects />}></Route>
           <Route path="/contact" element={<Contact />}></Route>

      </Routes>
      </BrowserRouter>
        </>
    )
}