import React from "react"
import {StyleSheet, View, Text, TouchableHighlight} from "react-native"

const buttons: String[] = ["Resume", "Projects", "Zettelkasten", "Contact Me"]

export default function Navbar() {
   const [isHovered, setIsHovered] = React.useState(false);
   const [isPressed, setIsPressed] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableHighlight style={[styles.home]}
      onPressIn={() => setIsPressed(!isPressed)}
      onPressOut={() => setIsPressed(!isPressed)}
      >
        <Text style={[styles.homeText, {color: isPressed ? "white" : "gray"}]}>Eliot Khachi</Text>
      </TouchableHighlight>
      <View style={styles.navbar}>
        {buttons.map((item: String) => {
          return (
          <TouchableHighlight 
          style={styles.navButton}
          onPressIn={() => setIsPressed(!isHovered)}
          onPressOut={() => setIsPressed(!isHovered)}
          >
            <Text style={[styles.buttonText, {color: isHovered ? "white" : "gray" }]}>{item}</Text>
          </TouchableHighlight>
        )
        })}
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 30,
    justifyContent: "space-between"
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
    fontWeight: 500,
  },
  home: {
    marginLeft: 80
  },
  homeText: {
    fontWeight: 400,
    fontSize: 22,
    // letterSpacing: 4
  }
})