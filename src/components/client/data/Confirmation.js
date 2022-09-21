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
        <div className="data-section-container">


            <article className="checkout-outer-container">
                <p className="data-title2">
                    Thanks {cultUser?.user?.first_name}
                </p>
                <div className="confirm-inner-container">
                    <div className="data-title3">
                        Get your {cultUser.company_name} data link here:
                    </div>
                    <div className="data-linkz">
                        <Link to={`/form/${userId}/generaldata/fKn32iGHJb9b33xm@rKztH3sP0t/map/`} className="impact-link">{cultUser.company_name}'s General Questionnaire</Link>
                    </div>
                    <div className="panel-block">make sure to save your link!</div>
                </div>

                <button type="submit"
                    onClick={() => {

                        navigate(`/dashboard/${userId}`)

                    }}
                    className="data-agree-buttonz">Dashboard
                </button>
            </article>
        </div>
    </section>
}