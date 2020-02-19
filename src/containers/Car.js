import { connect } from "react-redux";
import car from "../components/Car.js";

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default connect(mapStateToProps)(car);
