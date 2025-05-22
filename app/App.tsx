import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="News"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="book-outline" size={20} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Media"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="images-outline" size={20} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Trending"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="flame-outline" size={20} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Career"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="briefcase-outline" size={20} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Tech"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="hardware-chip-outline" size={20} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
