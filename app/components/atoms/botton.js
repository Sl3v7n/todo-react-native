import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const PrimaryButton = props => {
  return (
    <View style={styles.button}>
      <Button
        {...props.children}
        title={props.title}
        color={props.color}
        onPress={() => {
          props.onClickHandler();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    color: '#ffffff',
    marginHorizontal: 100,
    marginVertical: 10,
  },
});

export default PrimaryButton;
