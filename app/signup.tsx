import { useState } from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { useTheme } from "@react-navigation/native";

export default function SignUp() {
  const [accepted, setAccepted] = useState(false);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Entypo name="open-book" size={40} color={colors.primary} />
      <Text style={{ ...styles.logoText, color: colors.primary }}>
        DailyTapp
      </Text>

      <Text style={{ ...styles.heading, color: colors.primary }}>Sign Up</Text>

      {/* Input fields */}
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Phone" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      {/* Privacy Checkbox */}
      <Pressable
        style={styles.privacyRow}
        onPress={() => setAccepted(!accepted)}
      >
        <Feather
          name={accepted ? "check-circle" : "circle"}
          size={18}
          color="#888"
        />
        <Text style={styles.privacyText}>
          {"  "}By continuing you accept our Privacy Policy
        </Text>
      </Pressable>

      {/* Sign up Button */}
      <TouchableOpacity
        style={[
          { ...styles.signupBtn, backgroundColor: colors.primary },
          !accepted && { opacity: 0.5 },
        ]}
        disabled={!accepted}
      >
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingTop: 80,
    alignItems: "center",
  },
  logoText: {
    fontSize: 32,
    color: "#0d6efd",
    fontWeight: "600",
    marginBottom: 20,
    fontFamily: "ComfortaaBold",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    color: "#0d6efd",
    fontFamily: "ComfortaaBold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  privacyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    alignSelf: "flex-start",
  },
  privacyText: {
    fontSize: 12,
    color: "#555",
    fontFamily: "Comfortaa",
  },
  signupBtn: {
    backgroundColor: "#0d6efd",
    padding: 14,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  signupText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    fontFamily: "ComfortaaBold",
  },
  signInWith: {
    fontWeight: "500",
    marginBottom: 12,
  },
  socialIcons: {
    flexDirection: "row",
    gap: 20,
  },
});
