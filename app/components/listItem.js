import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';

const ListItem = props => {
  const [editItemList, setEditItemList] = useState(false);

  const editItemListHandler = () => {
    setEditItemList(true);
  };
  const onCancel = () => {
    setEditItemList(false);
  };
  const onRemove = () => {
    props.removeItem(props.id);
    setEditItemList(false);
  };
  const onDone = () => {
    props.setDoneTodo(props.id);
    setEditItemList(false);
  };

  return (
    <TouchableOpacity onPress={editItemListHandler}>
      <View
        style={[
          styles.listItem,
          props.todo.done ? styles.listItemDone : styles.listItemPending,
        ]}>
        <Text>{props.todo.value}</Text>
        <Modal visible={editItemList} animationType="slide">
          <View style={styles.modal}>
            <Text style={styles.header}>{props.todo.value}</Text>
            <View style={[styles.button, styles.buttonChangeStatus]}>
              <Button color="white" title="Change Status" onPress={onDone} />
            </View>
            <View style={[styles.button, styles.buttonRemove]}>
              <Button color="white" title="Remove" onPress={onRemove} />
            </View>
            <View style={[styles.button, styles.buttonCancel]}>
              <Button color="white" title="Cancel" onPress={onCancel} />
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
  },
  listItemDone: {
    backgroundColor: '#b5e7a0',
  },
  listItemPending: {
    backgroundColor: '#f18973',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#deeaee',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    color: '#ffffff',
    marginHorizontal: 100,
    marginVertical: 10,
  },
  buttonChangeStatus: {
    backgroundColor: '#86af49',
  },
  buttonRemove: {
    backgroundColor: '#c94c4c',
  },
  buttonCancel: {
    backgroundColor: '#034f84',
  },
});

export default ListItem;
