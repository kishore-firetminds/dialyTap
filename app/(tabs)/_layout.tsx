import { TabBar } from "@/components/TabBar";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

const TabLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "news",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="news" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: "shorts",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="video" size={24} color={"black"} />
          ),
        }}
      />
      <Tabs.Screen
        name="quizzes"
        options={{
          title: "quizzes",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="controller-play" size={24} color={"black"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tech"
        options={{
          title: "tech",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="laptop" size={24} color={"black"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Statistic"
        options={{
          title: "Live Statistic",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="Statistic" size={24} color={"black"} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="Discover" size={24} color={"black"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
