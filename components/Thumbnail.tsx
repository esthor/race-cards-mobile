import * as React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Value } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { mix } from "react-native-redash";

import StyleGuide from "./StyleGuide";
import Text from "./Text";
import TapHandler from "./TapHandler";

const styles = StyleSheet.create({
  container: {
    margin: StyleGuide.spacing * 2,
    marginBottom: 0,
    borderRadius: 8,
    flex: 1,
    height: 150,
    overflow: "hidden",
    backgroundColor: StyleGuide.palette.backgroundPrimary,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    width: undefined,
    height: undefined,
    transform: [{ scale: 1 }],
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    padding: StyleGuide.spacing,
    justifyContent: "flex-end",
  },
});

interface ThumbnailProps {
  title: string;
  source: number;
  onPress: () => void;
  resizeMode?: "cover" | "contain";
}

const Thumbnail = ({ title, source, onPress, resizeMode }: ThumbnailProps) => {
  const value = new Value(0);
  const scale = mix(value, 1, 1.5);
  return (
    <TapHandler {...{ onPress, value }}>
      <View style={styles.container}>
        <Animated.Image
          style={[
            styles.image,
            {
              resizeMode: resizeMode || "contain",
              transform: [{ scale }],
            },
          ]}
          {...{ source }}
        />
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
          locations={[0.61, 1]}
        />
        <View style={styles.content}>
          <Text type="title2" style={{ color: "#2F2E41" }}>
            {title}
          </Text>
        </View>
      </View>
    </TapHandler>
  );
};

export default Thumbnail;
