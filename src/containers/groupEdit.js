import { connect } from "react-redux"
import { selectGroup } from '../actions'
import GroupEdit from "../components/groupEdit"


const mapStateToProps = (state) => ({
  machines: state.machines,
  groups: state.groups,
  selectedGroupId: state.selectedGroupId,
})

const mapDispatchToProps = (dispatch) => ({
  selectGroup: (id) => dispatch(selectGroup(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit)
