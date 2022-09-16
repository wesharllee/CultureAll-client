import { useState } from "react"
import { useNavigate } from "react-router"
import { createContactRequest } from "../../../managers/ContactManager"



export const ContactForm = () => {
    const [request, setRequest] = useState({})
    const navigate = useNavigate()


    const handleChange = (evt) => {
        const newRequest = { ...request }
        newRequest[evt.target.name] = evt.target.value
        setRequest(newRequest)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const requestData = {...request}

        createContactRequest(requestData).then(() => {navigate('/contactus/confirmation')})
    } 

    return (
        <section className="section">
            <article className="panel is-info">
                <h2 className="panel-heading">Contact Us</h2>
                <div className="panel-block">
                    <form style={{ width: "100%" }}>
                        <div className="field">
                            <label htmlFor="first_name" className="label">First Name: </label>
                            <div className="control">
                                <input type="text" name="first_name" required className="input"
                                    placeholder="First Name"
                                    value={request.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="last_name" className="label">Last Name: </label>
                            <div className="control">
                                <input type="text" name="last_name" required className="input"
                                    placeholder="Last Name"
                                    value={request.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="email" className="label">Email: </label>
                            <div className="control">
                                <input type="text" name="email" required className="input"
                                    placeholder="person@address.com"
                                    value={request.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="phone_number" className="label">Phone Number: </label>
                            <div className="control">
                                <input type="text" name="phone_number" required className="input"
                                    placeholder="xxx-xxx-xxxx"
                                    value={request.phone_number}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="reason" className="label">How Can We Help?: </label>
                            <div className="control">
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        name="reason"
                                        value={request.reason}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="contact_by_phone" className="label">Would you like us to contact you via phone call or email?: </label>
                            <div className="control">
                                <div className="select">
                                    <select name="contact_by_phone"
                                        value={request.contact_by_phone}
                                        onChange={handleChange}>
                                        <option value="">Select Preference</option>
                                        <option value="1">Phone</option>
                                        <option value="0">Email</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type="submit"
                                    onClick={handleSubmit}
                                    className="button is-link">
                                    Reach Out
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    )
}