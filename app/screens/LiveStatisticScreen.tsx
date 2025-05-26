// LiveStatisticsScreen.tsx

import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LiveStatisticsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.liveBadge}>LIVE</Text>
        <Text style={styles.headerText}>Statistics</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Scores Section */}
        <Text style={styles.sectionTitle}>Scores</Text>

        {/* Cricket Box */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.subHeader}>Cricket</Text>
            <Icon name="open-in-new" size={14} color="#444" />
          </View>
          <View style={styles.cricketRow}>
            <Image
              source={{ uri: "https://flagcdn.com/in.svg" }}
              style={styles.flag}
            />
            <Text style={styles.scoreText}>89/5</Text>
            <Text style={styles.oversText}>(14)</Text>
            <Text style={styles.vsText}>IND v/s SA</Text>
            <Image
              source={{ uri: "https://flagcdn.com/za.svg" }}
              style={styles.flag}
            />
            <View style={styles.liveTag}>
              <Text style={styles.liveText}>LIVE</Text>
            </View>
          </View>
          <Text style={styles.players}>• S.Yadav • D.karthik</Text>
          <Text style={styles.players}>• L.Ngid</Text>
          <TouchableOpacity>
            <Text style={styles.link}>click to read NEWS on this</Text>
          </TouchableOpacity>
          <Text style={styles.more}>more {">"}</Text>
        </View>

        {/* Football Box */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.subHeader}>Foot-ball</Text>
            <Icon name="open-in-new" size={14} color="#444" />
          </View>
          <Text style={styles.match}>Arsenal FC</Text>
          <Text style={styles.match}>Real Madrid FC</Text>
          <Text style={styles.tomorrow}>Tomorrow</Text>
        </View>

        {/* Market Section */}
        <Text style={styles.sectionTitle}>Market</Text>
        <View style={styles.card}>
          <View style={styles.marketRow}>
            <Icon name="chart-bar" size={28} />
            <Text style={styles.marketItem}>Stock Market</Text>
            <Icon name="chevron-right" size={22} />
          </View>
          <View style={styles.marketRow}>
            <Icon name="trending-up" size={28} />
            <Text style={styles.marketItem}>NIFTY</Text>
            <Text style={styles.niftyChange}>+64</Text>
            <Icon name="chevron-right" size={22} />
          </View>
          <Text style={styles.more}>more {">"}</Text>

          <TouchableOpacity>
            <Text style={styles.link}>
              👁 click to read updated NEWS on Market
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="newspaper" size={24} />
        <Icon name="video" size={24} />
        <Icon name="fire" size={24} />
        <Icon name="briefcase" size={24} />
        <Icon name="laptop" size={24} />
      </View>
    </SafeAreaView>
  );
};

export default LiveStatisticsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#0066cc",
    alignItems: "center",
  },
  liveBadge: {
    backgroundColor: "red",
    color: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    marginRight: 8,
  },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  content: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeader: { fontWeight: "600", fontSize: 16 },
  cricketRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  flag: { width: 24, height: 16, marginHorizontal: 4 },
  scoreText: { fontWeight: "bold", fontSize: 16 },
  oversText: { color: "#555", marginLeft: 4 },
  vsText: { flex: 1, textAlign: "center", fontWeight: "600" },
  liveTag: {
    backgroundColor: "red",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  liveText: { color: "#fff", fontSize: 12 },
  players: { fontSize: 12, marginVertical: 2 },
  link: {
    color: "#0066cc",
    textDecorationLine: "underline",
    fontSize: 12,
    marginTop: 8,
  },
  more: { color: "#444", fontSize: 12, marginTop: 6, alignSelf: "flex-end" },
  match: { fontSize: 14, marginVertical: 2 },
  tomorrow: { color: "red", fontWeight: "bold", textAlign: "right" },
  marketRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  marketItem: { flex: 1, marginLeft: 8 },
  niftyChange: { color: "green", marginRight: 6 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
