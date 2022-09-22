import { useEffect, useState } from "react"
import { deleteContactRequest, getAllContactRequests, updateContactRequest } from "../../managers/ContactManager"
import "./css/contact.css"

export const ContactList = () => {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        getAllContactRequests().then(requestsData => setRequests(requestsData))
    }, [])

    return <section className="section">
        <p className="contact-list-title1">
            Contact Requests:
        </p>
        <article className="contact-list-outer-container">
            <div className="contact-list-container">
                <div className="contact-list-title2-a">Incomplete Requests:</div>
                {requests.map((request) => {

                    let fullName = request.first_name + " " + request.last_name
                    let email = request.email
                    let phoneNumber = request.phone_number
                    let reason = request.reason

                    if (request.completed === false) {
                        let contactByPhone = request.contact_by_phone ? `call them.` : `email them.`
                        return <div className="contact-list-form-container-a">
                            <div className="contact-list-title3">
                                {fullName} would like you to {contactByPhone}
                            </div>
                            <div className="panel-block">Phone: {phoneNumber}</div>
                            <div className="panel-block">Email: {email}</div>
                            <div className="panel-block">Regarding: {reason}</div>
                            <div className="contact-list-button-box">
                                <button type="complete"
                                    onClick={() => {
                                        const copy = { ...request }
                                        copy.completed = true
                                        updateContactRequest(copy.id, copy).then(() => {
                                            getAllContactRequests().then(requestsData => setRequests(requestsData))
                                        })
                                    }}
                                    className="contact-list-complete-buttonz">Complete
                                </button>
                            </div>
                        </div>
                    }
                })}
            </div>
            <div className="contact-list-container">
                <div className="contact-list-title2-b">Complete Requests:</div>
                {requests.map((request) => {

                    let fullName = request.first_name + " " + request.last_name
                    let email = request.email
                    let phoneNumber = request.phone_number
                    let reason = request.reason
                    if (request.completed === true) {
                        let contactByPhone = request.contact_by_phone ? `called.` : `emailed.`
                        return <div className="contact-list-form-container-b">

                            <div className="contact-list-title3">
                                {fullName} has been {contactByPhone}
                            </div>
                            <div className="panel-block">Phone: {phoneNumber}</div>
                            <div className="panel-block">Email: {email}</div>
                            <div className="panel-block">Regarding: {reason}</div>
                            <div className="contact-list-button-box">
                                <button type="incomplete"
                                    onClick={() => {
                                        const copy = { ...request }
                                        copy.completed = false
                                        updateContactRequest(copy.id, copy).then(() => {
                                            getAllContactRequests().then(requestsData => setRequests(requestsData))
                                        })
                                    }}
                                    className="contact-list-unarchive-buttonz">Unarchive
                                </button>
                                <button type="delete"
                                    onClick={() => {
                                        deleteContactRequest(request.id).then(() => {
                                            getAllContactRequests().then(requestsData => setRequests(requestsData))
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