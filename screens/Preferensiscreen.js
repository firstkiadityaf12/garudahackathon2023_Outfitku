import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

const Preferensiscreen = ({ navigation }) => {
  const handleQuestion = () => {
    navigation.navigate("Questionscreen1");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {/* logo */}
        <View style={styles.logocontainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        {/* text */}
        <Text style={styles.title}>Choose Your Gender</Text>
        {/* button pilihan checkbox with element */}
        {/* box women */}
        <TouchableOpacity style={styles.boxjenis} onPress={handleQuestion}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 18
            }}
          >
            <View
              style={{
                backgroundColor: "#FFAF61",
                borderRadius: 15,
                width: 54,
                height: 54,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../assets/images/womenicon.png")}
                style={styles.media}
              />
            </View>
            <Text>Women</Text>
          </View>
        </TouchableOpacity>
        {/* box men */}
        <TouchableOpacity style={styles.boxjenis} onPress={handleQuestion}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 18
            }}
          >
            <View
              style={{
                backgroundColor: "#FFF6EF",
                borderRadius: 15,
                width: 54,
                height: 54,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image source={require("../assets/images/manicon.png")} />
            </View>
            <Text>Man</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginTop: 168
  },
  logocontainer: {
    width: 180,
    height: 90,
    alignItems: "center"
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 22,
    marginBottom: 24,
    textAlign: "center"
  },
  boxjenis: {
    backgroundColor: "#FFF6EF",
    width: "80%",
    height: "12%",
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    marginTop: 14
  }
});

export default Preferensiscreen;
