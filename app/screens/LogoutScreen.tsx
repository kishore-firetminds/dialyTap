// screens/BookmarksScreen.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LogoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logout Screen</Text>
    </View>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
