import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const { height, width } = Dimensions.get("window");

const HomeScreen = () => {
  const handleDrawerToggle = () => {
    console.log("Toggle drawer");
  };

  const handleNotifications = () => {
    console.log("Notifications tapped");
  };

  return (
    <View style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleDrawerToggle}>
          <Feather name="menu" size={24} color="#000000" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Feather name="book-open" size={24} color="#0d6efd" />
          <Text style={styles.logoText}>DailyTapp</Text>
        </View>

        <TouchableOpacity onPress={handleNotifications}>
          <Feather name="bell" size={22} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Vertical Paging Scroll */}
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {/* Screen 1 */}
        <View style={styles.fullPage}>
          <NewsCard
            image={require("../../assets/images/food.png")}
            title="3 Health Benefits"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.lamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </View>

        {/* Screen 2 */}
        <View style={styles.fullPage}>
          <NewsCard
            image={require("../../assets/images/logo1.png")}
            title="Top Winter Destinations"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.lamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

// Reusable NewsCard Component
const NewsCard = ({
  image,
  title,
  description,
}: {
  image: any;
  title: string;
  description: string;
}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    elevation: 2,
    borderBottomWidth: 0.3,
    borderBottomColor: "#cccccc",
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },
  logoText: {
    fontSize: 18,
    color: "#0d6efd",
    fontWeight: "600",
    marginLeft: 6,
  },
  fullPage: {
    height: height,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    paddingTop: 0,
  },
  card: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 0,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  image: {
    width: width - 60,
    height: 343,

    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    color: "#0d6efd",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontWeight: "400",
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    lineHeight: 22,
  },
});
