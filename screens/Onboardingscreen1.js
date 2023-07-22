import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";

const Onboardingscreen1 = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate("Onboardingscreen2");
  };

  return (
    <ImageBackground
      source={require("../assets/images/bgOnboarding2.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Mix and match outfitmu</Text>
        <Text style={styles.paragraph}>
          Kamu bisa bereksperimen dengan berbagai warna, pola, dan gaya untuk
          menciptakan tampilan yang unik dan pribadi.
        </Text>
        <View style={styles.circleContainer}>
          <View style={styles.circleGray} />
          <View style={styles.circleBlue} />
          <View style={styles.circleGray} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#fff",
    width: 327,
    height: 260,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    position: "relative",
    overflow: "hidden",
    marginTop: 360
  },
  title: {
    color: "#1A1E25",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5
  },
  paragraph: {
    color: "#818181",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20
  },
  circleContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  circleBlue: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1877F2",
    marginRight: 10
  },
  circleGray: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#CBCBCB",
    marginRight: 10
  },
  button: {
    backgroundColor: "orange",
    width: "80%",
    height: "18%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default Onboardingscreen1;
