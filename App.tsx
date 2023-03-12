import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Navbar from "./src/components/Navbar";
import Home from "./src/components/Home/Home";
let backgroundImageSource: any = require("./assets/southern-ring-nebula-2-_custom-60c7d16d9c36f085646be2dad4585892c783952d.jpg");

export default function App() {
  return (
    <ImageBackground style={styles.container} source={backgroundImageSource}>
      <Navbar />
      <Home />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
