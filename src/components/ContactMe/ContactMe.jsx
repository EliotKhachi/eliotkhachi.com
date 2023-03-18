import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import StarryNight from "../StarryNight";
import Navbar from "../Navbar/Navbar";

export default function ContactMe({ navigation }) {
  return (
    <View style={styles.container}>
      <StarryNight />
      <Navbar navigation={navigation} />
      <View style={styles.contactSection}>
        <Text
          style={[styles.header, { fontFamily: "AbrilFatFace_400Regular" }]}
        >
          Let's Connect!
        </Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage:
      "radial-gradient(ellipse at bottom, #1b2735, #090a0f 100%)",
  },
  contactSection: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    fontSize: 100,
    FontWeight: 200,
    backgroundImage: "linear-gradient(to bottom, white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
  },
  input: {
    width: "50%",
    height: "50%",
    borderRadius: 10,
    backgroundColor: "white",
    fontSize: 20,
    textAlign: "auto"
  },
});
