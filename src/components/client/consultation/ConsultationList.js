import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllConsultRequests, updateConsultComplete, updateConsultRequest } from "../../managers/ConsultationManager"


export const MyConsultRequestList = () => {

    const [requests, setRequests] = useState([])
    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAllConsultRequests().then(requestsData => setRequests(requestsData))
    }, [])

    return <section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                Consultation Requests:
            </p>

            <div className="panel-block">Incomplete Requests:</div>
            {requests.map((request) => {
                let fullName = request.cult_user.user.first_name + " " + request.cult_user.user.last_name
                let date = request.readable_date
                let time = request.readable_time
                let address = request.address
                let inPerson = request.in_person ? `in person` : "online"
                let company = request.cult_user.company_name
                let email = request.cult_user.user.email
                let phoneNumber = request.cult_user.phone_number

                if (request.completed === false) {
                    return <>
                        <div className="panel-block">
                            {fullName} with {company} requested a consultation on {date} at {time} {inPerson}. {request.id}
                        </div>
                        <div className="panel-block">
                            Phone: {phoneNumber}
                        </div>
                        <div className="panel-block">
                            Email: {email}
                        </div>
                        {request.in_person ?
                            <div className="panel-block">
                                Address: {address}
                            </div>
                            :
                            ""}
                        <button type="complete"
                            onClick={() => {
                                const copy = { ...request }
                                copy.completed = true
                                updateConsultComplete(copy.id, copy).then(() => {
                                    window.location.reload()
                                })
                            }}
                            className="button is-link">Complete
                        </button>
                    </>
                }
            })}
            <div>
                ----------------------------------------------------
            </div>
            <div className="panel-block">Completed Requests:</div>
            {requests.map((request) => {
                let fullName = request.cult_user.user.first_name + " " + request.cult_user.user.last_name
                let date = request.readable_date
                let time = request.readable_time
                let address = request.address
                let inPerson = request.in_person ? `on location` : "online"
                let company = request.cult_user.company_name
                let email = request.cult_user.user.email
                let phoneNumber = request.cult_user.phone_number

                if (request.completed === true) {
                    return <>
                        <div className="panel-block">
                            Set Calendar for {date} at {time}. Company: {company}. Contact: {fullName}. Consultation will be {inPerson}.
                        </div>
                        <div className="panel-block">
                            Phone: {phoneNumber}
                        </div>
                        <div className="panel-block">
                            Email: {email}
                        </div>
                        {request.in_person ?
                            <div className="panel-block">
                                Address: {address}
                            </div>
                            :
                            ""}
                        <button type="complete"
                            onClick={() => {
                                const copy = { ...request }
                                copy.completed = false
                                updateConsultComplete(copy.id, copy).then(() => {
                                    window.location.reload()
                                })
                            }}
                            className="button is-link">Incomplete
                        </button>
                    </>
                }
            })}
        </article>
        <button type="submit"
            onClick={() => { navigate(`/dashboard/${userId}`) }}
            className="button is-success">
            Dashboard
        </button>
    </section>


}