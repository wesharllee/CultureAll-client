import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserById, updateUser, updateUserTerms } from "../../../managers/UserManager"

export const GetData = () => {
    const { userId } = useParams()
    const [cultUser, setCultUser] = useState({})


    useEffect(() => {
        getUserById(userId).then(data => setCultUser(data))
    }, [userId])

    return <><div>stuff on a page</div>
        <button type="complete"
            onClick={() => {
                const userCopy = { ...cultUser }
                userCopy.terms_signed = true
                updateUserTerms(userCopy.id, userCopy).then(() => {
                    window.location.reload()
                })
            }}
            className="button is-link">I Agree
        </button>
    </>
}