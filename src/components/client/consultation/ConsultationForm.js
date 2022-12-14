import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { createConsultRequest } from "../../../managers/ConsultationManager"
import "../css/consult.css"




export const ConsultForm = () => {
    const [request, setRequest] = useState({})
    const navigate = useNavigate()

    const handleChange = (evt) => {
        const newRequest = { ...request }
        newRequest[evt.target.name] = evt.target.value
        setRequest(newRequest)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const requestData = { ...request }

        createConsultRequest(requestData).then((request) => {
            navigate(`/consultation/${request.id}/confirmation`)
        })
    }

    return (
        <section className="section">

                <article className="consult-background">
                    <div className="consult-form-container">
                        <div className="consult-title" >Request Consultation</div>

                        <form style={{ width: "100%" }}>
                            <div className="field">
                                <label htmlFor="date" className="label">Date: </label>
                                <div className="control">
                                    <input type="date" name="date" required className="input"
                                        value={request.date}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="time" className="label">Time: </label>
                                <div className="control">
                                    <input type="time" name="time" required className="input"
                                        value={request.time}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="in_person" className="label">How would you like to meet?</label>
                                <div className="control">
                                    <div className="select">
                                        <select name="in_person"
                                            value={request.in_person}
                                            onChange={handleChange}>
                                            <option value="">Select One</option>
                                            <option value="1">In Person</option>
                                            <option value="0">Online</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {request.in_person === "1"
                                ?
                                <div className="field">
                                    <label htmlFor="address" className="label">Address: </label>
                                    <div className="control">
                                        <input type="text" name="address" required className="input"
                                            placeholder="Business Address"
                                            value={request.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                :
                                ""
                            }

                            
                                <div className="consult-button-box">
                                    <button type="submit"
                                        onClick={handleSubmit}
                                        className="consult-buttonz">
                                        Request
                                    </button>
                                </div>
                            
                        </form>
                    </div>

                </article>

        </section>
    )
}