import axios from 'axios'
import actionType from './actionType'


const URL_PREFIX = "http://127.0.0.1:8000"
const API = {
  GROUPS: "groups",
  MACHINES: "machines",
}


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

export const setMachines = machines => ({
  type: actionType.SET_MACHINES,
  machines
})


// thunk
// groups
export const getGroups = () => {
  return dispatch => {
    return axios({
      method: 'get',
      url: `${URL_PREFIX}/${API.GROUPS}`,
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
      url: `${URL_PREFIX}/${API.GROUPS}`,
      data: {"name": name, "mail_addresses_text": mail_addresses_text}
    })
    .then(r => {
      console.log(r)
      dispatch(getGroups())
    })
    .catch(e => console.log(e))
  }
}

export const editGroup = (id, name, mail_addresses_text) => {
  return dispatch => {
    return axios({
      method: 'put',
      url: `${URL_PREFIX}/${API.GROUPS}`,
      data: {"id": id, "name": name, "mail_addresses_text": mail_addresses_text}
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
    return axios.delete(`${URL_PREFIX}/${API.GROUPS}?id=${id}`)
    .then(r => {
      console.log(r)
      dispatch(getGroups())
    })
    .catch(e => console.log(e))
  }
}


// machines
export const getMachines = () => {
  return dispatch => {
    return axios({
      method: 'get',
      url: `${URL_PREFIX}/${API.MACHINES}`,
    })
    .then(r => {
      console.log(r)
      dispatch(setMachines(r.data.machines))
    })
    .catch(e => console.log(e))
  }
}

export const addMachine = (group_id, name, ip_address) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: `${URL_PREFIX}/${API.MACHINES}`,
      data: {"group_id": group_id, "name": name, "ip_address": ip_address}
    })
    .then(r => {
      console.log(r)
      dispatch(getMachines())
    })
    .catch(e => console.log(e))
  }
}
