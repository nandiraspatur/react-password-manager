const initialState = {
  users: ''
}

const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return {...state, users: action.payload}
    case 'SEARCH_PASSWORD':
      return {...state, users: action.payload}
    default:
      return state      
  }
}

export default homeReducers