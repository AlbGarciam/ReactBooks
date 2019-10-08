import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {CustomTextInput} from '../../atoms';
import styles from './style';
import _ from 'lodash';

export default class AddBookModal extends React.Component {
  _onChange = (sender, value) => {
    this.setState({
      [sender.props.name]: value,
    });
  };

  _onAddButtonPressed = () => {
    const volumeInfo = {
      title: _.get(this.state, 'title'),
      authors: _.get(this.state, 'authors', []).split(','),
    };
    const listPrice = {
      amount: _.get(this.state, 'amount', 0),
      currencyCode: 'EUR',
    };
    const data = {
      volumeInfo: volumeInfo,
      saleInfo: {
        listPrice,
      },
    };
    this.props.onAdd(data);
  };

  _onCancelButtonPressed = () => {
    this.props.cancelAction();
  };

  render() {
    const {isVisible, cancelAction} = this.props;
    return (
      <Modal
        isVisible={isVisible}
        onSwipeComplete={cancelAction}
        onBackdropPress={cancelAction}
        swipeDirection={['down']}
        avoidKeyboard
        style={styles.modal}>
        <View style={styles.formContainer}>
          <CustomTextInput
            style={styles.input}
            name="title"
            title="Title"
            placeholder="Book's title"
            onChange={this._onChange}
          />
          <CustomTextInput
            style={styles.input}
            name="authors"
            title="Author"
            placeholder="Book's author"
            onChange={this._onChange}
          />
          <CustomTextInput
            style={styles.input}
            name="amount"
            title="Price"
            placeholder="Book's price"
            onChange={this._onChange}
          />
          <View style={styles.buttonStack}>
            <RoundedButton onPress={this._onCancelButtonPressed} title="x" />
            <RoundedButton
              onPress={this._onAddButtonPressed}
              title="+"
              style={styles.createAction}
            />
          </View>
        </View>
      </Modal>
    );
  }
}
