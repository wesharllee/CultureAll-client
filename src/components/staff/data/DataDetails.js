import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserById } from "../../../managers/UserManager"
export const DataDetails = () => {

    const { userId } = useParams()
    const [cultUser, setCultUser] = useState({})

    const navigate = useNavigate()


    useEffect(() => {
        getUserById(userId).then(data => setCultUser(data))
    }, [userId])

    //create function to get average
    const avgFunc = (value, array) => {
        let avg = value / array.length
        return avg
    }
    console.log(cultUser)
    //create function to get average of all of a users questions answers by answer type
    const getQuestionTypeAverages = (questionType) => {
        //create blank array for avg answer for each question inside question types
        let avgAnswerArray = []
        //create variable for questions
        let questions = questionType.questions
        //iterate to answer 
        questions.map((question) => {
            //create variable for answers
            let answers = question.answers
            //create variable for sum of answer.rating_value
            let answerRatingValue = 0
            //iterate to answer
            for (const answer of answers) {
                //add to sum
                answerRatingValue += answer.rating_value
            }
            // create variable for avgAnswer object
            let avgAnswer = 0
            //use function to get the average of the answer rating values
            avgAnswer += avgFunc(answerRatingValue, answers)
            //push avgAnswer to avgAnswerArray
            avgAnswerArray.push(avgAnswer)
        })
        //create a variable for the sum of averages
        let questionTypeRatingValue = 0
        //iterate to each avgAnswerObj in avgAnswerArray
        for (const avgAnswerObj of avgAnswerArray) {
            questionTypeRatingValue += avgAnswerObj
        }
        //create variable for average question type value
        let avgQuestionTypeValue = 0
        //use function to get the average of the question rating values
        avgQuestionTypeValue += avgFunc(questionTypeRatingValue, avgAnswerArray)
        //return number
        return avgQuestionTypeValue
    }

    const getQuestionAnswerAverages = (question) => {
        //create variable for answers
        let answers = question.answers
        //create variable for sum of answer.rating_value
        let answerRatingValue = 0
        //iterate to answer
        for (const answer of answers) {
            //add to sum
            answerRatingValue += answer.rating_value
        }
        // create variable for avgAnswer object
        let avgAnswer = 0
        //use function to get the average of the answer rating values
        avgAnswer += avgFunc(answerRatingValue, answers)
        //push avgAnswer to avgAnswerArray
        return avgAnswer
    }

    let getPercentage = (avg) => {
        return avg / 5 * 100
    }

    return <section className="section">
        <p className="data-list-title1">
            {cultUser.company_name} Details:
        </p>
        <article className="data-list-outer-container">


            <div className="data-list-container-2">
                {cultUser.question_types?.map((questionType) => {
                    let type = questionType.type
                    let questions = questionType.questions
                    let questionTypeAverage = getQuestionTypeAverages(questionType)
                    return <div className="data-list-container-b">
                        <div className="data-list-title2">
                            Data Set: {type}
                        </div>
                        <div className="data-list-title3">
                            Average Score: {questionTypeAverage % 1 != 0 ? questionTypeAverage.toFixed(2) : questionTypeAverage}
                        </div>
                        <div className="data-list-title4">
                            Average Percentage: {Math.round(getPercentage(questionTypeAverage % 1 != 0 ? questionTypeAverage.toFixed(2) : questionTypeAverage))}%
                        </div>
                        {questions.map((question) => {
                            let text = question.question_text
                            let answers = question.answers
                            let questionAnswerAverage = getQuestionAnswerAverages(question)
                            return <>
                                <div className="data-list-question">
                                    Question: {text}
                                </div>
                                <div>
                                    Total Answers: {answers.length}
                                </div>
                                <div>
                                    Average Answer Score: {questionAnswerAverage % 1 != 0 ? questionAnswerAverage.toFixed(2) : questionAnswerAverage}
                                </div>
                                <div>
                                    Average Answer Percentage: {Math.round(getPercentage(questionAnswerAverage % 1 != 0 ? questionAnswerAverage.toFixed(2) : questionAnswerAverage))}
                                </div>


                            </>
                        })}
                    </div>
                })}
            </div>
            <div className="data-list-button-box">
                <button type="edit"
                    onClick={() => {
                        navigate(`/datasets/${userId}`)
                    }}
                    className="data-list-buttonz">Back
                </button>
            </div>



        </article>
    </section>
}