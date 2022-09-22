import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getUserById } from "../../../managers/UserManager"
import { Bar } from "react-chartjs-2"
import Chart from "chart.js/auto"
// import "../client.css"


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
        return avg / 5 * 100
    }

    let graphColor = (percentageArray) => {
        let graphArray = []
        if (percentageArray > 65) {
            graphArray.push("rgb(123, 188, 148)")
        }
        else if (percentageArray > 55) {
            graphArray.push("rgb(230, 186, 128)")
        }
        else { graphArray.push("rgb(208, 101, 101)") }
        return graphArray
    }


    return <section className="data-graph-section">
        <p className="data-title1">
            {cultUser.company_name}'s Data:
        </p>
        <article >
            {cultUser.terms_signed === true
                ?
                <div className="graph-card-container">
                    <div className="card-inner-container" >
                        {cultUser.question_types?.map((questionType) => {
                            let type = questionType.type
                            let avg = getQuestionTypeAverages(questionType)
                            let percentage = Math.round(getPercentage(avg))
                            if (percentage > 65) {
                                return <div className="data-inner-container-a">
                                    <div className="data-heading">
                                        {type}
                                    </div>
                                    <div className="data-set-box">
                                        <div className="data-set">
                                            Score: {avg % 1 != 0 ? avg.toFixed(2) : avg}
                                        </div>
                                        <div className="data-set">
                                            Happiness Quotient: {percentage}%
                                        </div>
                                    </div>
                                </div>
                            }
                            else if (percentage > 55) {
                                return <div className="data-inner-container-c">
                                    <div className="data-heading">
                                        {type}
                                    </div>
                                    <div className="data-set-box">
                                        <div className="data-set">
                                            Score: {avg.toFixed(2)}
                                        </div>
                                        <div className="data-set">
                                            Happiness Quotient: {percentage}%
                                        </div>
                                    </div>
                                </div>
                            }
                            else {
                                return <div className="data-inner-container-b">
                                    <div className="data-heading">
                                        {type}
                                    </div>
                                    <div className="data-set-box">
                                        <div className="data-set">
                                            Score: {avg.toFixed(2)}
                                        </div>
                                        <div className="data-set">
                                            Happiness Quotient: {percentage}%
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                    <div className="graph-container">

                        <div className="data-title2">Happiness Quotient</div>
                        <div className="graph-inner-container">
                            <div className="graph" style={{ maxWidth: "1500px", minWidth: "50px" }}>
                                <Bar
                                    data={{

                                        // Name of the variables on x-axies for each bar
                                        labels: cultUser.question_types.map((questionType) => questionType.type),
                                        datasets: [
                                            {
                                                // Label for bars
                                                label: "% out of 100",
                                                // Data or value of your each variable
                                                data: cultUser.question_types.map((questionType) => Math.round(getPercentage(getQuestionTypeAverages(questionType)))),
                                                // Color of each bar
                                                backgroundColor: cultUser.question_types.map((questionType) => graphColor(getPercentage(getQuestionTypeAverages(questionType)))),
                                                // Border color of each bar
                                                borderColor: cultUser.question_types.map((questionType) => graphColor(getPercentage(getQuestionTypeAverages(questionType)))),
                                                borderWidth: 0.5,
                                            },
                                        ],
                                    }}
                                    // Height of graph
                                    height={613}
                                    options={{
                                        maintainAspectRatio: false,
                                        scales: {
                                            y: {
                                                suggestedMin: 50,
                                                suggestedMax: 100
                                            }
                                        },
                                        legend: {
                                            labels: {
                                                fontSize: 15,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="graph-card-container">

                    <div className="card-inner-container">
                        <div className="data-not-found-inner-container">

                            <div className="data-heading">Sorry {cultUser?.user?.first_name}! You don't currently have any data.</div>
                                <Link to={`/getdata/${userId}`} className="data-set">Get My Data</Link>
                        </div>
                    </div>
                </div>
            }



        </article>
    </section>
}