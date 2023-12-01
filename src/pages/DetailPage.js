import { ScrollView, StyleSheet, Text, View, ViewBase } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"

const Detail = () => {
  return (
    <ScrollView backgroundColor={"#fff"}>
      <View style={styles.container}>
        <Text style={styles.studyText}>Study</Text>
        <View style={styles.rounded}></View>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 25 }}>
          Study - Golang
        </Text>

        <View>
          <Text
            style={{ color: "red", fontSize: 12, color: "grey", marginTop: 40 }}
          >
            <Text>
              Learn Golang to improve fundamental and familiarize width coding.
              {"\n"}
              {"\n"}
              Adventages of Go
              {"\n"}
              Go has adventages over other languages, including.
              {"\n"}
              {"\n"}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              deserunt quo, repellendus maxime vel voluptatibus deleniti et sed
              facere ullam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Veniam distinctio consequuntur, beatae aliquid debitis
              corrupti animi deserunt odio ullam voluptate?. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repellendus culpa nam,
              debitis quod quisquam expedita.
              {"\n"}
              {"\n"}
              Listing Material :{"\n"}
              {"\n"}
              1. Installation
              {"\n"}
              2. Setup Go Modules
              {"\n"}
              3. Setup Gopath & Workspace
              {"\n"}
              4. Go Command
              {"\n"}
              5. Hello World
              {"\n"}
              6. Variable
              {"\n"}
              7. Tipe Data Konstanta
              {"\n"}
              8. Operator
              {"\n"}
              9. Condition
              {"\n"}
              10. Loops
              {"\n"}
              {"\n"}
              <Icon name="calendar" size={15} color="grey" />
              {""}
              {""} 29 November 2023
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 330,
    backgroundColor: "#DAEFFF",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 120,
    borderRadius: 8,
  },
  studyText: {
    position: "absolute",
    top: 8,
    right: 20,
    backgroundColor: "skyblue",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 5,
  },
  rounded: {
    width: 30,
    height: 30,
    backgroundColor: "#D9D9D9",
    position: "absolute",
    top: 50,
    right: 30,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 100,
  },
})
