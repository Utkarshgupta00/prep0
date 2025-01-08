import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Frequent from './Frequent';


const data = <BrowserRouter><App/></BrowserRouter>

ReactDom.createRoot(document.getElementById('root')).render(data);