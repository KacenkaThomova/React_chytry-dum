import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import smartHomeData from './smartHomeData';


const App = () => {
  return(
    <div className="container">
      <Header title="Smart House"/>
      <Dashboard data={smartHomeData}/>
    </div>
)};

createRoot(
  document.querySelector('#app'),
).render(<App />);
