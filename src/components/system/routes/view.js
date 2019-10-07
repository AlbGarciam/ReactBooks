import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {BookList} from '../../pages';
import APP_ROUTES from '../../../config/routes';

import {navBarStyles as styles} from './style';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key={APP_ROUTES.BOOK_LIST}
            component={BookList}
            hideNavBar
            {...styles}
          />
        </Stack>
      </Router>
    );
  }
}
