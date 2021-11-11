import React from 'react';
import ReactDOM from 'react-dom';

// local modules
import App from './app';
import './style.css';

/*  Render app
/*   *   *   *   *   *   *   *   *   *   */

ReactDOM.render(

    // react app
    <React.StrictMode>
        <App />
    </React.StrictMode>,

    // DOM refrence
    document.getElementById( 'root' )
);