import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import MyTextInput from "../components/TextInput";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { CheckBox } from "react-native";
import MyDropdown from "../components/Dropdown";
import { supabase } from "../components/config/SupabaseClient";

const ListTodo = () => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const fetchData = async () => {
    const { data, error } = await supabase.from("Ways_Todo").select();
    setData(data);
    console.log(data);
  };

  const navigateToDetail = () => {
    navigation.navigate("Detail");
  };

  const toggleSelection = (index) => {
    const newSelectedItems = [...selectedItems];
    if (newSelectedItems.includes(index)) {
      newSelectedItems.splice(newSelectedItems.indexOf(index), 1);
    } else {
      newSelectedItems.push(index);
    }
    setSelectedItems(newSelectedItems);
  };

  const filteredData = data.filter((item) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseCategory = item.category.toLowerCase();

    return (
      (lowerCaseTitle.includes(lowerCaseSearchText) ||
        lowerCaseCategory.includes(lowerCaseSearchText)) &&
      (selectedCategory === "" || item.category === selectedCategory)
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

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
          <MyTextInput placeholder="Search List ......" />
          {/*  */}
          <View style={{ flexDirection: "row", gap: 8 }}>
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
          {data.length > 0 &&
            filteredData.map((item, index) => (
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
                  {selectedItems.includes(index)
                    ? `✓ ${item.title}`
                    : item.title}
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
                  {""} {item.date}
                </Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ListTodo;

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
    backgroundColor: "red",
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
});
