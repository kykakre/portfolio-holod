import { connect } from "react-redux";
import Main from "./Main.jsx";
let mapStateToProps = (state) => {
    return {

    };
};

const ContactContainer = connect(mapStateToProps)(Main);
export default ContactContainer;