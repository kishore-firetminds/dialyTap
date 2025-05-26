import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  navigation: any;
}

const DiscoverScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discover</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Content */}
      <View style={styles.item}>
        <Icon name="trophy-outline" size={32} color="#333" />
        <Text style={styles.itemText}>Contests</Text>
      </View>

      <View style={styles.item}>
        <Icon name="clipboard-outline" size={32} color="#333" />
        <Text style={styles.itemText}>Surveys</Text>
      </View>

      <View style={styles.item}>
        <Icon name="folder-lock-outline" size={32} color="#333" />
        <Text style={styles.itemText}>Briefs</Text>
      </View>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
    gap: 20,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
});
