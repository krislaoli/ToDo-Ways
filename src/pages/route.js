import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import {
  AddCategory,
  AddList,
  Detail,
  Home,
  ListTodo,
  Login,
  Register,
 
} from "."
import BottomNavigator from "../components/BottomNavigator/BottomBar"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    // navbar bottom
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomNavigator {...props} />}
    >
      <Tab.Screen
        name="ListTodo"
        component={ListTodo}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddCategory"
        component={AddCategory}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddList"
        component={AddList}
        options={{ headerShown: false }}
      />
    </Tab.Navigator> 
  )
}

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="AddCategory">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Routes
