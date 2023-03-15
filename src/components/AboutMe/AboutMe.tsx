import { StyleSheet, View, Text } from "react-native";
import { useFonts, AbrilFatface_400Regular } from "@expo-google-fonts/dev";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";

export default function AboutMe() {
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  return (
    <View style={styles.aboutMe}>
      <Text style={[styles.header, { fontFamily: "AbrilFatFace_400Regular" }]}>
        Hi
        
        <Text
          style={[styles.subheader, { fontFamily: "AbrilFatFace_400Regular" }]}
        >
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
    width: "50%"
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    fontSize: 200,
    FontWeight: 200,
    backgroundImage: "linear-gradient(to bottom, white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",

  },
  subheader: {
    fontSize: 50,
  },

  body: {
    color: "white",
    textAlign: "center",
    fontSize: 34,
  },
});
