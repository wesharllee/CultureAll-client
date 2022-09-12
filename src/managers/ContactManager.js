export const createContactRequest = (request) => {
    return fetch("http://localhost:8000/contactrequests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(request)
    })
        .then(res => res.json())
}

export const getAllContactRequests = () => {
    return fetch("http://localhost:8000/contactrequests", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};