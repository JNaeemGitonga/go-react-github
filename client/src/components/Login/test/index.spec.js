import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../index';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

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
