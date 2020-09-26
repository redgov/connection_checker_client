import axios from 'axios'
import actionType from './actionType'


export const selectGroup = id => ({
  type: actionType.SELECT_GROUP,
  id
})

export const selectMode = id => ({
  type: actionType.SELECT_MODE,
  id
})

export const addGroup = (name, mail_addresses_text) => {
  return () => {
    return axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/groups',
      data: {"name": name, "mail_addresses_text": mail_addresses_text}
    })
    .then(r => {
      console.log(r)
    })
    .catch(e => console.log(e))
  }
}