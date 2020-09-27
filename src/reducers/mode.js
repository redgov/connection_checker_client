import actionType from "../actions/actionType";
import { modeType } from "../constants"


const mode = (state = modeType.Home, action) => {
  switch (action.type) {
    case actionType.SELECT_MODE:
      return action.id
    default:
      return state
  }
}

export default mode