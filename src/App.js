import React from 'react';
import 'typeface-roboto';

// ROUTER
import Navigation from './components/Navigation';

import './App.css';

// REDUX IMPORTS
import configureStore from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

const { store, persistor } = configureStore();

class App extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
