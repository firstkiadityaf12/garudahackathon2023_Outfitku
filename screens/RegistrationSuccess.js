import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { COLORS } from "../constants";

const RegistrationSuccess = ({ navigation }) => {
  const handleHomepage = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/success.gif")}
        style={{ width: 375, height: 375 }}
      />
      <Text style={styles.title}>Registrai Berhasil</Text>
      <Text style={styles.paragraf}>
        Klik selesai dan nikmati fitur yang ada diaplikasi OutfitKu ini!
      </Text>
      {/* button next */}
      <TouchableOpacity style={styles.button} onPress={handleHomepage}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    padding: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 15
  },
  paragraf: {
    fontSize: 14,
    color: "#989898",
    fontWeight: "400",
    textAlign: "center",
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "bold"
  }
});

export default RegistrationSuccess;
