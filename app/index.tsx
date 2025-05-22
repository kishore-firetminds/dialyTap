import { AntDesign, Entypo } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: colors.primary }}>
      <View style={styles.content}>
        {/* Logo */}
        <Entypo name="open-book" size={100} color="white" />

        {/* App Title */}
        <Text style={styles.title}>DailyTapp</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.subtitle}>The NextGen short NEWS app</Text>

        <Link href="/signin" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={{ ...styles.buttonText, color: colors.primary }}>
              Get started <AntDesign name="arrowright" size={18} />
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'ComfortaaBold',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  subtitle: {
    color: 'white',
    marginBottom: 12,
    fontSize: 16,
    fontFamily: 'Comfortaa',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
