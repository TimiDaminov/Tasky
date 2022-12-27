import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Modal } from "react-native";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);

  const addNote = () => {
    setNotes([...notes, currentNote]);
    setVisibleModal(false);
    setCurrentNote("");
  };

  return (
    <View style={styles.appContainer}>
      <Button onPress={() => setVisibleModal(true)} title="Add Note" />
      <Button onPress={() => setNotes([])} title="clear" />
      {notes.map((note, index) => (
        <View key={index}>
          <Text style={styles.notesItem}>
            {index + 1}){note}
          </Text>
        </View>
      ))}

      {/* Modal Window  */}

      <Modal animationType="slide" transparent={false} visible={visibleModal}>
        <View style={styles.modalContainer}>
          <TextInput
            value={currentNote}
            onChangeText={(text) => setCurrentNote(text)}
            placeholder="Your Task..."
            style={styles.noteAddInput}
          />
          <Button onPress={() => setVisibleModal(false)} title="close" />
          <Button onPress={addNote} title="Add note" />
        </View>
      </Modal>

      {/* modal window ends */}
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  notesItem: {
    fontSize: 28,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noteAddInput: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
});
