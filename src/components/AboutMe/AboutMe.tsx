import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { useFonts, AbrilFatface_400Regular } from "@expo-google-fonts/dev";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";

export default function AboutMe() {
  const windowSize = useWindowDimensions();
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  return (
    <View style={styles.aboutMe}>
      <Text style={[styles.header, { fontFamily: "AbrilFatFace_400Regular" , fontSize: windowSize.width > 640 ? 200 : 150}]}>
        Hi
        
        <Text
          style={[styles.subheader, { fontFamily: "AbrilFatFace_400Regular" , fontSize: windowSize.width > 640 ? 50: 35}]}>
          , I'm Eliot.
        </Text>
      </Text>
      <Text style={styles.body}>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutMe: {
    textAlign: "center",
    // width: 450,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    numberOfLines: 1,
    FontWeight: 200,
    backgroundImage: "linear-gradient(to bottom, white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    
  },
  subheader: {
    flex: 1,
  },

  body: {
    color: "white",
    textAlign: "center",
    fontSize: 34
  },
});
