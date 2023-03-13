import { StyleSheet, Button } from "react-native";
import React from "react"

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => (offset.value = withSpring(Math.random()))}
        title="Move"
      />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
