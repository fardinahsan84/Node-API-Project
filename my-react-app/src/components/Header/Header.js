import React from "react";
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import react from '../../assets/images/react.svg';

const Header = () => {
    return(
        <header>
            <div class="container">
                <div>
                    <img class={classes.logo} src={logo} alt="Logo" />
                </div>
                <div class="textRight">
                    <img src={react} alt="React" class={classes.reactLogo} /><strong
                    >React</strong
                    >
                </div>
            </div>
        </header>
    )
}

export default Header;