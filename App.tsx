import { StyleSheet, View, Text, Dimensions } from "react-native";
import Navbar from "./src/components/Navbar";
import Home from "./src/components/Home/Home";
import StarryNight from "./src/components/StarryNight"

export default function App() {
  return (
    <View style={styles.container}>
      <StarryNight />
      <Navbar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundImage:
      "radial-gradient(ellipse at bottom, #1b2735, #090a0f 100%)",
  },
 }) 