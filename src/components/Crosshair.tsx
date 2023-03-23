import {
  View,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import PlusSign from "./SVG/PlusSign";
import MyCircle from "./SVG/MyCircle";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from "react-native-reanimated";

const screenSize = Dimensions.get("screen");

export default function Crosshair() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const translateXCircle = useSharedValue(0);
  const translateXCross = useSharedValue(0);
  const translateYCircle = useSharedValue(0);
  const translateYCross = useSharedValue(0);

  const windowSize = useWindowDimensions();
  const crossStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateXCross.value },
        { translateY: translateYCross.value },
      ],
    };
  });

  const circleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateXCircle.value },
        { translateY: translateYCircle.value },
      ],
    };
  });

  React.useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      console.log(mouseX)
      translateXCross.value = withTiming(mouseX+window.scrollX, { duration: 0 });
      translateYCross.value = withTiming(mouseY+window.scrollY, { duration: 0 });
      translateXCircle.value = withSpring(mouseX+window.scrollX, {
        damping: 10,
        overshootClamping: true,
      });
      translateYCircle.value = withSpring(mouseY+window.scrollY, {
        damping: 10,
        overshootClamping: true,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <View style={[styles.container]}>
      <Animated.View style={crossStyle}>
        <PlusSign color="#FF3212" size={20} />
      </Animated.View>
      <Animated.View style={circleStyle}>
        <MyCircle color="white" size={30} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
