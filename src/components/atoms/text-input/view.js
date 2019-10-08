import React from 'react';
import {Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './style';

export default class CustomTextInput extends React.Component {
  state = {
    value: '',
  };

  render() {
    const {title, placeholder, onChange} = this.props;
    const {value} = this.state;
    return (
      <View style={{...this.props.style, ...styles.inputContainer}}>
        <Text style={styles.label}>{title}</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={value => {
              onChange(this, value);
              this.setState({value: value});
            }}
            placeholder={placeholder}
            placeholderTextColor={'rgba(0,0,0,0.5)'}
            underlineColorAndroid={'transparent'}
          />
        </View>
      </View>
    );
  }
}

CustomTextInput.defaultProps = {
  onChange: () => {},
};

CustomTextInput.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
