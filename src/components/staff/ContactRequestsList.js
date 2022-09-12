import { useEffect, useState } from "react"
import { getAllContactRequests } from "../../managers/ContactManager"


export const ContactList = () => {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        getAllContactRequests().then(requestsData => setRequests(requestsData))
    }, [])


    
    return <section className="section">
                <article className="panel is-info">
                    <p className="panel-heading">
                        Contact Requests:  
                    </p>    

                    {requests.map((request) => {
                        let fullName = request.first_name + " " + request.last_name
                        let email = request.email
                        let phoneNumber = request.phone_number
                        let contactByPhone = request.contact_by_phone ? `call them at ${phoneNumber}` : `email them at ${email}`

                        return <div className="panel-block">
                                {fullName} would like you to {contactByPhone}
                            </div>
                    })}
                </article>        
    </section>
}