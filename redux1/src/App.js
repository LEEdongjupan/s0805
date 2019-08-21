import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDisyplay from './ex1/CountDisplay';
import CountReduxButton from './ex2/CountReduxButton';
import CountReduxDisplay from './ex2/CountReduxDisplay';
import EvenOddDisplay from './ex2/EvenOddDisplay';

function App() {
  return (
    <div className="App">
      <CountReduxDisplay></CountReduxDisplay>
      <CountReduxButton></CountReduxButton>
      <EvenOddDisplay></EvenOddDisplay>
      </div>
  )}

export default App;
