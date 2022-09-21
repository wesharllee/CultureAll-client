import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./css/register.css"

export const Register = ({ setToken, setUserId }) => {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const username = useRef()
  const company_name = useRef()
  const phone_number = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const passwordDialog = useRef()
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        company_name: company_name.current.value,
        phone_number: phone_number.current.value,
        password: password.current.value,
      }

      registerUser(newUser)
        .then(res => {
          if ("token" in res) {
            localStorage.setItem('is_staff', res.is_staff)
            localStorage.setItem('is_active', res.is_active)
            setToken(res.token)
            setUserId(res.user_id)
            navigate(`home`)
          }
        })
    } else {
      passwordDialog.current.showModal()
    }
  }

  return (
    <section className="register-form-container">
      <form className="column is-two-thirds" onSubmit={handleRegister}>
        {/* <h1 className="register-title">Culture All</h1> */}
        <p className="subtitle">Create an account</p>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input className="input" type="text" ref={firstName} />
          </div>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input className="input" type="text" ref={lastName} />
          </div>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" ref={username} />
          </div>
        </div>

        <div className="field">
          <label className="label">Company Name</label>
          <div className="control">
            <input className="input" type="company_name" ref={company_name} />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" ref={email} />
          </div>
        </div>

        <div className="field">
          <label className="label">Phone Number</label>
          <div className="control">
            <input className="input" type="phone_number" ref={phone_number} />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="password" placeholder="Password" ref={password} />
              </p>
            </div>

            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="password" placeholder="Verify Password" ref={verifyPassword} />
              </p>
            </div>
          </div>
        </div>


        <div className="register-form-button-box">
          
            <button className="register-form-register-buttonz" type="submit">Submit</button>
          
            <button className="register-form-register-buttonz" onClick={() => {
                            navigate(`/login`)
                        }} type="submit">Cancel</button>
          
        </div>

      </form>
    </section>
  )
}
