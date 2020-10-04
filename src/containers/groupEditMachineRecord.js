import { connect } from "react-redux"
import { editMachine, deleteMachine } from '../actions'
import GroupEditMachineRecord from '../components/groupEditMachineRecord'


const mapStateToProps = (state) => ({
  groups: state.groups,
})

const mapDispatchToProps = (dispatch) => ({
  deleteMachine: id => dispatch(deleteMachine(id)),
  editMachine: (machine_id, group_id, name, ip_address, is_active) => 
    dispatch(editMachine(machine_id, group_id, name, ip_address, is_active)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupEditMachineRecord)
