export const createAnswer = (answer) => {
    return fetch("http://localhost:8000/answers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(answer)
    })
        .then(res => res.json())
}

export const getAllAnswers = () => {
    return fetch("http://localhost:8000/questions", {
    }).then(res => res.json())
};

export const getAnswerById = (answerId) => {
    return fetch(`http://localhost:8000/answers/${answerId}`, {
    })
        .then(res => res.json())
};

export const updateAnswer = (answerId, answerData) => {
    return fetch(`http://localhost:8000/answers/${answerId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(answerData)
    })
}