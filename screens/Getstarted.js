import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants";

const Getstarted = ({ navigation }) => {
  const handleRegistration = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* grid 1 */}
      <View style={styles.gridItem}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image1}
            source={require("../assets/images/ColomA1.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image2}
            source={require("../assets/images/ColomA2.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image3}
            source={require("../assets/images/ColomA3.png")}
            resizeMode="cover"
          />
        </View>
      </View>
      {/* grid 2 */}
      <View style={styles.gridItem}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image4}
            source={require("../assets/images/ColomB1.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image5}
            source={require("../assets/images/ColomB2.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image6}
            source={require("../assets/images/ColomB3.png")}
            resizeMode="cover"
          />
        </View>
      </View>
      {/* grid 3 */}
      <View style={styles.gridItem}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image7}
            source={require("../assets/images/ColomC1.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image8}
            source={require("../assets/images/ColomC2.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image9}
            source={require("../assets/images/ColomC3.png")}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.overlayContainer}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.white]}
          locations={[0, 0.5, 1]}
          style={styles.overlay}
        />
        <View style={styles.container2}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
            />
          </View>
          <Text style={styles.title}>Selamat datang di Outfitku</Text>
          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMasuk} onPress={handleLogin}>
            <Text style={styles.buttonTextMasuk}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 20,
    width: "100%",
    height: "100%",
    padding: 10,
    flexDirection: "row",
    // columnGap: 6,
    justifyContent: "center"
  },
  gridItem: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    marginHorizontal: 4,
    gap: 5
  },
  imageContainer: {
    width: "100%",
    borderRadius: 15,
    overflow: "hidden"
  },
  image1: {
    width: "100%",
    height: 130,
    borderRadius: 15
  },
  image2: {
    width: "100%",
    height: 140,
    borderRadius: 15
  },
  image3: {
    width: "100%",
    height: 175,
    borderRadius: 15
  },
  image4: {
    width: "100%",
    height: 175,
    borderRadius: 15
  },
  image5: {
    width: "100%",
    height: 130,
    borderRadius: 15
  },
  image6: {
    width: "100%",
    height: 140,
    borderRadius: 15
  },
  image7: {
    width: "100%",
    height: 175,
    borderRadius: 15
  },
  image8: {
    width: "100%",
    height: 140,
    borderRadius: 15
  },
  image9: {
    width: "100%",
    height: 175,
    borderRadius: 15
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: "100%"
  },
  container2: {
    backgroundColor: COLORS.transparent,
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 240
  },
  logoContainer: {
    width: 136,
    height: 69,
    alignItems: "center",
    marginBottom: 20
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold"
  },
  buttonMasuk: {
    marginTop: 8,
    backgroundColor: "#FFFFFF",
    borderColor: "#E2E8F0",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTextMasuk: {
    color: "#475569",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Getstarted;
