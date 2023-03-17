import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home/Home";
import Projects from "./src/components/Projects/Projects";
import ContactMe from "./src/components/ContactMe/ContactMe";
import Zettelkasten from "./src/components/Zettelkasten/Zettelkasten";
import Resume from "./src/components/Resume/Resume";

import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator();

export default function App() {
  const linking = {
    prefixes: [
      Linking.createURL("/"),
      "https://",
      "https://*.eliotkhachi.com",
      "https://eliotkhachi.com",
    ],
    config: {
      screens: {
        home: "/",
        projects: "projects",
      },
    },
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="projects"
          component={Projects}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="contact me"
          component={ContactMe}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="zettelkasten"
          component={Zettelkasten}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="resume"
          component={Resume}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
