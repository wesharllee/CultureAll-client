import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getConsultRequestById, updateConsultRequest } from "../../../managers/ConsultationManager"

export const ConsultEdit = () => {

    const [request, setRequest] = useState({})
    const { requestId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getConsultRequestById(requestId).then(requestData => {
            setRequest(requestData)
        })
    }, [requestId])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        
        let requestData = {
            date: request.date,
            time: request.time,
            in_person: request.in_person,
            address: request.address
        }
        updateConsultRequest(requestId, requestData).then((request) => {
            navigate(`/consultationrequests/${requestId}`)
        })
    }

    const handleChange = (evt) => {
        const requestCopy = {...request}
        requestCopy[evt?.target?.name] = evt.target.value
        setRequest(requestCopy)
    }

    return (
        <section className="section">
            <article className="panel is-info">
                <h2 className="panel-heading">Edit Your Request</h2>
                <div className="panel-block">
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
                                        onChange={handleChange}
                                        >
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

                        <div className="field">
                            <div className="control">
                                <button type="submit"
                                    onClick={handleSubmit}
                                    className="button is-link">
                                    Submit 
                                </button>
                                <button type="cancel"
                                    onClick={() => {navigate(`/consultation/${requestId}/confirmation`)}}
                                    className="button is-link">
                                    Cancel 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    )


}