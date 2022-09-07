import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"



export const CultureAll = () => {
  const [token, setTokenState] = useState(localStorage.getItem('auth_token'))
  const [userId, setUserIdState] = useState(localStorage.getItem('user_id'))

  const setToken = (newToken) => {
    localStorage.setItem('auth_token', newToken)
    setTokenState(newToken)
  }

  const setUserId = (userId) => {
    localStorage.setItem('user_id', userId)
    setUserIdState(userId)
  }



  return <>
    <NavBar token={token} setToken={setToken} isStaff={localStorage.getItem("is_staff")==="true"} isActive={localStorage.getItem("is_active")==="true"} />
    <ApplicationViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} isStaff={localStorage.getItem("is_staff")==="true"} isActive={localStorage.getItem("is_active")==="true"}/>
  </>
}
