import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.inputHandler}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
  },
});

export default Input;
