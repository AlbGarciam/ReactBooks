import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import _ from 'lodash';

const {width} = Dimensions.get('window'); // Screen dimensions

export default class DetailsHeader extends React.Component {
  state = {
    imageWidth: 0,
    imageHeight: 0,
  };

  componentDidMount() {
    const {book} = this.props;
    const image = _.isNil(book, 'volumeInfo.imageLinks.smallThumbnail')
      ? require('../../../assets/images/placeholder.png')
      : {uri: _.get(book, 'volumeInfo.imageLinks.thumbnail')};
    Image.getSize(image, this._onImageSizeObtained, err => {
      console.log('getSize err:', err);
    });
  }

  _onImageSizeObtained = (imgWidth, imgHeight) => {
    const imageWidth = width * 0.4;
    const imageHeight = (imgHeight * imageWidth) / imgWidth;
    this.setState({
      imageWidth: imageWidth,
      imageHeight: imageHeight,
    });
  };

  render() {
    const {book} = this.props;
    const {imageWidth, imageHeight} = this.state;

    const title = _.get(book, 'volumeInfo.title', 'No title');
    const authors = _.get(book, 'volumeInfo.authors', []).join(',');
    const price = _.get(book, 'saleInfo.listPrice');
    console.log(book);
    const priceLabel = `${_.get(price, 'amount')} ${_.get(
      price,
      'currencyCode',
    )}`;

    const image = _.isNil(book, 'volumeInfo.imageLinks.smallThumbnail')
      ? require('../../../assets/images/placeholder.png')
      : {uri: _.get(book, 'volumeInfo.imageLinks.thumbnail')};
    return (
      <View style={styles.container}>
        <Image
          source={image}
          style={{
            ...styles.image,
            width: imageWidth,
            height: imageHeight,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.authors}>{authors}</Text>
          <Text style={styles.price}>{priceLabel}</Text>
        </View>
      </View>
    );
  }
}
DetailsHeader.defaultProps = {};

DetailsHeader.propTypes = {
  book: PropTypes.object.isRequired,
};
