import { connect } from "react-redux"
import Dashboard from "../components/Dashboard"


const mapStateToProps = (state) => ({
  mode: state.mode,
})

export default connect(mapStateToProps)(Dashboard)
