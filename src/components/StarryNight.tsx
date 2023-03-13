import { StyleSheet, View, Text, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay,
  Easing,
  useDerivedValue,
  Keyframe,
  Transition,
  SlideInDown,
  FadeIn
} from "react-native-reanimated";
import React from "react";

const starSize: number[] = [1, 2, 3];
const screenDimensions = Dimensions.get("screen");
const numberOfStars: number = screenDimensions.width / 5;
const starSpeed = 3;

const keyframe = new Keyframe({
  from: {
    transform:[{translateY: 0}]
  },
  to: {
    transform: [{translateY: 1000}],
    easing: Easing.linear
  }
})

function generateStars() {
  // Create empty 2d array
  let myStars = [];
  for (let i = 0; i < starSize.length; i++) {
    let stars = [];
    myStars.push(stars);
  }
  // Generate random size and position of stars. Place stars on each row of the 2d array according to their size.
  for (let i = 0; i < numberOfStars; i++) {
    let s: number = Math.floor(Math.random() * starSize.length); // randomly pick star size index from starSize array
    let x: number = Math.random() * screenDimensions.width; // randomly pick width: 0 < w < windowDimensions.width
    let y: number = Math.random() * screenDimensions.height; // randomly pick height: 0 < h < windowDimensions.height
    for (let j = 0; j < starSize.length; j++) {
      if (s == j) {
        myStars[j].push({ id: i, s, x, y });
      }
    }
  }
  // return the 2d array of stars
  return myStars;
}

export default function StarryNight() {
  let myStars = generateStars();

  const translationY = useSharedValue(0);
  const opacity = useSharedValue(0);

  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -200 * translationY.value * starSpeed }],
      opacity: opacity.value,
      useNativeDriver: true,
    };
  });
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -100 * translationY.value * starSpeed }],
      opacity: opacity.value,
      useNativeDriver: true,
    };
  });

  React.useEffect(() => {
    translationY.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 4000, easing: Easing.linear }),
        withTiming(0, { duration: 0, easing: Easing.linear })
      ),
      -1
    );
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 2000}),
        withDelay(0, withTiming(0, { duration: 2000}))
      ),
      -1
    );
  }, []);

  let count = 0;
  return (
    <View>
      {myStars.map((stars) => (
        <Animated.View
          key={count++}
          style={[
            styles.stars,
            count == 2 ? null : count == 1 ? animatedStyles2 : animatedStyles1,
          ]}
        >
          {stars.map((star) => (
            <View
              key={star.id}
              style={[
                styles.star,
                {
                  width: starSize[star.s],
                  height: starSize[star.s],
                  borderRadius: starSize[star.s],
                  top: star.y,
                  left: star.x,
                },
              ]}
            ></View>
          ))}
        </Animated.View>
      ))}
            {/* <Animated.View entering={SlideInDown} style={styles.stars1}></Animated.View>
      <Animated.View entering={FadeIn.duration(2000)} style={[styles.stars2]}></Animated.View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    backgroundColor: "#fff",
  },
  stars: {
    position: "absolute",
    top: -200,
  },
}) 