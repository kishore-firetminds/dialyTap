import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const { height } = Dimensions.get("window");

const MediaCard = () => {
  return (
    <View style={styles.hubbleCard}>
      <Image
        source={require("../../assets/images/stars.png")}
        style={styles.hubbleImage}
      />
      <Text style={styles.hubbleTitle}>New photos from Hubble Telescope</Text>

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
  );
};

export default MediaCard;

const styles = StyleSheet.create({
  hubbleCard: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
  },
  hubbleImage: {
    width: "100%",
    height: height * 0.6,
    borderRadius: 20,
  },
  hubbleTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    position: "absolute",
    bottom: height * 0.28,
    left: 32,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
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
