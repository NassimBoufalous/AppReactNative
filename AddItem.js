// AddTodo.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';
const styles = StyleSheet.create({
    textInput: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginRight: 10,
      paddingHorizontal: 8,
    },
    addButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    addButtonText: {
      color: 'white',
      fontSize: 18,
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
  });

const AddTodo = ({ onAddItem,listToDo }) => {
  const [newItemText, NewItem] = useState('');

  const AddItem = () => {
    if (newItemText.trim() !== '') {
      onAddItem([...listToDo,newItemText.trim()]);
      NewItem('');
    }
  };

  return (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Ajouter une nouvelle tâche..."
      value={newItemText}
      onChangeText={(text) => NewItem(text)}
    />
    <TouchableNativeFeedback style={styles.addButton} onPress={AddItem} background={TouchableNativeFeedback.Ripple('#c0c0c0', false)}>
        <View style={styles.addButton}>
            <Text style={styles.addButtonText}>Ajouter</Text>
        </View>
    </TouchableNativeFeedback>
  </View>
  );
};

export default AddTodo;
