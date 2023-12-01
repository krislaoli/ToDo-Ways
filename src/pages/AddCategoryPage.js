import { ScrollView, StyleSheet, Text, View } from "react-native"
import MyTextInput from "../components/TextInput"
import MyButton from "../components/Button"

const AddCategory = () => {
  return (
    <ScrollView backgroundColor={"#F5F5F5"}>
      <View style={styles.container}>
        <Text style={{ marginTop: 30, fontSize: 25, fontWeight: "bold" }}>
          Add Category
        </Text>
        <MyTextInput placeholder="Name" />

        <View style={{ marginTop: 20 }}>
          <MyButton text="Add Category" color="orangered" />
        </View>

        <Text style={{ marginTop: 90, fontSize: 25, fontWeight: "bold" }}>
          List Category
        </Text>
        <View style={{ flexDirection: "row", gap: 5, marginTop: 25 }}>
          <Text
            style={{
              backgroundColor: "skyblue",
              color: "white",
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderRadius: 8,
            }}
          >
            Study
          </Text>
          <Text
            style={{
              backgroundColor: "tomato",
              color: "white",
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderRadius: 8,
            }}
          >
            Home Work
          </Text>
          <Text
            style={{
              backgroundColor: "orange",
              color: "white",
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderRadius: 8,
            }}
          >
            Workout
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default AddCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
})
