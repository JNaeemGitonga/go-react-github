import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index.js';

describe('Button should render', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Button
                action={() => {}}
                variant="outlined"
                color="primary"
                btnText="Submit"
            />,
            div
        );
    });
});
