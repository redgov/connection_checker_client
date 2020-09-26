import { connect } from "react-redux"
import { addGroup } from '../actions'
import GroupAdd from "../components/groupAdd"

const mapDispatchToProps = (dispatch) => ({
  addGroup: (name, mail_addresses_text) =>
    dispatch(addGroup(name, mail_addresses_text)),
})

export default connect(null, mapDispatchToProps)(GroupAdd)
