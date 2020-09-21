import { selectGroupId } from '../actions'
import { connect } from "react-redux"
import GroupEdit from "../components/groupEdit"


const mapStateToProps = (state) => ({
  machines: state.machines,
  groups: state.groups,
  selectedGroupId: state.selectedGroupId,
})

const mapDispatchToProps = (dispatch) => ({
  selectGroupId: (id) => dispatch(selectGroupId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit)
