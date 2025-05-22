import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import NewsCard from "../../components/NewsCard";

const NewsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <NewsCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
