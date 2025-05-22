import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const NewsCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/images/food.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>3 Health Benefits</Text>
      <Text style={styles.description}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Lamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Text>
      <Image
        source={require("../assets/images/logo1.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Top destinations in this Winter</Text>
      <Text style={styles.description}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.lamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Text>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    margin: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  image: {
    width: 372.20513916015625,
    height: 343,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: "OpenSans-SemiBold",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontFamily: "OpenSans-Regular",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
    color: "#000000",
    textAlign: "center",
  },
});
