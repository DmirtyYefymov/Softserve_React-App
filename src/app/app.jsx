import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from '../router';

import './app.css';

function App() {
    return(
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
    );
}

export default App;