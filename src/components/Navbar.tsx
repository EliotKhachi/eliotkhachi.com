import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { useFonts, AbrilFatface_400Regular } from "@expo-google-fonts/dev";



// const buttons: String[] = ["Resume", "Projects", "Zettelkasten", "Contact Me"];
const buttons: String[] = [];

export default function Navbar() {
let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.home]}
        onPressIn={() => setIsPressed(!isPressed)}
        onPressOut={() => setIsPressed(!isPressed)}
      >
        <Text
          style={[styles.homeText, { color: isPressed ? "white" : "gray" }]}
        >
         EK 
        </Text>
      </TouchableHighlight>
      <View style={styles.navbar}>
        {buttons.map((item: String) => {
          return (
            <TouchableHighlight
              style={styles.navButton}
              onPressIn={() => setIsPressed(!isHovered)}
              onPressOut={() => setIsPressed(!isHovered)}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: isHovered ? "white" : "gray" },
                ]}
              >
                {item}
              </Text>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 30,
    justifyContent: "space-between",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navButton: {
    marginHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
  },
  home: {
    marginLeft: 80,
  },
  homeText: {
    fontSize: 50,
    fontFamily:"AbrilFatFace_400Regular"
  },
});
