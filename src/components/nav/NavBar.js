import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "./rare.jpg"

export const NavBar = ({ isStaff, token, setToken }) => {
  const navigate = useNavigate()
  const navbar = useRef()
  const hamburger = useRef()
  let userId = localStorage.getItem('user_id')

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle('is-active')
    navbar.current.classList.toggle('is-active')
  }

  return (
    <nav className="navbar is-success mb-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} height="3rem" alt="Logo" /> <h1 className="title is-4">Culture All</h1>
        </a>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={showMobileNavbar} ref={hamburger}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" ref={navbar}>
        <div className="navbar-start">
          {
            token
              ? <>    
                  {
                    isStaff
                    ?<>
                    <Link to="/users" className="navbar-item">users</Link>
                    <Link to={`/dashboard/${userId}`} className="navbar-item">dashboard</Link>
                    <Link to={`/consultations/${userId}`} className="navbar-item">consultations</Link>
                    <Link to={`/contacts/${userId}`} className="navbar-item">contacts</Link>
                    <Link to={`/datasets/${userId}`} className="navbar-item">data</Link>
                    </>
                    : <>
                    <Link to={`/dashboard/${userId}`} className="navbar-item">dashboard</Link>
                    <Link to={`/mydata/${userId}`} className="navbar-item">my data</Link>
                    <Link to={`/getdata/${userId}`} className="navbar-item">get data</Link>
                    <Link to={`/consultation/${userId}`} className="navbar-item">consultation</Link>
                    <Link to={"/home"} className="navbar-item">home</Link>
                    
                    </>
                  }     
              </>
              : <>
                  <Link to={"/home"} className="navbar-item">home</Link>
                  <Link to={"/us"} className="navbar-item">about us</Link>
                  <Link to={"/impact"} className="navbar-item">impact</Link>
                  <Link to={"/contactus"} className="navbar-item">contact us</Link>
                </>
          }
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                token
                  ? <>
                  <button className="button is-outlined" onClick={() => {
                    setToken('')
                    navigate('/home')
                  }}>Logout</button>
                  </>
                  :
                  <>
                    <Link to="/register" className="button is-link">Register</Link>
                    <Link to="/login" className="button is-outlined">Login</Link>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
