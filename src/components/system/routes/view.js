import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

import {navBarStyles as styles} from './styles';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          {/* <Scene key="Home" component={Home} title="Casas" hideNavBar {...styles} />
        <Scene
          key="Characters"
          component={Characters}
          {...styles}
          rightTitle="Crear"
          onRight={() => {
            Actions.push('AddCharacters');
          }}
        />
        <Scene
          key="AddCharacters"
          component={AddCharacters}
          title={'Crear personaje'}
          {...styles}
        /> */}
        </Stack>
      </Router>
    );
  }
}
