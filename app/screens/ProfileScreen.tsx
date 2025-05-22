import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ProfileScreen() {
  const [phone, setPhone] = useState("+91 9876543210");

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Profile</Text>
        <Icon name="settings-outline" size={24} color="#fff" />
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>@news_reader</Text>
        <View style={styles.verifiedContainer}>
          <Text style={styles.badge}>N</Text>
          <Text style={styles.verifiedText}>Verified User</Text>
        </View>
        <Text style={styles.changeImage}>Change Image</Text>
      </View>

      {/* Info Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name :</Text>
        <Text style={styles.staticText}>News Reader</Text>

        <Text style={styles.label}>Phone :</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Location :</Text>
        <Text style={styles.staticText}>Delhi</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },

  profileSection: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  username: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  verifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  badge: {
    backgroundColor: "#007AFF",
    color: "white",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: "bold",
  },
  verifiedText: {
    marginLeft: 4,
    fontSize: 13,
    color: "#555",
  },
  changeImage: {
    color: "#007AFF",
    marginTop: 6,
    fontSize: 14,
  },

  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 14,
    marginTop: 12,
    color: "#444",
  },
  staticText: {
    fontSize: 16,
    paddingVertical: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 14,
    margin: 24,
    borderRadius: 6,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutText: {
    textAlign: "center",
    fontSize: 15,
    color: "#666",
    textDecorationLine: "underline",
  },
});
