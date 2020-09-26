import axios from 'axios'
import actionType from './actionType'

const URL_PREFIX = "http://127.0.0.1:8000"


export const selectGroup = id => ({
  type: actionType.SELECT_GROUP,
  id
})

export const selectMode = id => ({
  type: actionType.SELECT_MODE,
  id
})

export const setGroups = groups => ({
  type: actionType.SET_GROUPS,
  groups
})


// thunk

export const getGroups = () => {
  return dispatch => {
    return axios({
      method: 'get',
      url: `${URL_PREFIX}/groups`,
    })
    .then(r => {
      console.log(r)
      dispatch(setGroups(r.data.groups))
    })
    .catch(e => console.log(e))
  }
}

export const addGroup = (name, mail_addresses_text) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: `${URL_PREFIX}/groups`,
      data: {"name": name, "mail_addresses_text": mail_addresses_text}
    })
    .then(r => {
      console.log(r)
      dispatch(getGroups())
    })
    .catch(e => console.log(e))
  }
}

export const deleteGroup = id => {
  return dispatch => {
    return axios.delete(`${URL_PREFIX}/groups?id=${id}`)
    .then(r => {
      console.log(r)
      dispatch(getGroups())
    })
    .catch(e => console.log(e))
  }
}