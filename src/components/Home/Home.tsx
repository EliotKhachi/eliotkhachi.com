import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import StarryNight from "../StarryNight";
import Navbar from "../Navbar";

let portraitImageSource: any = require("../../../assets/0J0A7154-headshot.jpg");
const portraitSize = 400;

export default function Home() {
  return (
    <View style={styles.home}>
      <StarryNight />
      <Navbar />
      <View style={styles.about}>
        <Image style={styles.portrait} source={portraitImageSource} />
        <AboutMe />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage:
      "radial-gradient(ellipse at bottom, #1b2735, #090a0f 100%)",
  },
  about: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  portrait: {
    width: portraitSize,
    height: portraitSize,
    borderRadius: portraitSize,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "white",
  },
});
