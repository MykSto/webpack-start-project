import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '/Index.css';
import App from './App';

const App = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('root'));
