import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "./Components/ImageViewer";
import Button from "./Components/Button";
const placeholderImage = require("./assets/Images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("you didn't select any picture.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.btnsContainer}>
        <Button
          theme="primary"
          label="Choose a picture"
          onPress={pickImageAsync}
        />
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
  },
});
