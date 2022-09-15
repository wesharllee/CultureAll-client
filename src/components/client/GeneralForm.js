import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllQuestions, getQuestionById } from "../../managers/QuestionManager"
import { getAllUsers, getUserById } from "../../managers/UserManager"
import { Users } from "../staff/users/UserList"

export const GeneralForm = () => {
    const [questions, setQuestions] = useState([])
    const [cultUser, setCultUser] = useState({})
    const { userId } = useParams()

    useEffect(() => {
        getAllQuestions().then(data => setQuestions(data))
    }, [])


    useEffect(() => {
        getUserById(userId).then(
            userData => setCultUser(userData)
        )
    }, [userId])

    const handleChange = (evt) => {
        questionWithNewAnswer = {...question}
        newAnswer[evt.target.name] = evt.target.value

    }

    return <section className="section">
        <article className="panel is-info">
            <h1>{cultUser.company_name}</h1>
            {questions.map((question) => {

                return <>
                    <p className="panel-heading">
                        Question {question.id} of 20
                    </p>
                    <div className="field">
                        <label htmlFor="rating_value" className="label">Please Rate 1 to 5</label>
                        <div className="panel-block">
                            {question.question_text}
                        </div>
                        {/* {question.answer} */}
                        <div className="control">
                            <div className="select">
                                <select name="rating_value"
                                    value={question.answers.rating_value}
                                    onChange={handleChange}>
                                    <option value="0">Select One</option>
                                    <option value="5">completely agree</option>
                                    <option value="4">agree Somewhat</option>
                                    <option value="3">neither agree nor disagree</option>
                                    <option value="2">disagree somewhat</option>
                                    <option value="1">completely disagree</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </>


            })}
            <div className="panel-block">

            </div>
            <div className="panel-block">

            </div>
        </article>
    </section>
}