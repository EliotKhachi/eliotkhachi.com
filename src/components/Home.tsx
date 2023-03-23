import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import StarryNight from "./StarryNight";
import Navbar from "./Navbar/Navbar";
import Crosshair from "./Crosshair"

let portraitSize: number;
const COLOR = "#c7d0e8";

export default function Home({ navigation }) {
  // const windowSize = useWindowDimensions();

  return (
    <View style={styles.home}>
      <StarryNight />
      <Navbar navigation={navigation} />
      <AboutMe />
      <ContactMe />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flexDirection: "column",
    // position: "absolute",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundImage:
      "radial-gradient(ellipse at bottom, #1b2735, #090a0f 100%)",
  },
});
