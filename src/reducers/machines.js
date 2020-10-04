import actionType from "../actions/actionType";


const sample_machines = []


const machines = (state = sample_machines, action) => {
  switch (action.type) {
    case actionType.SET_MACHINES:
      return action.machines
    default:
      return state
  }
}

export default machines
