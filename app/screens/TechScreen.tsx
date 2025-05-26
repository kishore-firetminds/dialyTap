import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import TechCard from "../../components/TechCard";

export default function TechScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TechCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
