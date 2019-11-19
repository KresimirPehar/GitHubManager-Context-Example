import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root'));
registerServiceWorker();
