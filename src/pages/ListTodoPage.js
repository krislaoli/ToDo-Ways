import { ScrollView, StyleSheet, Text, View, Image } from "react-native"
import MyTextInput from "../components/TextInput"
import Icon from "react-native-vector-icons/FontAwesome"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { CheckBox } from "react-native"
import MyDropdown from "../components/Dropdown"

const data = [
  {
    title: "Study - Golang",
    description:
      "Learn Golang to improve fundamentals and familiarize with coding",
    date: new Date(),
    backgroundColor: "#DAEFFF",
    category: "Study",
    color: "#81C8FF",
  },
  {
    title: "Home Work - Mathematics",
    description: "Do homework math probability",
    date: new Date(),
    backgroundColor: "#F1FFEF",
    category: "Home Work",
    color: "#FF8181",
  },
  {
    title: "Study - HTML",
    description:
      "Learn HTML to improve fundamentals and familiarize with coding",
    date: new Date(),
    backgroundColor: "#FFEFEF",
    category: "Study",
    color: "#81C8FF",
  },
  {
    title: "Study - Javascript",
    description:
      "Learn HTML to improve fundamentals and familiarize with coding",
    date: new Date(),
    backgroundColor: "#FEFFDA",
    category: "Study",
    color: "#81C8FF",
  },
]

const ListTodo = () => {
  const navigation = useNavigation()
  const [selectedItems, setSelectedItems] = useState([])
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("") // Tambahkan state kategori terpilih

  const navigateToDetail = () => {
    navigation.navigate("Detail")
  }

  // ! Seleksi Data
  const toggleSelection = (index) => {
    const newSelectedItems = [...selectedItems]
    if (newSelectedItems.includes(index)) {
      // Remove from selection
      newSelectedItems.splice(newSelectedItems.indexOf(index), 1)
    } else {
      // Add to selection
      newSelectedItems.push(index)
    }
    setSelectedItems(newSelectedItems)
  }

  // ! Memfilter Data
  const filteredData = data.filter((item) => {
    const lowerCaseSearchText = searchText.toLowerCase()
    const lowerCaseTitle = item.title.toLowerCase()
    const lowerCaseCategory = item.category.toLowerCase()

    return (
      (lowerCaseTitle.includes(lowerCaseSearchText) ||
        lowerCaseCategory.includes(lowerCaseSearchText)) &&
      (selectedCategory === "" || item.category === selectedCategory)
    )
  })

  return (
    <ScrollView backgroundColor={"#F5F5F5"}>
      <View style={styles.container}>
        <View style={styles.rounded}>
          <Image
            source={require("../public/img/profile.png")}
            style={{ width: 45, height: 40 }}
          />
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Hi Kris</Text>
        <Text style={{ fontSize: 12, color: "tomato" }}>
          {data.length} Lists
        </Text>

        <View style={{ marginTop: 20 }}>
          <MyTextInput
            placeholder="Search List ......"
            onChangeText={(text) => setSearchText(text)} // Tambahkan baris ini
          />
          {/* Dropdown */}
          <View style={{ flexDirection: "row", gap: 8 }}>
            <MyDropdown
              label="Choose Date"
              data={data}
              onValueChange={(category) => setSelectedCategory(category)}
            />
            <MyDropdown 
              label="category"
              data={data}
              onValueChange={(category) => setSelectedCategory(category)}
            />
            <MyDropdown
              label="status"
              data={data}
              onValueChange={(category) => setSelectedCategory(category)}
            />
          </View>
          <Icon name="search" size={20} color="gray" style={styles.icon} />
        </View>

        <View style={{ marginTop: 40 }}>
          {filteredData.map((item, index) => (
            <View
              key={index}
              style={{
                marginTop: 10,
                marginBottom: 5,
                padding: 12,
                borderRadius: 8,
                elevation: 4,
                backgroundColor: item.backgroundColor,
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  top: 10,
                  right: 20,
                  backgroundColor: item.color,
                  color: "rgba(255, 255, 255, 1)",
                  paddingHorizontal: 12,
                  justifyContent: "center",
                  paddingVertical: 4,
                  borderRadius: 5,
                  fontWeight: "bold",
                }}
              >
                {item.category}
                <CheckBox
                  value={selectedItems.includes(index)}
                  onValueChange={() => toggleSelection(index)}
                  style={{ top: 40 }}
                />
              </Text>

              <Text
                onPress={navigateToDetail}
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textDecorationLine: selectedItems.includes(index)
                    ? "line-through"
                    : "none",
                }}
              >
                {selectedItems.includes(index) ? `✓ ${item.title}` : item.title}
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 11,
                  marginTop: 5,
                  width: 220,
                  textDecorationLine: selectedItems.includes(index)
                    ? "line-through"
                    : "none",
                }}
              >
                {selectedItems.includes(index)
                  ? `✓ ${item.description}`
                  : item.description}
              </Text>

              <Text style={{ fontSize: 11, color: "grey", marginTop: 20 }}>
                <Icon name="calendar" size={12} color="grey" />
                {""}
                {""} {item.date.toDateString()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default ListTodo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    marginVertical: 30,
  },
  rounded: {
    width: 50,
    height: 50,
    backgroundColor: "skyblue",
    position: "absolute",
    top: 0,
    right: 30,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: 35,
    right: 20,
  },
})
