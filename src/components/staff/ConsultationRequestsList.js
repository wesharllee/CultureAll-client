import { useEffect, useState } from "react"
import { deleteConsultRequest, getAllConsultRequests, updateConsultComplete, updateConsultRequest } from "../../managers/ConsultationManager"
import "./css/consult.css"


export const ConsultList = () => {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        getAllConsultRequests().then(requestsData => setRequests(requestsData))
    }, [])

    return <section className="section">
            <div className="consult-list-title1">
                Consultation Requests:
            </div>
        <article className="consult-list-outer-container">
            <div className="consult-list-container">
                <div className="consult-list-title2-a">Need Confirmation:</div>
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
                        return <div className="consult-list-form-container-a">
                            <div className="consult-list-title3">
                                {fullName} with {company}
                            </div>
                            <div className="panel-block">
                                Requested Date: {date}
                            </div>
                            <div className="panel-block">
                                Requested Time: {time}
                            </div>
                            <div className="panel-block">
                                Phone: {phoneNumber}
                            </div>
                            <div className="panel-block">
                                Email: {email}
                            </div>
                            {request.in_person ?
                                <div className="panel-block">
                                    Address for Consultation: <br />{address}
                                </div>
                                :
                                <div className="panel-block">Requested Online Consultation</div>}
                            <div className="consult-list-button-box">
                                <button type="complete"
                                    onClick={() => {
                                        const copy = { ...request }
                                        copy.completed = true
                                        updateConsultComplete(copy.id, copy).then(() => {
                                            getAllConsultRequests().then(requestsData => setRequests(requestsData))
                                        })
                                    }}
                                    className="consult-list-complete-buttonz">Complete
                                </button>
                            </div>
                        </div>
                    }
                })}
            </div>
            <div className="consult-list-container">
                <div className="consult-list-title2-b">Archived:</div>
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
                        return <div className="consult-list-form-container-b">
                            <div className="consult-list-title3">
                                {fullName} with {company}
                            </div>
                            <div className="panel-block">
                                Requested Date: {date}
                            </div>
                            <div className="panel-block">
                                Requested Time: {time}
                            </div>
                            <div className="panel-block">
                                Phone: {phoneNumber}
                            </div>
                            <div className="panel-block">
                                Email: {email}
                            </div>
                            {request.in_person ?
                                <div className="panel-block">
                                    Address for Consultation: <br />{address}
                                </div>
                                :
                                <div className="panel-block">Requested Online Consultation</div>}
                            <div className="consult-list-button-box">
                                <button type="incomplete"
                                    onClick={() => {
                                        const copy = { ...request }
                                        copy.completed = false

                                        updateConsultComplete(copy.id, copy).then(() => {
                                            getAllConsultRequests().then(requestsData => setRequests(requestsData))
                                        })
                                    }}
                                    className="consult-list-unarchive-buttonz">Unarchive
                                </button>
                                <button type="delete"
                                    onClick={() => {
                                        deleteConsultRequest(request.id).then(() => {
                                            getAllConsultRequests().then(requestsData => setRequests(requestsData))
                                        })
                                    }}
                                    className="consult-list-delete-buttonz">Delete
                                </button>
                            </div>
                        </div>
                    }
                })}
            </div>
        </article>

    </section>
}