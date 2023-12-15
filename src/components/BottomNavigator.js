import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'; 

const Tab = createBottomTabNavigator();

// Screens
const HomeScreen = () => <Text>Home Screen</Text>;
const ProfileScreen = () => <Text>Profile Screen</Text>;

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListTodo" component={HomeScreen} />
      <Tab.Screen name="AddCategory" component={ProfileScreen} />
      <Tab.Screen name="AddList" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
