import { connect } from "react-redux"
import Dashboard from "../components/Dashboard"
import { getGroups } from '../actions'


const mapStateToProps = (state) => ({
  mode: state.mode,
})

const mapDispatchToProps = (dispatch) => ({
  getGroups: () => dispatch(getGroups()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
