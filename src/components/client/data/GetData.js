import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserById, updateUser, updateUserTerms } from "../../../managers/UserManager"

export const GetData = () => {
    const { userId } = useParams()
    const [cultUser, setCultUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getUserById(userId).then(data => setCultUser(data))
    }, [userId])

    return <section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                Welcome
            </p>

            <div className="panel-block">
                I will give you my first born
            </div>

            <button type="complete"
                onClick={(evt) => {
                    evt.preventDefault()
                    const userCopy = { ...cultUser }
                    userCopy.terms_signed = true
                    setCultUser(userCopy)
                    updateUserTerms(userCopy.id, userCopy)
                }}
                className="button is-link">I Agree
            </button>
        </article>
        <button type="submit"
            onClick={() => {
                if (cultUser.terms_signed === true) {
                    navigate(`/getdata/${userId}/checkout`)
                }
                else {
                    window.alert("Please Agree to Terms of Service")
                }
            }}
            className="button is-success">Checkout
        </button>
    </section>

}