import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const videos = new Array(8).fill(null); // Dummy array of 8 items

export default function VideosScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity key={index} style={styles.videoItem}>
      <Image
        source={require("../../assets/images/Vector.png")}
        style={styles.videoIcon}
      />
      <Text style={styles.videoText}>Video alt text here</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Videos</Text>
        <View style={{ width: 24 }} /> {/* Spacer for balance */}
      </View>

      {/* Grid of Videos */}
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.videoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  videoList: {
    padding: 16,
  },
  videoItem: {
    width: "47%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    margin: "1.5%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  videoIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
  },
  videoText: {
    textAlign: "center",
    fontSize: 12,
    color: "#555",
  },
});
