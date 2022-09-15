import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserById } from "../../../managers/UserManager"
export const DataDetails = () => {

    const { userId } = useParams()
    const [cultUser, setCultUser] = useState({})
    const [isShown, setIsShown] = useState()
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
            <p className="panel-heading">
                Data Details:
            </p>

            <div>
                {cultUser?.company_name} Data
                <div>
                    {cultUser.question_types?.map((questionType) => {
                        let type = questionType.type
                        let questions = questionType.questions
                        let questionTypeAverage = getQuestionTypeAverages(questionType)
                        return <div>
                            Data Set: {type} || Average Score: {questionTypeAverage}
                            {questions.map((question) => {
                                let text = question.question_text
                                let answers = question.answers
                                let questionAnswerAverage = getQuestionAnswerAverages(question)
                                return <>
                                    <div>
                                        Question: {text}
                                    </div>
                                            <div>
                                                Average Answer: {questionAnswerAverage}
                                            </div>
                                            <div>
                                                Total Answers: {answers.length}
                                            </div>
                                            
                                    
                                </>
                            })}
                        </div>
                    })}
                </div>
            </div>

            <button type="edit"
                onClick={() => {
                    navigate(`/datasets`)
                }}
                className="button is-success">Back
            </button>


        </article>
    </section>
}