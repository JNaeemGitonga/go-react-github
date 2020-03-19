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
    it('should call login', () => {
        const wrapper = shallow(<Login />);
        expectChai(wrapper.instance().login());
    });

    it('should call signup', () => {
        const wrapper = shallow(<Login />);
        expectChai(wrapper.instance().signup());
    });

    // it('should call submit', () => {
    //     const wrapper = shallow(<);
    //     expectChai(wrapper.instance().submit());
    // });


});
