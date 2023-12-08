import React, { useState,useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditItem = ({Cancel, initialValue,EditItemIndex}) => {
  const [editedText, setEditedText] = useState(initialValue);
  useEffect(() => {
    setEditedText(initialValue);
  }, [initialValue]);
  const styles = StyleSheet.create({
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width:'80%',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 8,
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


  return (
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Modifier l'élément :</Text>
        <TextInput
          style={styles.input}
          value={editedText}
          onChangeText={(text) => setEditedText(text)}
        />
        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.modalButton} onPress={Cancel}>
            <Text style={styles.modalButtonText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => EditItemIndex(editedText)}>
            <Text style={styles.modalButtonText}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};



export default EditItem;
