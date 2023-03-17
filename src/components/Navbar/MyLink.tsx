import { StyleSheet, Pressable, View, Text } from "react-native";
import React from "react";

export default function MyLink({name, onPress, navigation}) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Pressable
      style={styles.link}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      onPress={() => onPress()}
    >
      <Text
        style={[styles.text, { color: isHovered ? "white" : "gray" }]}
      >{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
link: {
    marginHorizontal: 30,
  },
  text: {
    fontSize: 18,
    color: "gray",
  },

  });
