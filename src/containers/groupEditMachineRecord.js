import { connect } from "react-redux"
import { deleteMachine } from '../actions'
import GroupEditMachineRecord from '../components/groupEditMachineRecord'


const mapStateToProps = (state) => ({
  groups: state.groups,
})

const mapDispatchToProps = (dispatch) => ({
  deleteMachine: id => dispatch(deleteMachine(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupEditMachineRecord)
