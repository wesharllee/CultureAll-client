import { useEffect, useState } from "react"
import { getAllConsultRequests } from "../../managers/ConsultationManager"


export const ConsultList = () => {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        getAllConsultRequests().then(requestsData => setRequests(requestsData))
    }, [])


    
    return <section className="section">
                <article className="panel is-info">
                    <p className="panel-heading">
                        Consultation Requests:  
                    </p>    

                    {requests.map((request) => {
                        let fullName = request.cult_user.user.first_name + " " + request.cult_user.user.last_name
                        let date = request.readable_date
                        let time = request.readable_time
                        let address = request.address
                        let inPerson = request.in_person ? `at ${address}` : "online"
                        let company = request.cult_user.company_name
                        let email = request.cult_user.user.email
                        let phoneNumber = request.cult_user.phone_number

                        return <>
                        <div className="panel-block">
                            {fullName} with {company} requested a consultation on {date} at {time} {inPerson}.
                        </div>
                        <div className="panel-block">
                            Phone:{phoneNumber}
                        </div>
                        <div className="panel-block">
                            Email:{email}

                        </div>
                        </>
                    })}
                </article>        
    </section>
}