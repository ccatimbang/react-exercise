import React, { Component } from 'react';
import Button from './components/Button/Button';
import InputField from './components/InputField/InputField';
import logo from './logo.svg';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <main>
          <div className="container">
              <h1>React Components</h1>
              <InputField type={'text'} placeholder={'Text'} name={'text'} />
              <InputField type={'email'} placeholder={'Email'} name={'email'} />
              <InputField type={'password'} placeholder={'Password'} name={'password'} />
              <Button variant={'primary'}>Primary</Button>
              <Button variant={'secondary'}>Secondary</Button>
              <Button variant={'danger'}>Danger</Button>
              <Button variant={'primary'} disabled={true}>Disabled</Button>
              <Button variant={'primary'} size={'lg'}>Large</Button>
              <Button variant={'primary'} size={'sm'}>Small</Button>
          </div>
        </main>
        </header>
      </div>
    );
  }
}

export default App;
