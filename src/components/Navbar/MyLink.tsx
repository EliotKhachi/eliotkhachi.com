import { StyleSheet, Pressable, View, Text } from "react-native";
import React from "react";

const COLOR = "#c7d0e8";
export default function MyLink({ name, onPress, navigation, style}) {
  const [isHovered, setIsHovered] = React.useState(false);
  if (style == "Contact Me")
    return (
      <Pressable
        style={[styles.contactMe]}
        onPress={() => navigation.navigate("Contact Me")}
      >
        <Text style={[styles.contactMeText]}>Contact Me</Text>
      </Pressable>
    );

  return (
    <Pressable
      style={styles.link}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      onPress={() => onPress()}
    >
      <Text style={[styles.text]}>{name}</Text>
      {/* {isHovered ? <View style={{width: "100%", borderBottomColor: COLOR, borderBottomWidth: 1}}></View> : null}   */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    marginHorizontal: 20,
    padding:10, 
  },
  text: {
    fontSize: 18,
    fontFamily: "PlayfairDisplay_400Regular",
    color: COLOR,
  },
  contactMe: {
    backgroundColor: COLOR,
    padding: 20,
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  contactMeText: {
    fontSize: 18,
    fontWeight: 900,
    color: "#151E29",
  },
});
