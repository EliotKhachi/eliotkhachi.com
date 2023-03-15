import {StyleSheet} from "react-native"

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/components/Home/Home";

const Stack = createStackNavigator();
export default function MainStack() {
  return (
    <Stack.Navigator screenOptions initialRouteName="Home">
      <Stack.Screen name="EK" component={Home} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
}