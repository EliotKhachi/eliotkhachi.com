import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Image,
  Dimensions,
} from "react-native";
import { useFonts, AbrilFatface_400Regular } from "@expo-google-fonts/dev";
import { LinearGradient } from "expo-linear-gradient";
let portraitImageSource: any = require("../../assets/headshot/0J0A7154-headshot.jpg");

import React from "react";

const COLOR = "#c7d0e8";
let portraitSize: number;
const screenDimensions = Dimensions.get("screen");
export default function AboutMe() {
  const windowSize = useWindowDimensions();
  const [device, setDevice] = React.useState("");
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });
  portraitSize =
    screenDimensions.width < 1000
      ? screenDimensions.width * 0.8
      : screenDimensions.width * 0.25;

  React.useEffect(() => {
    // console.log(windowSize);
    if (windowSize.width < 1000) setDevice("phone");
    else if (windowSize.width < 1300) setDevice("tablet");
    else setDevice("desktop");
  }, [windowSize]);

  return (
    <View style={[styles.about]}>
      <Image
        style={[
          styles.portrait,
          {
            width: device == "phone" ? portraitSize * 0.9 : portraitSize,
            height: device == "phone" ? portraitSize * 0.9 : portraitSize,
            borderRadius: device == "phone" ? portraitSize * 0.9 : portraitSize,
          },
        ]}
        source={portraitImageSource}
      />
      <View style={styles.aboutMe}>
        <Text
          style={[
            styles.header,
            {
              fontFamily: "AbrilFatFace_400Regular",
              fontSize: windowSize.width > 640 ? 200 : 150,
            },
          ]}
        >
          Hi
          <Text
            style={[
              styles.subheader,
              {
                fontFamily: "AbrilFatFace_400Regular",
                fontSize: windowSize.width > 640 ? 50 : 35,
              },
            ]}
          >
            , I'm Eliot.
          </Text>
        </Text>
        <Text style={styles.body}></Text>
      </View>
      <View style={{ height: 1000 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutMe: {
    textAlign: "center",
  },
  header: {
    numberOfLines: 1,
    FontWeight: 200,
    backgroundImage: "linear-gradient(to bottom, white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
  },
  subheader: {
    flex: 1,
  },

  body: {
    color: "white",
    textAlign: "center",
    fontSize: 34,
  },
  about: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  portrait: {
    marginTop: 100,
    aspectRatio: 1,
  },
});
