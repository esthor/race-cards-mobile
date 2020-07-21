import * as React from "react";
import { StyleSheet, View } from "react-native";
// import { Feather as Icon } from "@expo/vector-icons";

import StyleGuide from "./StyleGuide";

export const CHECK_ICON_SIZE = 35;
const styles = StyleSheet.create({
  container: {
    width: CHECK_ICON_SIZE,
    height: CHECK_ICON_SIZE,
    borderRadius: CHECK_ICON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: StyleGuide.palette.primary,
  },
});

const CheckIcon = () => {
  return (
    <View style={styles.container}>
      {/* <Icon name="check" color="white" size={24} /> */}
    </View>
  );
};

export default CheckIcon;
