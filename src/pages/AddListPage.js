import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import MyTextInput from "../components/TextInput"

const AddList = () => {
  return (
    <ScrollView backgroundColor={"#F5F5F5"}>
      <View style={styles.container}>
        <Text style={{ marginTop: 30, fontSize: 25, fontWeight: "bold" }}>
          Add List
        </Text>
        <MyTextInput placeholder="Name" />
        <MyTextInput placeholder="Category" />
        <MyTextInput placeholder="Chose Date" />
        <MyTextInput placeholder="Category" />
        {/* <MyDropdown /> */}
        {/* <DateInput /> */}
        <View style={{ marginTop: 30 }}>
          <MyButton text="Add List" color="orangered" />
        </View>
      </View>
    </ScrollView>
  )
}

export default AddList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
})
