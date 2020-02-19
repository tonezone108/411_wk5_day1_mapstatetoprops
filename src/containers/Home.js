import { connect } from "react-redux";
import home from "../components/Home.js";

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default connect(mapStateToProps)(home);
