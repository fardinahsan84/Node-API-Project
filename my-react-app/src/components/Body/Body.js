import React from 'react';
import classes from './Body.module.css';

const Body = ({ children }) => {
    return (
        <div className={classes.mainBody}>
            { children }
        </div>
    );
};

export default Body;