let users = JSON.parse(localStorage.getItem('users')) || [];

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/auth/login') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);

                    let filteredUsers = users.filter(user => {
                        return user.email === params.email && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('Email or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        reject('Unauthorised');
                    }
                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        resolve({ ok: true, text: () => JSON.stringify(user) });
                    } else {
                        reject('Unauthorised');
                    }
                    return;
                }

                // register user
                if (url.endsWith('/auth/register') && opts.method === 'POST') {
                    let newUser = JSON.parse(opts.body);

                    let duplicateUser = users.filter(user => { return user.email === newUser.email; }).length;
                    if (duplicateUser) {
                        reject('email "' + newUser.email + '" is already taken');
                        return;
                    }

                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        reject('Unauthorised');
                    }

                    return;
                }
                realFetch(url, opts).then(response => resolve(response));
            }, 500);
        });
    }
}