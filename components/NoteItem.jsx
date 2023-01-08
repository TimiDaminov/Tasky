import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
const NoteItem = ({index,note}) => {
  return (
    <View key={index}>
          <Text style={styles.notesItem}>
            {index + 1}){note.text}
          </Text>
    </View>
  )
}

export default NoteItem

const styles = StyleSheet.create({
      notesItem: {
    fontSize: 28,
    backgroundColor: "#ECE8DD",
    marginTop: 10,
  },
})