const initialLoginState = {
  isLoading: true,
  username: null,
  userToken: null,
}

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case 'RETRIEVE_TOKEN':
      return retrieveToken(state, action);
    case 'LOGIN':
      return login(state, action);
    case 'LOGOUT':
      return logout(state, action);
    case 'REGISTER':
      return register(state, action);
  }
  return state;
}

function retrieveToken(state, action) {
  return {
    ...state,
    userToken: action.token,
    isLoading: false,
  }
}

function login(state, action) {
  return {
    ...state,
    username: action.username,
    userToken: action.token,
    isLoading: false,
  }
}

function logout(state) {
  return {
    ...state,
    username: null,
    userToken: null,
    isLoading: false,
  }
}

function register(state, action) {
  return {
    ...state,
    username: action.username,
    userToken: action.token,
    isLoading: false,
  }
}
