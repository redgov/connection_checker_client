import actionType from './actionType'

export const selectGroup = id => ({
  type: actionType.SELECT_GROUP,
  id
})

export const selectMode = id => ({
  type: actionType.SELECT_MODE,
  id
})
