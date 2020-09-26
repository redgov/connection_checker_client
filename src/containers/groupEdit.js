import { connect } from "react-redux"
import { selectGroup, deleteGroup } from '../actions'
import GroupEdit from "../components/groupEdit"


const mapStateToProps = (state) => ({
  machines: state.machines,
  groups: state.groups,
  selectedGroupId: state.selectedGroupId,
})

const mapDispatchToProps = (dispatch) => ({
  selectGroup: id => dispatch(selectGroup(id)),
  deleteGroup: id => dispatch(deleteGroup(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit)
