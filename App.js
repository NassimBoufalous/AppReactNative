import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [listToDo, setListToDo] = useState([
    "Passer Master",
    "Rester en Vie",
    "Aller à la salle",
    "Trouver un appart",
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 200,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 18,
      marginBottom: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    textInput: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginRight: 10,
      paddingHorizontal: 8,
    },
    addButton: {
      flexDirection: 'row',
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    addButtonText: {
      flexDirection: 'row',
      color: 'white',
      fontSize: 18,
    },
  });

  const renderListItem = ({item}) => (
    <View style={styles.listItem}>
        <Text>{item}</Text>
      </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listToDo}
        renderItem={renderListItem}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ajouter une nouvelle tâche..."
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
