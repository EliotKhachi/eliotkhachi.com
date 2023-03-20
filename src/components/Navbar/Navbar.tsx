import React from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { A } from "@expo/html-elements";
import { useFonts, AbrilFatface_400Regular } from "@expo-google-fonts/dev";
import Hamburger from "./Hamburger";

const links = ["Portfolio", "Zettelkasten", "Contact Me"];
const COLOR = "#c7d0e8";

export default function Navbar({ navigation }) {
  const [toggled, setToggled] = React.useState(false);
  const [device, setDevice] = React.useState("");
  const dropDownX = useSharedValue(0);

  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  const windowSize = useWindowDimensions();

  React.useEffect(() => {
    if (windowSize.width < 640) setDevice("tiny");
    else if (windowSize.width < 1000) setDevice("phone");
    else if (windowSize.width < 1300) setDevice("tablet");
    else setDevice("desktop");
  }, [windowSize]);

  const handlePress = () => {
    setToggled(!toggled);
    dropDownX.value = withTiming(1, { duration: 300 });
  };

  const moveDropDown = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dropDownX.value }],
    };
  });

  return (
    <View style={styles.navbar}>
      <A
        style={[styles.home, { left: device == "tiny" ? 40 : 80 }]}
        href="https://www.eliotkhachi.com"
    >
        <Text style={[styles.homeText, {fontSize: device == "tiny" ? 42 : 50}]}>EK</Text>
      </A>
      {/* Include buttons that scroll to (SPA Single Page Application design)
      Education
      Expertise
      Projects 
      Professional Experience (Resume)
      */}
      {/* <Hamburger/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // padding: 10,
  },
  home: {
    position: "absolute",
    left: 80,
  },
  homeText: {
    fontSize: 50,
    fontFamily: "AbrilFatFace_400Regular",
    backgroundImage: "linear-gradient(to bottom, white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
  },
});
