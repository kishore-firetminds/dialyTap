import { Entypo, Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Link, useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignIn() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Entypo name="open-book" size={48} color={colors.primary} />
      <Text style={{ ...styles.logoText, color: colors.primary }}>
        DailyTapp
      </Text>

      {/* Inputs */}
      <TextInput placeholder="Phone / Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      {/* Login Button */}
      <TouchableOpacity
        style={{ ...styles.loginBtn, backgroundColor: colors.primary }}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* Sign up */}
      <Text style={styles.signUpText}>
        Don't have an account?{" "}
        <Link href="/signup" asChild>
          <Text style={{ ...styles.signUpLink, color: colors.primary }}>
            Sign Up
          </Text>
        </Link>
      </Text>

      {/* Guest Login */}
      <TouchableOpacity
        style={styles.guestBtn}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={{ ...styles.guestText, color: colors.primary }}>
          Skip & Login as Guest
        </Text>
        <Feather name="arrow-right-circle" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 80,
    backgroundColor: "white",
    alignItems: "center",
  },
  logoText: {
    fontSize: 32,
    fontFamily: "ComfortaaBold",
    color: "#0d6efd",
    fontWeight: "600",
    marginBottom: 40,
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
  loginBtn: {
    width: "100%",
    backgroundColor: "#0d6efd",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  forgot: {
    fontSize: 14,
    color: "#444",
    marginTop: 10,
    fontFamily: "Comfortaa",
  },
  signInWith: {
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 14,
  },
  socialIcons: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 30,
  },
  signUpText: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "Comfortaa",
  },
  signUpLink: {
    color: "#0d6efd",
    fontWeight: "500",
    fontFamily: "ComfortaaBold",
  },
  guestBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    position: "absolute",
    bottom: 40,
    right: 20,
  },
  guestText: {
    color: "#0d6efd",
    fontSize: 16,
    fontWeight: "700",
  },
});
