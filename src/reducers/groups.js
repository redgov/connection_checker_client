import actionType from "../actions/actionType";


const groups = (state = [], action) => {
  switch (action.type) {
    case actionType.SET_GROUPS:
      return action.groups
    default:
      return state
  }
}

export default groups
