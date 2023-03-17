import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts, AbrilFatface_400Regular } from "@expo-google-fonts/dev";
import MyLink from "./MyLink";

const links = ["Resume", "Projects", "Zettelkasten", "Contact Me"];

export default function Navbar({ navigation }) {
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  return (
    <View style={styles.navbar}>
      <Pressable style={[styles.home]}
        onPress={() => navigation.navigate("home")}>
        <Text style={[styles.homeText]}>EK</Text>
      </Pressable>
      <View style={styles.links}>
        {links.map((item) => (
          <MyLink onPress={() => navigation.navigate(item.valueOf().toLowerCase())} name={item} navigation={navigation}/>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    paddingVertical: 30,
    justifyContent: "space-between",
  },
  links: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  home: {
    marginLeft: 80,
  },
  homeText: {
    fontSize: 50,
    fontFamily: "AbrilFatFace_400Regular",
    color: "gray",
  },
});
