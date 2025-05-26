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
          <TechCard
            image={require("../../assets/images/mobile.png")}
            title="Marine Pollution"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.lamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </View>

        {/* Screen 2 - Tech Card */}
        <View style={styles.fullPage}>
          <View style={styles.mediaCard}>
            <Image
              source={require("../../assets/images/tech2.png")}
              style={styles.hubbleImage}
            />
            <Text style={styles.hubbleTitle}>
              Awesome Designed phones in Market
            </Text>

            <View style={styles.footer}>
              <View style={styles.profileSection}>
                <View style={styles.avatar} />
                <View>
                  <Text style={styles.name}>Jane Cooper</Text>
                  <View style={styles.subInfo}>
                    <Feather name="eye" size={14} color="#999" />
                    <Text style={styles.infoText}>76</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.infoText}>17 Sept 2022</Text>
                  </View>
                </View>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.iconButton}>
                  <Feather name="thumbs-up" size={18} color="#0d6efd" />
                  <Text style={styles.iconLabel}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Feather name="share-2" size={18} color="#0d6efd" />
                  <Text style={styles.iconLabel}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const TechCard = ({
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

// Styles
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
  // Tech Card Styles
  mediaCard: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
  },
  hubbleImage: {
    width: "100%",
    height: height * 0.6,
    borderRadius: 20,
    marginTop: 30,
  },
  hubbleTitle: {
    fontFamily: "Open Sans",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    marginTop: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 140,
    paddingHorizontal: 4,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  subInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  infoText: {
    fontSize: 12,
    color: "#999",
    marginLeft: 4,
  },
  dot: {
    color: "#999",
    marginHorizontal: 4,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    alignItems: "center",
    gap: 2,
  },
  iconLabel: {
    fontSize: 12,
    color: "#0d6efd",
  },
});
