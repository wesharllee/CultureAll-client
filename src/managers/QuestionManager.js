export const getAllQuestions = () => {
    return fetch("http://localhost:8000/questions", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const getQuestionById = (questionId) => {
    return fetch(`http://localhost:8000/questions/${questionId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
};

export const updateContactRequest = (requestId, request) => {
    return fetch(`http://localhost:8000/contactrequests/${requestId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(request)
    })
}