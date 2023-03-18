import { StyleSheet, View, Text } from "react-native";
import React from "react";
import StarryNight from "../../StarryNight";
import Navbar from "../../Navbar/Navbar";
import Rocket from "./Rocket";

export default function Gravity({navigation}) {
  return (
    <View style={styles.container}>
      <StarryNight />
      <Navbar navigation={navigation}/>
      <Rocket />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage:
      "radial-gradient(ellipse at bottom, #1b2735, #090a0f 100%)",
  },
});