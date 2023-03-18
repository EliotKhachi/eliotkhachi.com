import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import StarryNight from "../StarryNight";
import Navbar from "../Navbar/Navbar";

export default function Projects({navigation}) {
  return (
    <View style={styles.navbar}>
      <StarryNight />
      <Navbar navigation={navigation}/>
      <View style={styles.projectsView}>
          <TouchableOpacity style={styles.projectsButton} activeOpacity={0.5} onPress={() =>navigation.navigate("gravity")}>
            <Text style={styles.projectsText}>Play Gravity!</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage:
      "radial-gradient(ellipse at bottom, #1b2735, #090a0f 100%)",
  },
  projectsView: {
    alignSelf:"center",
  },
  projectsText:{
    fontSize: 30,
    color: "#fff"
  },
  projectsButton:{
    backgroundColor: "gray",
    // borderColor: "black",
    // borderWidth: 2,
    padding: 20,
    borderRadius: 8,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5
    
  }
});
