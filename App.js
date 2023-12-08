import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import TodoList from './List';
import AddTodo from './AddItem';
import DeleteItems from './DeleteItem';
import Edit from './EditItem';

const App = () => {
  const [listToDo, ListToDo] = useState([
    "Passer Master",
    "Rester en Vie",
    "Aller à la salle",
    "Trouver un appart",
  ]);
  const [checkedItems, CheckedItem] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [textToEdit, TextToEdit] = useState(null);
  const image = {uri: 'https://ih1.redbubble.net/image.319857212.7984/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg'};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      marginTop: 20,
    },
    image: {
      flex: 1,
      resizeMode:"cover",
      justifyContent: 'center',
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      color: 'white',
    },
  });

  const DeleteModal = (index) => {
    setItemToDelete(index);
    setIsModalVisible(true);
  };
  const EditModal = (index) => {
    setItemToEdit(index);
    setIsModal2Visible(true);
  };

  const EditItem = (newText) => {

    if (itemToEdit !== null) {
      TextToEdit(textToEdit)
      console.log(textToEdit)
      setIsModal2Visible(false);
      const updatedList = [...listToDo];
      updatedList[itemToEdit] = newText;
      ListToDo(updatedList);
      console.log(updatedList[itemToEdit])
      setIsModal2Visible(false);

      setItemToEdit(null)
    }
  };

  const DeleteItem = () => {
    if (itemToDelete !== null) {
      setIsModalVisible(false);

      const updatedList = listToDo.filter((_, i) => i !== itemToDelete);
      ListToDo(updatedList);
      setItemToDelete(null);
      if (checkedItems.includes(itemToDelete)) {
        const updatedCheckedItems = checkedItems.filter((item) => item !== itemToDelete);
        CheckedItem(updatedCheckedItems);
      }
    }
  };

  const Cancel = () => {
    setIsModalVisible(false);
    setIsModal2Visible(false);
    setItemToEdit(null);
    setItemToDelete(null);
  };

  const CheckboxPress = (index) => {
    const newCheckedItems = [...checkedItems];
    if (newCheckedItems.includes(index)) {
      newCheckedItems.splice(newCheckedItems.indexOf(index), 1);
    } else {
      newCheckedItems.push(index);
    }
    CheckedItem(newCheckedItems);
  };

  return (
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <TodoList listToDo={listToDo} onDeleteItem={DeleteModal} checkedItems={checkedItems} CheckboxPress={CheckboxPress} onEditItem={EditModal} />
      <AddTodo  listToDo={listToDo} onAddItem={ListToDo}/>
      </ImageBackground>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onBackdropPress={Cancel}
        onBackButtonPress={Cancel}
        animationIn="fadeIn"
        animationOut="fadeOut"
      >
        <DeleteItems Cancel={Cancel} Delete={DeleteItem} />
      </Modal>
      <Modal
        isVisible={isModal2Visible}
        style={styles.modal}
        onBackdropPress={Cancel}
        onBackButtonPress={Cancel}
        animationIn="fadeIn"
        animationOut="fadeOut"
      >
        <Edit Cancel={Cancel} EditItemIndex={EditItem} initialValue={listToDo[itemToEdit]}/>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;
