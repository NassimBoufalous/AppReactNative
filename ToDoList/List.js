import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 22,
  },
  checkbox: {
    marginRight: 10,
  },
  checkedText: {
    color: 'green',
    fontSize: 18, 
    flex: 1, 
    textDecorationLine: 'line-through', 
  },
  uncheckedText: {
    color: 'red',
    fontSize: 18,
    flex: 1, 
  },
  Button: {
    marginLeft: 10, 
  },
});

const ListItem = ({ item, index, onDeleteItem, onEditItem, checkedItems, CheckboxPress }) => (
  <View style={styles.listItem}>
    <CheckBox
      checked={checkedItems.includes(index)}
      onPress={() => {
        CheckboxPress(index);
      }}
      containerStyle={styles.checkbox}
    />
    <Text style={checkedItems.includes(index) ? styles.checkedText : styles.uncheckedText}>{item}</Text>
    <TouchableOpacity style={styles.Button} onPress={() => onDeleteItem(index)}>
      <Icon name="delete" type="material" color="red" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={() => onEditItem(index,item)}>
      <Icon name="edit" type="material" color="black" />
    </TouchableOpacity>
  </View>
);

const TodoList = ({ listToDo, onDeleteItem, checkedItems, CheckboxPress,onEditItem }) => (
  <FlatList
    data={listToDo}
    renderItem={({ item, index }) => (
      <ListItem item={item} index={index} onDeleteItem={onDeleteItem} checkedItems={checkedItems} CheckboxPress={CheckboxPress} onEditItem={onEditItem} />
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

export default TodoList;
