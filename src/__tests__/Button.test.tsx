import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button/Button';

it('renders the button with default variant and size', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button variant={'primary'}>Default</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
});
