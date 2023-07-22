import react, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { COLORS } from "../constants";
import Checkbox from "expo-checkbox";

const Questionscreen3 = ({ navigation }) => {
  const [checkboxStates, setCheckboxStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const handleCheckboxChange = index => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  const handleSuccess = () => {
    navigation.navigate("Registrarionsuccess");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {/* logo */}
        <View style={styles.logocontainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        {/* text */}
        <Text style={styles.title}>
          Jenis acara apa yang biasanya berpakaian?
        </Text>
        {/* checkbox 1*/}
        {[
          "Kendall Jenner",
          "Harry Styles",
          "Zendaya",
          "Rihanna",
          "David Beckham",
          "Gigi Hadid"
        ].map((option, index) => (
          <Pressable
            key={index}
            style={styles.containerPress}
            onPress={() => handleCheckboxChange(index)}
          >
            {/* text */}
            <View style={[styles.checkboxTextContainer]}>
              <Text style={styles.checkButtonText}>{option}</Text>
            </View>
            <Checkbox
              style={styles.checkbox}
              value={checkboxStates[index]}
              onValueChange={() => handleCheckboxChange(index)}
              color={checkboxStates[index] ? COLORS.primary : undefined}
            />
          </Pressable>
        ))}
        {/* button */}
        {/* button next */}
        <TouchableOpacity style={styles.button} onPress={handleSuccess}>
          <Text style={styles.buttonText}>Done</Text>
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
  containerPress: {
    marginTop: 10,
    marginButtom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 300,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center"
  },
  checkboxTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10
  },
  checkButtonText: {
    fontSize: 12
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

export default Questionscreen3;
