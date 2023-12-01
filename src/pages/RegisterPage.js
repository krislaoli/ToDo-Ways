import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
} from "react-native"
import React from "react"
import MyButton from "../components/Button"
import MyTextInput from "../components/TextInput"
import { useNavigation } from "@react-navigation/native"

const RegisterPage = () => {
  const navigation = useNavigation()

  const navigateLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <ScrollView style={{ backgroundColor: "#EEE2DE" }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Image
            source={require("../public/login.png")}
            style={{ width: 270, height: 190, marginTop: -50, marginBottom: 30 }}
          />
        </View>

        <Text style={{ marginTop: 0, fontWeight: "bold", fontSize: 25 }}>
          Register
        </Text>
        <View style={{ marginTop: 0 }}>
          <MyTextInput placeholder="Email" />
          <MyTextInput placeholder="Name" />
          <MyTextInput placeholder="Password" isPassword={true} />
        </View>

        <View style={{ marginTop: 40 }}>
          <MyButton onPress={navigateLogin} text="Register" color="#FF5555" />
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>
              Joined us before? {""} {""}
              <Text
                onPress={navigateLogin}
                style={{
                  color: "#FF5555",
                  fontWeight: "bold",
                  textDecorationStyle: "dashed",
                }}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default RegisterPage

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
