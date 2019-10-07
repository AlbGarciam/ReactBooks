import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import _ from 'lodash';

const BookCell = ({book, onPress}) => {
  const title = _.get(book, 'item.volumeInfo.title', 'No title');
  const image = _.isNil(book, 'item.volumeInfo.imageLinks.smallThumbnail')
    ? require('../../../assets/images/placeholder.png')
    : {uri: _.get(book, 'item.volumeInfo.imageLinks.thumbnail')};
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

BookCell.defaultProps = {
  onPress: () => {},
};

BookCell.propTypes = {
  book: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

export default BookCell;
