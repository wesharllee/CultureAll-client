import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createAnswer, getAllAnswers } from "../../managers/AnswerManager"
import { getAllQuestions, getQuestionById } from "../../managers/QuestionManager"
import { getAllUsers, getUserById } from "../../managers/UserManager"
import { Users } from "../staff/users/UserList"

export const GeneralForm = () => {
    const [questions, setQuestions] = useState([])
    const [cultUser, setCultUser] = useState({})
    const [isShown, setIsShown] = useState()
    // const [answers, setAnswers] = useState({})
    // const [answer, setAnswer] = useState({})
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

    // useEffect(() => {
    //     getAllAnswers().then(data => setAnswers(data))
    // }, [])

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

                        <div className="control">
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

                </>


            })}
            <div className="panel-block">

            </div>
            <div className="panel-block">

            </div>
            {/* <div className="field">
                <div className="control">
                    <button type="submit"
                        onClick={navigate("/home")}
                        className="button is-success">
                        Send
                    </button>
                </div>
            </div> */}
            <button type="home"
                onClick={() => {
                    navigate(`/dashboard/${userId}`)
                }}
                className="button is-success">Home
            </button>
        </article>
    </section >
}