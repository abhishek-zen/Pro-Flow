import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import Pipeline from "./Project/Pipeline.tsx";
// import TaskFlow from "./Project/TaskFlow.tsx";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TaskFlow/> */}
    <Pipeline/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
