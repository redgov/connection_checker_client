import { connect } from "react-redux"
import MachineCondition from "../components/machineCondition"


const mapStateToProps = (state) => ({
  machines: state.machines,
  selectedGroupId: state.selectedGroupId,
})

export default connect(mapStateToProps)(MachineCondition)