import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Quizzes = () => {
  return (
    <View style={styles.container}>
      <Text>Quizzes Screen</Text>
    </View>
  );
};

export default Quizzes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
