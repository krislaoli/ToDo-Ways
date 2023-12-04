import React from "react"
import Routes from "./src/pages/route"
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App
