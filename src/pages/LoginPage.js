import { StyleSheet, Text, View, ScrollView, StatusBar, Image } from "react-native"
import React from "react"
import MyButton from "../components/Button"
import MyTextInput from "../components/TextInput"
import { useNavigation } from "@react-navigation/native"

const Login = () => {
  const navigation = useNavigation()

  const registerNavigate = () => {
    navigation.navigate("Register")
  }

  const navigateToMainApp = () => {
    navigation.navigate("MainApp")
  }

  return (
    <ScrollView style={{ backgroundColor: "#EEE2DE" }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
      <View style={styles.centeredContent}>
  <Image
    source={require("../public/login_register_logo.png")}
    style={{ width: 270, height: 190, marginTop: -50, marginBottom: 30 }}
  />
</View>


        <Text style={{ marginTop: 0, fontWeight: "bold", fontSize: 25 }}>Login</Text>
        <View style={{ marginTop: 0, }}>
          <MyTextInput placeholder="Email" />
          <MyTextInput placeholder="Password" isPassword={true} />
        </View>

        <View style={{ marginTop: 40 }}>
          <MyButton onPress={navigateToMainApp} text="Login" color="#FF5555" />
          <View style={{ alignItems: "center", marginTop: 20, }}>
            <Text style={{ fontWeight: "500", }}>
              New Users ? {""} {""}
              <Text
                onPress={registerNavigate}
                style={{
                  fontWeight: "bold",
                  color: "#FF5555",
                  textDecorationStyle: "dashed",
                  fontStyle: "",
                }}
              >
                Register
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  centeredContent: {
    marginTop: 140,
    alignItems: "center",
  },
})
