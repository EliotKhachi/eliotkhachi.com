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
  FadeIn,
} from "react-native-reanimated";
import React from "react";

const screenDimensions = Dimensions.get("screen");
const starSize: number[] = [1, 2, 3]; // constrain to only 3 elements
const starSpeed = 3;
const numberOfStars: number = screenDimensions.width/5;
const animationDuration = 30000 / starSpeed;
const transitionDuration = 1000;

const keyframe = new Keyframe({
  from: {
    transform: [{ translateY: 0 }],
  },
  to: {
    transform: [{ translateY: 1000 }],
    easing: Easing.linear,
  },
});

function generateStars() {
  // Create empty 2d array
  let myStars = [];
  for (let i = 0; i < starSize.length; i++) {
    let stars = [];
    myStars.push(stars);
  }
  let count = 0;
  // generate big stars
  for (let i = 0; i < (1 / 9) * numberOfStars; i++) {
    let x: number = Math.random() * screenDimensions.width*0.98; // randomly pick width: 0 < w < windowDimensions.width
    let y = Math.random() * screenDimensions.height; // randomly pick height: 0 < h < windowDimensions.height
    myStars[2].push({ id: count, s: 2, x, y });
    count++;
  }
  // generate medium stars
  for (let i = 0; i < (3 / 9) * numberOfStars; i++) {
    let x: number = Math.random() * screenDimensions.width; 
    let y = Math.random() * screenDimensions.height * starSpeed;  // randomly pick height: 0 < h < windowDimensions.height*starSpeed
    myStars[1].push({ id: count, s: 1, x, y });
    count++;
  }
  // generate small stars
  for (let i = 0; i < (5 / 9) * numberOfStars; i++) {
    let x: number = Math.random() * screenDimensions.width; 
    let y = Math.random() * screenDimensions.height * starSpeed;  // randomly pick height: 0 < h < windowDimensions.height*starSpeed
    myStars[0].push({ id: count, s: 0, x, y });
    count++;
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
      transform: [
        {
          translateY:
            (-starSpeed / 2) * screenDimensions.height * translationY.value,
        },
      ],
      opacity: opacity.value,
      useNativeDriver: true,
    };
  });
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -starSpeed * screenDimensions.height * translationY.value,
        },
      ],
      opacity: opacity.value,
      useNativeDriver: true,
    };
  });

  React.useEffect(() => {
    translationY.value = withRepeat(
      withSequence(
        withTiming(1, { duration: animationDuration, easing: Easing.linear }),
        withTiming(0, { duration: 0, easing: Easing.linear })
      ),
      -1
    );
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: transitionDuration }),
        withDelay(
          animationDuration - 2 * transitionDuration,
          withTiming(0, { duration: transitionDuration })
        )
      ),
      -1
    );
  }, []);

  let count = 0;
  return (
    <View style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden"}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    backgroundColor: "#fff",
  },
  stars: {
    position: "absolute",
  },
});
