import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import StarryNight from "./StarryNight";
import Navbar from "./Navbar/Navbar";

let portraitImageSource: any = require("../../assets/headshot/0J0A7154-headshot.jpg");
const screenDimensions = Dimensions.get("screen");
let portraitSize: number;
const COLOR = "#c7d0e8";

export default function Home({ navigation }) {
  const windowSize = useWindowDimensions();
  const [device, setDevice] = React.useState("");
  portraitSize = screenDimensions.width < 1000 ? screenDimensions.width*0.80 : screenDimensions.width * 0.25;

React.useEffect(() => {
  console.log(windowSize);
    if (windowSize.width < 1000) setDevice("phone");
    else if (windowSize.width < 1300) setDevice("tablet");
    else setDevice("desktop");
  }, [windowSize]);

  return (
    <View style={styles.home}>
      <StarryNight />
      <Navbar navigation={navigation} />
      <View style={[styles.about]}>
        <Image
          style={[
            styles.portrait,
            {
              width: device == "phone" ? portraitSize*.9 : portraitSize,
              height: device == "phone" ? portraitSize*.9 : portraitSize,
              borderRadius: device == "phone" ? portraitSize*.9 : portraitSize,
            },
          ]}
          source={portraitImageSource}
        />
        <AboutMe />
        <View style={{height: 1000}}>

        </View>
        <ContactMe />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    position: "absolute",
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundImage:
      "radial-gradient(ellipse at bottom, #1b2735, #090a0f 100%)",
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
