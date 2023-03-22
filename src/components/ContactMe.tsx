import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { A } from "@expo/html-elements";
import { Linking } from "react-native";
import React from "react";

import LinkedInIcon from "./SVG/icons/LinkedInIcon";
import GithubIcon from "./SVG/icons/GithubIcon";
import MailIcon from "./SVG/icons/MailIcon";

const COLOR = "#c7d0e8";
export default function ContactMe() {
  return (
    <View style={styles.container}>
      <A href="mailto:eliotkhachi@gmail.com">
        <MailIcon size={50} />
      </A>
      <TouchableOpacity
        style={{position: "relative", top: -5}}
        activeOpacity={1}
        onPress={() => window.open("https://github.com/EliotKhachi")}
      >
        <GithubIcon size={60} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          window.open("https://www.linkedin.com/in/eliot-khachi-426424159/")
        }
      >
        <LinkedInIcon size={50} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
