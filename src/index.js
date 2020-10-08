import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import ContextContainer from './Context';
import * as serviceWorker from './serviceWorker';

import { initializationNotification } from './utils/notifications';

initializationNotification();

ReactDOM.render(
  <React.StrictMode>
    <ContextContainer>
      <App />
    </ContextContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
