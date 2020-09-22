import actionType from "../actions/actionType";


const mode = (state = 1, action) => {
  switch (action.type) {
    case actionType.SELECT_MODE:
      return action.id
    default:
      return state
  }
}

export default mode