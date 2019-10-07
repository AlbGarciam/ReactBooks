import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import _ from 'lodash';
import styles from './style';

const {width} = Dimensions.get('window'); // Screen dimensions

export default class BookDetail extends React.Component {
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

    console.log(book);
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

    const image = _.isNil(book, 'volumeInfo.imageLinks.smallThumbnail')
      ? require('../../../assets/images/placeholder.png')
      : {uri: _.get(book, 'volumeInfo.imageLinks.thumbnail')};

    console.log(authors);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
