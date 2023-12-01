import React from "react"
import { TextInput } from "react-native"

const MyTextInput = (props) => {
  return (
    <TextInput
      secureTextEntry={props.isPassword}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        color: "white",
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 20,
        elevation: 5,
        
      }}
    ></TextInput>
  )
}

export default MyTextInput
