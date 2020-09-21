import { combineReducers } from 'redux';

import machines from './machines'
import groups from './groups'
import selectedGroupId from './selectedGroupId'
import mode from './mode'


export default combineReducers({
  machines,
  groups,
  selectedGroupId,
  mode,
})
