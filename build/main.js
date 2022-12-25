import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppProvider } from 'providers/AppProvider';
import { App } from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(AppProvider, null,
        React.createElement(App, null))));
//# sourceMappingURL=main.js.map