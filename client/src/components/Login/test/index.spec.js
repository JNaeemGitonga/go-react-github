import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../index';

import { shallow, mount, configure } from 'enzyme';
import { expect as expectChai } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

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

describe('All methods should be called', () => {
    const wrapper = shallow(<Login />);

    it('should call login', () => {
        expect(wrapper.instance().login());
    });

    it('should call signup', () => {
        expect(wrapper.instance().signup());
    });

    it('should call submit', () => {
        expect(wrapper.instance().submit());
    });
});

describe('Login and submit should not be called', () => {
    const wrapper = mount(<Login />)
    it('should not call login', () => {
        wrapper.setState({
            passwordInvalid: true,
            confirmPasswordInvalid: true,
            usernameInvalid: true,
        });

        wrapper.find('button').simulate('click');
        expect(!wrapper.instance().login)
    });


});
