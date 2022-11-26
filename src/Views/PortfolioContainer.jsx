import { connect } from "react-redux";
import Portfolio from "./Portfolio.jsx";
import progectReducer from "../store/slice/progectSlice.js";
let mapStateToProps = (state) => {
    return {
        progects:state.progectReducer.progects,
    };
};

const PortfolioContainer = connect(mapStateToProps)(Portfolio);
export default PortfolioContainer;