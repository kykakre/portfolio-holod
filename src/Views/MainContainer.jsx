import { connect } from "react-redux";
import Main from "./Main.jsx";
let mapStateToProps = (state) => {
    return {
banner:state.bannerReducer.banner,
        stap:state.stapReducer.stap,
    };
};

const MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;