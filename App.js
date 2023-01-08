import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Modal } from "react-native";
import ModalAddTask from "./components/ModalAddTask";
import MyButton from "./components/UI/MyButton";
import "react-native-get-random-values";
import NoteItem from "./components/NoteItem";
import { v4 as uuid } from "uuid";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);

  const addNote = () => {
    if (currentNote.length > 0) {
      setNotes([...notes, { text: currentNote, id: uuid() }]);
      setVisibleModal(false);
      setCurrentNote("");
      console.log(notes);
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.appHead}>
        <MyButton onPress={() => setVisibleModal(true)}>Add Task</MyButton>
      </View>
      <MyButton onPress={() => setNotes([])}>Clear</MyButton>
      {notes.map((note, index) => (
        <NoteItem index={index} note={note} />
      ))}

      <ModalAddTask
        visibleModal={visibleModal}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        setVisibleModal={setVisibleModal}
        addNote={addNote}
      />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#F8F4EA",
    padding: 10,
  },

  appHead: {
    paddingTop: 60,
    alignItems: "flex-end",
    paddingRight: 20,
    backgroundColor: "#F8F4EA",
    paddingBottom: 20,
  },
});
