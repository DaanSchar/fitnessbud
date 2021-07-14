export const retrieveToken = (token) => {
  return { type: 'RETRIEVE_TOKEN', token: token}
}

export const login = (username, token) => {
  return { type: 'LOGIN', username: username, token: token}
}

export const logout = () => {
  return { type: 'LOGOUT' }
}

export const register = (userName, token) => {
  return { type: 'REGISTER', username: userName, token: token}
}
