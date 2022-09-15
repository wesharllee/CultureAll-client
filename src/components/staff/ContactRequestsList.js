import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteContactRequest, getAllContactRequests, updateContactRequest } from "../../managers/ContactManager"


export const ContactList = () => {
    const [requests, setRequests] = useState([])
    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAllContactRequests().then(requestsData => setRequests(requestsData))
    }, [])

    return <section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                Contact Requests:
            </p>
            <div className="panel-block">Incomplete Requests:</div>
            {requests.map((request) => {

                let fullName = request.first_name + " " + request.last_name
                let email = request.email
                let phoneNumber = request.phone_number

                if (request.completed === false) {
                    let contactByPhone = request.contact_by_phone ? `call them at ${phoneNumber}` : `email them at ${email}`
                    return <>
                        <div className="panel-block">
                            {fullName} would like you to {contactByPhone}
                        </div>
                        <button type="complete"
                            onClick={() => {
                                const copy = { ...request }
                                copy.completed = true
                                updateContactRequest(copy.id, copy).then(() => {
                                    getAllContactRequests().then(requestsData => setRequests(requestsData))
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
            <div className="panel-block">Complete Requests:</div>
            {requests.map((request) => {

                let fullName = request.first_name + " " + request.last_name
                let email = request.email
                let phoneNumber = request.phone_number

                if (request.completed === true) {
                    let contactByPhone = request.contact_by_phone ? `phone at ${phoneNumber}` : `email at ${email}`
                    return <>

                        <div className="panel-block">
                            {fullName} has been contacted by {contactByPhone}.
                        </div>
                        <button type="incomplete"
                            onClick={() => {
                                const copy = { ...request }
                                copy.completed = false
                                updateContactRequest(copy.id, copy).then(() => {
                                    getAllContactRequests().then(requestsData => setRequests(requestsData))
                                })
                            }}
                            className="button is-link">Incomplete
                        </button>
                        <button type="delete"
                            onClick={() => {
                                deleteContactRequest(request.id).then(() => {
                                    getAllContactRequests().then(requestsData => setRequests(requestsData))
                                })
                            }}
                            className="button is-link">Delete
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