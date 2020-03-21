import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const AddInput = props => {
  const [newTodo, setNewToDo] = useState('');

  const toDoInputHandler = inputText => {
    setNewToDo(inputText);
  };

  return (
    <View style={styles.cockpit}>
      <TextInput
        style={styles.input}
        placeholder="New To Do"
        onChangeText={toDoInputHandler}
        value={newTodo}
      />
      <Button
        title="ADD"
        onPress={() => {
          props.onClickHandler(newTodo);
          setNewToDo('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
  },
  cockpit: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default AddInput;
