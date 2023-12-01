import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { TouchableOpacity } from "react-native"

const MyButton = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        paddingVertical: 12,
        // paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
        alignSelf: "auto",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MyButton
