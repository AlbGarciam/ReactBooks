import React from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import {BookCell} from '../../molecules';
import {RoundedButton} from '../../atoms';
import styles from './style';
import {Actions} from 'react-native-router-flux';
import APP_ROUTES from '../../../config/routes';
import _ from 'lodash';
import AddBookModal from '../../organism/add-book-modal/view';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.props.initBooksList();
    this.state = {
      isDisplayingModal: false,
    };
  }

  _onAddResponse = data => {
    // Pending to implement parsing
    this.props.insertBookList(data);
    this.setState({isDisplayingModal: false});
  };

  _onAddButtonPressed = () => {
    this.setState({
      isDisplayingModal: true,
    });
  };

  _renderItem = book => {
    return (
      <BookCell
        book={book.item}
        onPress={book => {
          this.props.updateSelectedBook(book);
          Actions.push(APP_ROUTES.BOOK_DETAILS, {
            title: _.get(book, 'volumeInfo.title') || 'No title',
          });
        }}
      />
    );
  };

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
    const {isDisplayingModal} = this.state;
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
              onRefresh={this.props.initBooksList}
              tintColor={'black'}
              colors={['black']}
            />
          }
        />
        <RoundedButton
          style={styles.addButton}
          onPress={this._onAddButtonPressed}
          title="+"
        />
        <AddBookModal
          isVisible={isDisplayingModal}
          cancelAction={() => {
            this.setState({isDisplayingModal: false});
          }}
          onAdd={this._onAddResponse}
        />
      </SafeAreaView>
    );
  }
}
