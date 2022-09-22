import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getUserById } from "../../managers/UserManager"
import "./css/dashboard.css"

export const StaffDash = () => {
    const [cultUser, setCultUser] = useState({})
    const { userId } = useParams()

    useEffect(() => { getUserById(userId).then(userData => setCultUser(userData)) }, [userId])


    const firstName = cultUser?.user?.first_name
    const id = cultUser?.user?.id
    return <section className="dash-staff-section-container">
        <article className="dash-staff-outer-container">
            <p className="dash-staff-title1">
                Welcome {firstName}
            </p>
            <div className="dash-staff-inner-container">
                <div className="dash-staff-link-container">
                <div className="dash-staff-title2">Dashboard</div>
                    <div className="dash-staff-linkz">
                        <Link to={`/consultations/${userId}`} className="dash-staff-title3">Consultation Requests</Link>
                    </div>
                    <div className="dash-staff-linkz">
                        <Link to={`/contacts/${userId}`} className="dash-staff-title3">Contact Requests</Link>
                    </div>
                    <div className="dash-staff-linkz">
                        <Link to={`/datasets/${userId}`} className="dash-staff-title3">Data Sets</Link>
                    </div>
                </div>
            </div>
        </article>
    </section>
}