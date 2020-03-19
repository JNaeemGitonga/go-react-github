import React from 'react';
import * as Mui from '../material-ui.components';

const Button = ({ action, btnText, variant, color }) => (
    <Mui.Button onClick={e => {
        e.preventDefault();
        action();
    }}
    variant={variant}
    color={color}
    disableElevation>
        {btnText}
    </Mui.Button>
);

export default Button;