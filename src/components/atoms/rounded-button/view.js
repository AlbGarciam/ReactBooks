import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './style';

export default RoundedButton = ({title, image, onPress, style}) => {
  var icon = null;
  if (_.isNil(image)) {
    icon = {uri: image};
  }
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container, ...style}}>
      {_.isNil(image) ? null : <Image style={styles.icon} source={icon} />}
      {_.isNil(title) ? null : <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

RoundedButton.defaultProps = {
  onPress: () => {},
};

RoundedButton.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
};
