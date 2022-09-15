export const getAllQuestions = () => {
    return fetch("http://localhost:8000/questions", {
        
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

