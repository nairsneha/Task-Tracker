import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Header = (props) => {
    const buttonClick = () => {
        console.log("hello");
    }
    return(
        <div>
        <header>
            <h1 style={{backgroundColor: 'grey'}}>
            {props.title}
            </h1>
            <Button variant="primary" onClick={buttonClick}>Add</Button>
        </header>
        </div>
    );

}

Header.defaultProps= {
    title: "Default title",
}

//if you pass anything other than a string as title of props, it will show a warning on the console
Header.propTypes= {
    title: PropTypes.string,
}
export default Header;