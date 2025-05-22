import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Video = () => {
  return (
    <View style={styles.container}>
      <Text>Video Screen</Text>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
