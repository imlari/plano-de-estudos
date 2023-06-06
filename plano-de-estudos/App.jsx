import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Router } from "./router";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Router />
      {/* <Home /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
