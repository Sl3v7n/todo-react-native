import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

//Components
import ListItem from './components/listItem';
import AddInput from './components/addInput';

export default function App() {
  const [toDoList, setToDoList] = useState('');

  const onAddButton = newTodo => {
    if (!newTodo) {
      return null;
    }
    setToDoList(prevState => [
      {key: Math.random().toString() + newTodo, value: newTodo, done: false},
      ...prevState,
    ]);
  };

  const removeListItem = id => {
    setToDoList(prevState => {
      return prevState.filter(item => item.key !== id);
    });
  };

  const setItemListToDone = id => {
    setToDoList(prevState => {
      return prevState.map(item => ({
        ...item,
        done: item.key === id ? !item.done : item.done,
      }));
    });
  };

  return (
    <View style={styles.screen}>
      <AddInput onClickHandler={onAddButton} />
      <FlatList
        data={toDoList}
        renderItem={itemData => (
          <ListItem
            todo={itemData.item}
            id={itemData.item.key}
            removeItem={removeListItem}
            setDoneTodo={setItemListToDone}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
