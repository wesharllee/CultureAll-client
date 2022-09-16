import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getUserById } from "../../../managers/UserManager"
export const MyData = () => {

    const { userId } = useParams()
    const [cultUser, setCultUser] = useState({})


    useEffect(() => {
        getUserById(userId).then(data => setCultUser(data))
    }, [userId])

    console.log(cultUser?.company_name)
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

    let getPercentage = (avg) => {
        return avg/5 * 100
    }

    

    return <section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                {cultUser.company_name} Data:
            </p>
            {cultUser.terms_signed === true
                ?

                <div className="panel-block">

                    <div >
                        {cultUser.question_types?.map((questionType) => {
                            let type = questionType.type
                            let avg = getQuestionTypeAverages(questionType)
                            let percentage = Math.round(getPercentage(avg))
                            if(percentage > 65)
                            {
                            return <>
                                <div className="panel-block">
                                    {type}
                                </div>
                                <div className="panel-block">
                                    Score: {avg.toFixed(2)}
                                </div>
                                <div className="panel-block">
                                    Happines Quotient: {percentage}%
                                </div>
                                <div className="panel-block"></div>
                            </>
                            }
                            else {
                                return <>
                                <div className="panel-block">
                                    {type}
                                </div>
                                <div className="panel-block">
                                    Score: {avg.toFixed(2)}
                                </div>
                                <div className="panel-block">
                                    Happiness Quotient: {percentage}% (Room for Improvement)
                                </div>
                                <div className="panel-block"></div>
                            </>
                            }
                        })}
                    </div>
                </div>
                :
                <>
                    <div className="panel-block">Sorry {cultUser?.user?.first_name}! You don't currently have any data.</div>

                    <Link to={`/getdata/${userId}`} className="navbar-item">Get My Data</Link>
                </>
            }



        </article>
    </section>
}