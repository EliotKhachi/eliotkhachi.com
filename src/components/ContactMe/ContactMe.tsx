import { StyleSheet, View, Text, TextInput } from "react-native";
import { A } from "@expo/html-elements";
import React from "react";

import LinkedInIcon from "../../../assets/icons/LinkedInIcon";
import GithubIcon from "../../../assets/icons/GithubIcon";

const COLOR = "#c7d0e8";
export default function ContactMe() {
  return (
    <View style={styles.container}>
      <View style={styles.externalLinks}>
        <View style={styles.github}>
          <A href="https://github.com/EliotKhachi">
            <GithubIcon size={60} />
          </A>
          <A href="https://github.com/EliotKhachi">
            <Text
              style={{
                color: COLOR,
                fontWeight: "100",
                fontSize: 18,
                marginLeft: 10,
                fontFamily: "PlayfairDisplay_400Regular",
              }}
            >
              Github
            </Text>
          </A>
        </View>
        <View style={styles.linkedin}>
          <A href="https://www.linkedin.com/in/eliot-khachi-426424159/">
            <LinkedInIcon size={50} />
          </A>
          <A href="https://www.linkedin.com/in/eliot-khachi-426424159/">
            <Text
              style={{
                color: COLOR,
                fontWeight: "100",
                fontSize: 18,
                marginLeft: 10,
                fontFamily: "PlayfairDisplay_400Regular",
              }}
            >
              LinkedIn
            </Text>
          </A>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  externalLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  github: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 40,
  },
  linkedin: {
    flexDirection: "row",
    alignItems: "center",
  },
});
