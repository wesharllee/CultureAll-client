import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getUserById } from "../../../managers/UserManager"

export const Confirmation = () => {
    const { userId } = useParams()
    const [cultUser, setCultUser] = useState({})
    const navigate = useNavigate()


    useEffect(() => {
        getUserById(userId).then(
            userData => setCultUser(userData)
        )
    }, [userId])

    return <section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                Thanks {cultUser?.user?.first_name}
            </p>

            <div className="panel-block">
                Get your {cultUser.company_name} data link here:
            </div>
            <div className="panel-block">
                <Link to={`/form/${userId}/generaldata/fKn32iGHJb9b33xm@rKztH3sP0t/map/`} className="impact-link">General Questionnaire</Link>
            </div>
            
        </article>
        <button type="submit"
            onClick={() => {
                
                    navigate(`/getdata/${userId}/confirmation`)
                
            }}
            className="button is-success">Checkout
        </button>
    </section>
}