import React from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import * as Linking from "expo-linking";
import { A } from "@expo/html-elements";
import { useFonts, AbrilFatface_400Regular } from "@expo-google-fonts/dev";
import LinkedInIcon from "../../../assets/icons/LinkedInIcon";
import GithubIcon from "../../../assets/icons/GithubIcon";
import MyLink from "./MyLink";

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
      <A style={[{ marginLeft: 30 }]} href="https://www.eliotkhachi.com">
        <Text style={[styles.homeText]}>EK</Text>
      </A>
      <View style={styles.externalLinks}>
        <View style={styles.github}>
          <A href="https://github.com/EliotKhachi">
            <GithubIcon size={60} />
          </A>
          {device == "tiny" ? null : (
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
          )}
        </View>
        <View style={styles.linkedin}>
          <A href="https://www.linkedin.com/in/eliot-khachi-426424159/">
            <LinkedInIcon size={50} />
          </A>
          {device == "tiny" ? null : (
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
          )}
        </View>
      </View>

      <View style={styles.myLinks}>
        {device == "desktop" ? (
          links.map((item) => (
            <MyLink
              key={links.indexOf(item)}
              style={item.valueOf()}
              onPress={() => navigation.navigate(item.valueOf().toLowerCase())}
              name={item}
              navigation={navigation}
            />
          ))
        ) : (
          <View style={{ position: "absolute", top: -25 }}>
            <TouchableOpacity
              style={[styles.hamburger]}
              onPress={() => handlePress()}
            >
              <View style={styles.burgerLines}></View>
              <View style={styles.burgerLines}></View>
              <View style={styles.burgerLines}></View>
            </TouchableOpacity>
            <Animated.View style={[moveDropDown, {marginTop: 20, marginRight: 20}]}>
              {toggled ? (
                <SafeAreaView
                  style={[
                    {
                      backgroundColor: "#151E29",
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: "white",
                    },
                  ]}
                >
                  <FlatList
                    data={links}
                    renderItem={({ item }) => (
                      <MyLink
                        onPress={() => {
                          setToggled(!toggled);
                          navigation.navigate(item.valueOf().toLowerCase());
                        }}
                        style={null}
                        name={item}
                        navigation={navigation}
                      />
                    )}
                    keyExtractor={(item) => item}
                  />
                </SafeAreaView>
              ) : null}
            </Animated.View>
          </View>
        )}
      </View>
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
  externalLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  myLinks: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginLeft: 80
  },
  homeText: {
    fontSize: 50,
    fontFamily: "AbrilFatFace_400Regular",
    color: COLOR,
  },
  hamburger: {
    flexDirection: "column",
    padding: 5,
    borderRadius: 4,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  burgerLines: {
    width: 40,
    height: 5,
    backgroundColor: COLOR,
    borderRadius: 50,
    marginVertical: 4,
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
