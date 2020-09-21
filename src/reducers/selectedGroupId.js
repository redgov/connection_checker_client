import actionType from "../actions/actionType";


const selectedGroupId = (state = 1, action) => {
  switch (action.type) {
    case actionType.SELECTE_GROUP_ID:
      return action.id
    default:
      return state
  }
}

export default selectedGroupId
