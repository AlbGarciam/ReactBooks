import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {CustomTextInput} from '../../atoms';
import styles from './style';

export default class AddBookModal extends React.Component {
  _onChange = (sender, value) => {
    this.setState({
      [sender.props.name]: value,
    });
  };

  _onAddButtonPressed = () => {
    this.props.onAdd(this.state);
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
            name="author"
            title="Author"
            placeholder="Book's author"
            onChange={this._onChange}
          />
          <CustomTextInput
            style={styles.input}
            name="price"
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
