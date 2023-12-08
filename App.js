import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {Icon } from 'react-native-elements';
import Modal from 'react-native-modal';

const App = () => {
  const [newItemText, NewItem] = useState('');
  const [listToDo, ListToDo] = useState([
    "Passer Master",
    "Rester en Vie",
    "Aller à la salle",
    "Trouver un appart",
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:20,
      marginTop:20
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      fontSize: 22,
    },
    listItemText: {
      fontSize: 22,
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
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    addButtonText: {
      color: 'white',
      fontSize: 18,
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      color: 'white',
    },
    modalButtons: {
      flexDirection: 'row',
    },
    modalButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });

  const renderListItem = ({ item, index }) => (
    <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item}</Text>
      <TouchableOpacity onPress={() => DeleteModal(index)}>
        <Icon name="delete" type="material" color="red" />
      </TouchableOpacity>
    </View>
  );

  const AddItem = () => {
    if (newItemText.trim() !== '') {
      ListToDo([...listToDo, newItemText.trim()]);
      NewItem('');
    }
  };

  const DeleteModal = (index) => {
    setItemToDelete(index);
    setIsModalVisible(true);
  };

  const DeleteItem = () => {
    if (itemToDelete !== null) {
      setIsModalVisible(false);

      const updatedList = listToDo.filter((_, i) => i !== itemToDelete);
      ListToDo(updatedList);

      setItemToDelete(null);
    }
  };

  const Cancel = () => {
    setIsModalVisible(false);
    setItemToDelete(null);
  };

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
          value={newItemText}
          onChangeText={(text) => NewItem(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={AddItem}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onBackdropPress={Cancel}
        onBackButtonPress={Cancel}
        animationIn="fadeIn"
        animationOut="fadeOut"
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Voulez-vous vraiment supprimer cet objectif sale merde ?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalButton} onPress={Cancel}>
              <Text style={styles.modalButtonText}>Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={DeleteItem}>
              <Text style={styles.modalButtonText}>Supprimer</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;