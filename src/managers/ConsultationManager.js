export const createConsultRequest = (request) => {
    return fetch("http://localhost:8000/consultationrequests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(request)
    })
        .then(res => res.json())
}

export const getAllConsultRequests = () => {
    return fetch("http://localhost:8000/consultationrequests", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const getConsultRequestById = (requestId) => {
    return fetch(`http://localhost:8000/consultationrequests/${requestId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
};


export const updateConsultRequest = (requestId, request) => {
    return fetch(`http://localhost:8000/consultationrequests/${requestId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(request)
    })
}

export const deleteConsultRequest = (requestId) => {
    return fetch(`http://localhost:8000/consultationrequests/${requestId}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}