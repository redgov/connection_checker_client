import { connect } from "react-redux"
import { selectGroup, selectMode } from '../actions'
import Sidebar from "../components/Sidebar"


const mapStateToProps = (state) => ({
  groups: state.groups,
})

const mapDispatchToProps = dispatch => ({
  selectGroup: (id) => dispatch(selectGroup(id)),
  selectMode: id => dispatch(selectMode(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
