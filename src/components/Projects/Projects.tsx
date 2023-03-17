import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import StarryNight from "../StarryNight";
import Navbar from "../Navbar/Navbar";

const projects: string[] = ["Gravity"];
export default function Projects({navigation}) {
  return (
    <View style={styles.container}>
      <StarryNight />
      <Navbar navigation={navigation}/>
      <View>
        {projects.map((item: string) => (
          <TouchableOpacity>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
