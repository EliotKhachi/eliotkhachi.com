import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from "react"
import MainStack from "./routes/MainStack";
import {NavigationContainer} from "@react-navigation/native" 
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainStack"
          component={MainStack}
          options={{headerShown: false}}
          >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <StarryNight />
    //   <Navbar />
    //   <Home />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    backgroundImage:
      "radial-gradient(ellipse at bottom, #1b2735, #090a0f 100%)",
  },
 }) 