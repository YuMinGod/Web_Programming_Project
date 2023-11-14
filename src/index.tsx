import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle} from './styles';
import StoreProvider from './providers/StoreProvider';


ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.Fragment>
  , document.getElementById('root')
);