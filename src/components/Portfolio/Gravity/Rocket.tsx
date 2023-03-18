import { StyleSheet, View, Text } from "react-native";

const SIZE = 50;

export default function Rocket() {
  return <View style={styles.rocket}></View>;
}
const styles = StyleSheet.create({
  rocket: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    backgroundColor: "red",
  },
});
