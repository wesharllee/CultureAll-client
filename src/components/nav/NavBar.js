import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllUsers } from "../../managers/UserManager"
import Logo from "./cult.jpg"
import "./nav.css"

export const NavBar = ({ isStaff, token, setToken }) => {
  const navigate = useNavigate()
  const navbar = useRef()
  const hamburger = useRef()
  const [cultUsers, setCultUsers] = useState([])
  const [cultUser, setCultUser] = useState({})

  useEffect(() => {
    getAllUsers().then(usersData => setCultUsers(usersData))
  }, [])

  
  let userId = parseInt(localStorage.getItem('user_id'))

  const matchUsers = (userId, cultUsers) => {
    for(let cultUser of cultUsers) {
      if (cultUser.user.id === userId) {
        return cultUser
      }
    }
  }
  
  useEffect(() => {
    if(cultUsers.length){ 
      setCultUser(matchUsers(userId, cultUsers))
    }
  },[cultUsers]) 
  

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle('is-active')
    navbar.current.classList.toggle('is-active')
  }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
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
                    <Link to={`/dashboard/${cultUser.id}`} className="navbar-item">dashboard</Link>
                    <Link to={`/consultations/${cultUser.id}`} className="navbar-item">consultations</Link>
                    <Link to={`/contacts/${cultUser.id}`} className="navbar-item">contacts</Link>
                    <Link to={`/datasets/${cultUser.id}`} className="navbar-item">data</Link>
                    </>
                    : <>
                    <Link to={`/dashboard/${cultUser.id}`} className="navbar-item">dashboard</Link>
                    <Link to={`/mydata/${cultUser.id}`} className="navbar-item">my data</Link>
                    <Link to={`/getdata/${cultUser.id}`} className="navbar-item">get data</Link>
                    <Link to={`/consultation/${cultUser.id}`} className="navbar-item">consultation</Link>
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
                  <button className="nav-logout-buttonz" onClick={() => {
                    setToken('')
                    navigate('/home')
                  }}>Logout</button>
                  </>
                  :
                  <>
                    <Link to="/register" className="nav-register-buttonz">Register</Link>
                    <Link to="/login" className="nav-login-buttonz">Login</Link>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
