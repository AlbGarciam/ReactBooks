import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import _ from 'lodash';
import styles from './style';
import {DetailsHeader} from '../../molecules';

export default class BookDetail extends React.Component {
  render() {
    const {book} = this.props;
    const description = _.get(book, 'volumeInfo.description', 'No description');
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
          <DetailsHeader book={book} />
          <Text style={styles.description}>{description}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
