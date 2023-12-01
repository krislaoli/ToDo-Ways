import { StyleSheet, Text, TouchableOpacity, Image } from "react-native"

const TabItem = ({ onPress, onLongPress, isFocused, label }) => {
  const icons = () => {
    if (label === "ListTodo")
      return isFocused ? (
        <Image
          style={styles.imageClipboard}
          source={require("../../public/icons/clipboard_list_active.png")}
        />
      ) : (
        <Image
          style={styles.imageClipboard}
          source={require("../../public/icons/clipboard_list.png")}
        />
      )

    if (label === "AddCategory")
      return isFocused ? (
        <Image
          style={styles.imageTaskList}
          source={require("../../public/icons/task_list_add_active.png")}
        />
      ) : (
        <Image
          style={styles.imageTaskList}
          source={require("../../public/icons/task_list_add.png")}
        />
      )

    if (label === "AddList")
      return isFocused ? (
        <Image
          style={styles.imageCategory}
          source={require("../../public/icons/category_active.png")}
        />
      ) : (
        <Image
          style={styles.imageCategory}
          source={require("../../public/icons/category.png")}
        />
      )
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      {icons()}
      <Text style={styles.text}></Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 20,
  },

  imageClipboard: {
    width: 24,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  imageTaskList: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
  imageCategory: {
    width: 35,
    height: 35,
    marginTop: 5,
  },
})
