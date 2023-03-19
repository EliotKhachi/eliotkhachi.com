import { View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

const COLOR = "#c7d0e8";

export default function Hamburger() {
  return (
    <View>
      <TouchableOpacity
        style={[styles.hamburger]}
      >
        <View style={styles.burgerLines}></View>
        <View style={styles.burgerLines}></View>
        <View style={styles.burgerLines}></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hamburger: {
    flexDirection: "column",
    padding: 5,
    borderRadius: 4,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  burgerLines: {
    width: 40,
    height: 2,
    backgroundColor: COLOR,
    borderRadius: 50,
    marginVertical: 4,
  },
});
