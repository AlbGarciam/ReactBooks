import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {BookList} from '../../pages';

import {navBarStyles as styles} from './style';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="Home" component={BookList} hideNavBar {...styles} />
        </Stack>
      </Router>
    );
  }
}
