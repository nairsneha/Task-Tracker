import React  from "react";
import { connect } from "react-redux";

const changeSalary = (props)=> {

    const mapStateToProps = state => {
        return {
            employeeDetails: state
        };
    };

    const mapDispachToProps = dispatch => {
        return {
            onAgeUp: () => dispatch({ type: "INCREMENT"}),
            onAgeDown: () => dispatch({ type: "DECREMENT"})
        };
    };

   export default connect(
        mapStateToProps,
        mapDispachToProps
    )(changeSalary);

    return(
        <div>
            <h1>{JSON.stringify(props.employeeDetails)}</h1>
        </div>
    )

}