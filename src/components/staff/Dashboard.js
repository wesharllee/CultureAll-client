import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getUserById } from "../../managers/UserManager"

export const StaffDash = () => {
    const [cultUser, setCultUser] = useState({})
    const { userId } = useParams()

    useEffect(()=> {getUserById(userId).then(userData => setCultUser(userData))}, [userId])


    const firstName = cultUser?.user?.first_name
    const id = cultUser?.user?.id
    return <section className="section">
                <article className="panel is-info">
                    <p className="panel-heading">
                        Welcome {firstName}   
                    </p>    

                    <div className="panel-block">
                        <Link to="/consultations" className="impact-link">Consultation Requests</Link>
                    </div>
                    <div className="panel-block">
                        <Link to="/contacts" className="impact-link">Contact Requests</Link>
                    </div>
                    <div className="panel-block">
                        <Link to={`/datasets`} className="impact-link">Data Sets</Link>
                    </div>
                </article>        
    </section>
}