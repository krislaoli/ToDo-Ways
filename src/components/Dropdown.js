import React, { useState } from "react"
import { View, Picker, StyleSheet } from "react-native"

const MyDropdown = ({ data, onValueChange, label }) => {
  const [selectedValue, setSelectedValue] = useState("")

  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category)),
  )

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue)
          onValueChange(itemValue)
        }}
      >
        <Picker.Item label={label} value="" />
        {uniqueCategories.map((category) => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 20,
    border: "none",
    width: 120,
  },
})

export default MyDropdown
