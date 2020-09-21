import { connect } from "react-redux"
import Sidebar from "../components/Sidebar"


const mapStateToProps = (state) => ({
  groups: state.groups,
})

export default connect(mapStateToProps)(Sidebar)