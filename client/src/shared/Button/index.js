import React from 'react';
import * as Mui from '../material-ui.components';

const Button = ({ action, btnText, variant, color, id }) => (
    <Mui.Button id={id}
                onClick={e => {
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