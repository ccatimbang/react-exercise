import React from 'react';
import ReactDOM from 'react-dom';
import InputField from '../components/InputField/InputField';

it('renders the input field with the specified type', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputField type={'text'} placeholder={''} name={''}>Default</InputField>, div);
    ReactDOM.unmountComponentAtNode(div);
});
