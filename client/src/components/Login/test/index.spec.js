import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../index';

import { shallow, mount, configure } from 'enzyme';
import { expect as expectChai } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import cn from '../../../shared/constants/css-names';

configure({ adapter: new Adapter() });

const mockApiCalls = class MockApiCalls { 
    static login() { return Promise.resolve('Logged In')}
    static submit() {
        return Promise.resolve('Submitted');
    }
}

const mockLoginUtilities = class MockLoginUtilities {
}

beforeEach(() => {
});;

describe('Component should render', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Login />, div);
    });
})

// describe('Login and submit should not be called', () => {
//     const wrapper = shallow(<Login />)
//     console.log(wrapper)
//     it('should not call login', () => {
//         const span = wrapper.find(`span.${cn.toggleSpan}`);
//         expect(span.text).toBe('Click here to Login')
//         span.simulate('click');
//         expect(span.text).toBe('Click here to SignUp')
//     });


// });
