import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const [phone, setPhone] = useState("+91 9876543210");
  const [name, setName] = useState("News Reader");
  const [location, setLocation] = useState("Delhi");

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () => {
            console.log("User logged out");
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={24}
          color="#fff"
          onPress={() => navigation.goBack()}
        />
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
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Phone :</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Location :</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Icon name="power" size={16} color="#555" style={styles.logoutIcon} />
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
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
  },
  verifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  badge: {
    backgroundColor: "#007AFF",
    color: "white",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 20,
  },
  verifiedText: {
    marginLeft: 5,
    fontSize: 13,
    color: "#555",
    marginBottom: 20,
  },
  changeImage: {
    color: "#007AFF",
    marginTop: 6,
    fontSize: 14,
    marginBottom: 40,
    textDecorationLine: "underline",
  },

  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  label: {
    fontFamily: "Comfortaa",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 30,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 14,
    marginHorizontal: 24,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutText: {
    fontFamily: "Comfortaa",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "center",
    borderRadius: 20,
    marginTop: 20,
    textDecorationLine: "none",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  logoutIcon: {
    marginRight: 6,
    marginTop: 16,
  },
});
