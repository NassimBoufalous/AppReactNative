import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeleteItem = ({Cancel,Delete}) => {
  const styles = StyleSheet.create({
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

  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>Voulez-vous vraiment supprimer cet objectif sale merde ?</Text>
      <View style={styles.modalButtons}>
        <TouchableOpacity style={styles.modalButton} onPress={Cancel}>
          <Text style={styles.modalButtonText}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={Delete}>
          <Text style={styles.modalButtonText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
);

};
export default DeleteItem;