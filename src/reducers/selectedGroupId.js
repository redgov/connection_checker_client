import actionType from "../actions/actionType";


const selectedGroupId = (state = 1, action) => {
  switch (action.type) {
    case actionType.SELECT_GROUP:
      return action.id
    default:
      return state
  }
}

export default selectedGroupId
