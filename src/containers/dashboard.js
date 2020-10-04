import { connect } from "react-redux"
import Dashboard from "../components/Dashboard"
import { getGroups, getMachines } from '../actions'


const mapStateToProps = (state) => ({
  mode: state.mode,
})

const mapDispatchToProps = (dispatch) => ({
  getGroups: () => dispatch(getGroups()),
  getMachines: () => dispatch(getMachines()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
