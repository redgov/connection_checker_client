import { connect } from "react-redux"
import { selectGroup, deleteGroup, editGroup } from '../actions'
import GroupEdit from "../components/groupEdit"


const mapStateToProps = (state) => ({
  machines: state.machines,
  groups: state.groups,
  mode: state.mode,
  selectedGroupId: state.selectedGroupId,
})

const mapDispatchToProps = (dispatch) => ({
  selectGroup: id => dispatch(selectGroup(id)),
  deleteGroup: id => dispatch(deleteGroup(id)),
  editGroup: (id, name, mail_addresses_text) =>
    dispatch(editGroup(id, name, mail_addresses_text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit)
