import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function TechCard() {
  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/images/mobile.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>iPhone 15 new features</Text>
      <Text style={styles.content}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.lamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 12,
    backgroundColor: "#f1f1f1",
    borderRadius: 16,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
  content: {
    fontSize: 14,
    color: "#333",
  },
});
