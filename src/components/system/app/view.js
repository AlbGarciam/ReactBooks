import React from 'react';
import Routes from '../routes';
import {Provider} from 'react-redux';
import store from '../../../config/redux';

class App extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
