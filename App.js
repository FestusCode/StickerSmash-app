import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./Components/ ImageViewer";
const placeholderImage = require("./assets/Images/background-image.png");
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
