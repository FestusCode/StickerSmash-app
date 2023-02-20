import { StyleSheet, View, Text, Pressable } from "react-native";

const Button = ({ label }) => {
  <View style={StyleSheet.buttonContainer}>
    <Pressable
      style={styles.button}
      onPress={() => alert("you pressed a button ")}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  </View>;
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Button;
