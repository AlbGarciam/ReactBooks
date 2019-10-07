import React from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './style';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.props.initBooksList();
  }

  render() {
    const {bookList, isFetching} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={bookList}
          renderItem={this._renderItem}
          keyExtractor={(value, index) => `house-${index}`}
          numColumns={2}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.props.fetchHousesList}
              tintColor={'red'}
              colors={['red']}
            />
          }
        />
      </SafeAreaView>
    );
  }
}
