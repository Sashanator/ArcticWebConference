import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
//import Main from './components/main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('addLog'));
//ReactDOM.render(<Main />, document.getElementById('showLog'))

serviceWorker.unregister();