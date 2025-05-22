// components/FlipCard.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";

// Define the props type
type FlipCardProps = {
  title: string;
  description: string;
  image: string; // or ImageSourcePropType if you're passing require()
};

const { height } = Dimensions.get("window");

export default function FlipCard({ title, description, image }: FlipCardProps) {
  const rotate = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
    rotate.value = withTiming(flipped ? 0 : 180, { duration: 500 });
  };

  const frontStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: `${interpolate(rotate.value, [0, 180], [0, 180])}deg`,
      },
    ],
    backfaceVisibility: "hidden",
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: `${interpolate(rotate.value, [0, 180], [180, 360])}deg`,
      },
    ],
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  }));

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={styles.card}>
        <Animated.View style={[styles.side, frontStyle]}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </Animated.View>
        <Animated.View style={[styles.side, backStyle]}>
          <Text style={styles.description}>{description}</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: height - 100,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  side: {
    width: "100%",
    height: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: "60%",
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: "ComfortaaBold",
    textAlign: "center",
    color: "#0d6efd",
  },
  description: {
    fontSize: 16,
    fontFamily: "Comfortaa",
    color: "#444",
    textAlign: "center",
  },
});
