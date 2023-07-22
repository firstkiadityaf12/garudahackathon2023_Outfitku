import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import RadioButtonContainer from "../components/RadioButton/RadioButtonContainer";

const Questionscreen2 = ({ navigation }) => {
  const data = [
    {
      text: "Earth tone (Coklat, Olive)"
    },
    {
      text: "Vibrant (Merah, biru, hijau)"
    },
    {
      text: "Pastel (Blush, Mint, Lavender)"
    },
    {
      text: "Neutral tones (hitam, putih, abu, beige)"
    },
    {
      text: "Cerah (Kuning, orange, fuchsia)"
    },
    {
      text: "Monokrom (All-black, all white)"
    }
  ];

  const onRadioButtonPress = itemIdx => {
    console.log("Clicked", itemIdx);
  };

  const handleNextQuestion = () => {
    navigation.navigate("Questionscreen3");
  };

  return (
    <View style={styles.container}>
      {/* container 2*/}
      <View style={styles.container2}>
        <View style={styles.logocontainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        {/* title */}
        <Text style={styles.title}>Colour palette apa yang anda sukai?</Text>
        {/* radio button */}
        <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
        {/* button next */}
        <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: "row",
    justifyContent: "center"
  },
  container2: {
    backgroundColor: COLORS.transparent,
    width: "90%",
    padding: 2,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 80
  },
  logocontainer: {
    width: 180,
    height: 90,
    alignItems: "center",
    backgroundColor: COLORS.transparent
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center"
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "95%",
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

export default Questionscreen2;
