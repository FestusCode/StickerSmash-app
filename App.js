import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "./Components/ImageViewer";

import Button from "./Components/Button";
const placeholderImage = require("./assets/Images/background-image.png");
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} />
      </View>
      <View style={styles.btnsContainer}>
        <Button label="Choose a picture" />
        <Button label="Use picture above" />
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
    alignItems: "center",
  },
  btnsContainer: {
    flex: 1 / 3,
    flexDirection: "column",
    alignItems: "center",
  },
});
