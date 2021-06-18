import { connect } from "react-redux";
import Navbar from "./Navbar";
 
const mapStateToProps = (state) => {
    return {
        sidebar:state.sidebar
    }
}

const matDispatchToProps = (dispatch) => {
    return {};
}

const NavbarContainer = connect(mapStateToProps, matDispatchToProps)(Navbar);

export default NavbarContainer;