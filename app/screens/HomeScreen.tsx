// screens/HomeScreen.tsx
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../types/types";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen">;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to News"
        onPress={() => navigation.navigate("NewsScreen")}
      />
    </View>
  );
}
