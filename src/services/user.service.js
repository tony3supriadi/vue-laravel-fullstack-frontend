import { authHeader } from "@/helpers";

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
}

function login(email, password) {
    return fetch(`${process.env.VUE_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    return fetch(`${process.env.VUE_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(handleResponse);
}

function getAll() {
    return fetch(`${process.env.VUE_APP_API_URL}/users`, {
        method: 'GET',
        headers: authHeader()
    }).then(handleResponse);
}

function getById(id) {
    return fetch(`${process.env.VUE_APP_API_URL}/users/${id}`, {
        method: 'GET',
        headers: authHeader()
    }).then(handleResponse);
}

function update(user) {
    return fetch(`${process.env.VUE_APP_API_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then(handleResponse);
}

function _delete(id) {
    return fetch(`${process.env.VUE_APP_API_URL}/users/${id}`, {
        method: 'DELETE',
        headers: authHeader()
    }).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
