import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function VideoCard({ title }: { title: string }) {
  return (
    <View style={styles.card}>
      <Ionicons name="play-circle-outline" size={48} color="gray" />
      <Text style={styles.caption}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    margin: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    marginTop: 6,
    fontSize: 12,
    color: "#444",
    textAlign: "center",
  },
});
