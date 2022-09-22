import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../../managers/UserManager"
import "../css/data.css"

export const DataSetList = () => {

    const [cultUsers, setCultUsers] = useState([])
    useEffect(() => {
        getAllUsers().then(usersData => setCultUsers(usersData))
    }, [])

    //create function to get average
    const avgFunc = (value, array) => {
        let avg = value / array.length
        return avg
    }

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
        return avg / 5 * 100
    }

    return <section className="section">
        <p className="data-list-title1">
            Data Sets:
        </p>
        <article className="data-list-outer-container">

            {cultUsers.reverse().map((cultUser) => {
                let fullName = cultUser.user.first_name + " " + cultUser.user.last_name
                let company = cultUser.company_name
                let phoneNumber = cultUser.phone_number
                let email = cultUser.user.email
                let questionTypes = cultUser.question_types


                if (cultUser.user.is_staff === false) {
                    return <div className="data-list-container-1">
                        <div className="data-list-container-c">
                            <div className="data-list-title2">
                                Company: {company}
                            </div>
                            <div className="data-list-title3">
                                Contact: {fullName}
                            </div>
                            <div>
                                {questionTypes.map((questionType) => {
                                    let type = questionType.type
                                    let avg = getQuestionTypeAverages(questionType)
                                    let percentage = Math.round(getPercentage(avg))
                                    return <><div className="data-list-title3">
                                        Data Set: {type}
                                    </div>

                                        <div>
                                            Score: {avg.toFixed(2)}
                                        </div>
                                        <div>
                                            Happiness Quotient: {percentage}%
                                        </div>
                                    </>
                                })}
                            </div>

                            <div>
                                Email: {email}
                            </div>
                            <div>
                                Phone: {phoneNumber}
                            </div>
                            <Link to={`/datadetails/${cultUser.id}`} className="data-list-link">{company} Details</Link>
                        </div>
                    </div>
                }
            })}
        </article>
    </section>
}