import React from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import {BookCell} from '../../molecules';
import styles from './style';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.props.initBooksList();
  }

  _renderItem = book => <BookCell book={book} />;

  _onEndReached = ({distanceFromEnd}) => {
    const {isFetching, bookList, total} = this.props;
    const onEndReached =
      distanceFromEnd > 100 && !isFetching && bookList.length < total;

    if (onEndReached) {
      this.props.updateBookListOffset();
    }
  };

  render() {
    const {bookList, isFetching} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={bookList}
          renderItem={this._renderItem}
          keyExtractor={(value, index) => `book-${index}`}
          numColumns={1}
          extraData={this.props}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
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
