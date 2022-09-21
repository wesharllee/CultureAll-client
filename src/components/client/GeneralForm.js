import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createAnswer } from "../../managers/AnswerManager"
import { getAllQuestions } from "../../managers/QuestionManager"
import { getUserById } from "../../managers/UserManager"
import "./css/generalForm.css"

export const GeneralForm = () => {
    const [questions, setQuestions] = useState([])
    const [cultUser, setCultUser] = useState({})
    const [isShown, setIsShown] = useState()
    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAllQuestions().then(data => setQuestions(data))
    }, [])


    useEffect(() => {
        getUserById(userId).then(
            userData => setCultUser(userData)
        )
    }, [userId])


    const handleChange = (questionId, evt) => {
        const newAnswer = {
            question: questionId,
            rating_value: evt.target.value,
            cult_user: cultUser.id
        }
        // setAnswer(newAnswer)
        createAnswer(newAnswer)
        //answers are in an array inside of questions array... 
        //I need to figure out how to add to the array and access the data to coincide with correct user/company
    }

    const handleShow = (question) => {
        question.isShown = true
        setIsShown(true)
    }

    const handleHide = (question) => {
        question.isShown = false
        setIsShown(false)
    }


    return <section className="general-form-outer-container">

        <article className="general-form-header">
            <div className="general-form-header-title">{cultUser.company_name}</div>
        </article>
        <article className="general-form-container-a">
            <div className="general-form-container-b">
                {questions.map((question) => {

                    return <>
                        <div className="general-form-container-c">


                            <div className="field">
                                <div className="general-form-question-box">Question {question.id} of 20</div>
                                <div className="general-form-question">
                                    {question.question_text}
                                </div>

                                <div className="general-form-select-box">
                                    <div className="select">
                                        <select name="rating_value"
                                            onChange={(evt) => handleChange(question.id, evt)}>
                                            <option value="">Select One</option>
                                            <option value="5">strongly agree</option>
                                            <option value="4">somewhat agree</option>
                                            <option value="3">neither agree nor disagree</option>
                                            <option value="2">somewhat disagree</option>
                                            <option value="1">strongly disagree</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>


                })}
                <div className="general-form-home-box">
                    <button type="home"
                        onClick={() => {
                            navigate(`/dashboard/${userId}`)
                        }}
                        className="general-form-home-buttonz">Home
                    </button>
                </div>
            </div>
        </article>

    </section>
}