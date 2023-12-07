import { StyleSheet, Text, View, ScrollView, StatusBar, Image } from "react-native"
import React from "react"
import MyButton from "../components/Button"
import MyTextInput from "../components/TextInput"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { supabase } from "../components/config/SupabaseClient"

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)

  const registerNavigate = () => {
    navigation.navigate("Register")
  }

  const navigateToMainApp = 

    async () => {
      setLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: Password,
      })
      console.log(data);
      setLoading(false)
      if (error) {
        alert(error.message)
      } else {
        navigation.navigate("MainApp")
      }
    }
    // navigation.navigate("MainApp")
    
  

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
          <MyTextInput onChangeText={setEmail} placeholder="Email" />
          <MyTextInput onChangeText={setPassword} placeholder="Password" isPassword={true} />
        </View>

        <View style={{ marginTop: 40 }}>
          <MyButton onPress={navigateToMainApp} text="Login" color={loading? "green" : "#FF5555"} />
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
