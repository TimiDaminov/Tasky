import React from 'react'
import { Modal, View, TextInput, Button, StyleSheet } from "react-native"
import MyButton from './UI/MyButton'

const ModalAddTask = ({visibleModal,currentNote,setCurrentNote,addNote,setVisibleModal}) => {
  return (
        <Modal animationType="slide" transparent={false} visible={visibleModal}>
        <View style={styles.modalContainer}>
        <View style={styles.input}>
        <TextInput
            value={currentNote}
            onChangeText={(text) => setCurrentNote(text)}
            placeholder="Your Task..."
            style={styles.noteAddInput}
                  />
        </View>
        <View style={styles.buttons}>
        <View style={styles.addButton}>
            <MyButton onPress={addNote}>ADD</MyButton>
                  </View>
        <View style={styles.closeButton}>         
            <MyButton onPress={() => setVisibleModal(false)} >Close</MyButton>
        </View>  
        </View> 
        </View>
      </Modal>
  )
}

export default ModalAddTask

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        padding: 25,
        backgroundColor: "#F8F4EA",
    },
    input: {
     alignItems:"flex-start"   
    },
    buttons: {
        flexDirection: "row",
    },
    addButton: {
        marginRight:10
    },
    closeButton: {
        marginLeft: 10
    },
    noteAddInput: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    width: 300,
    marginBottom: 10,
  },
})