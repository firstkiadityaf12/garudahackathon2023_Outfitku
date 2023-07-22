import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { COLORS } from "../constants";
import SearchBar from "../components/SearchButton";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Genoutscreen = ({ navigation }) => {
  const handleStartGenerate = () => {
    navigation.navigate("Generateoutfit");
  };

  return (
    <ImageBackground
      source={require("../assets/bgMain.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.locationContainer}>
          <Ionicons name="ios-location-sharp" size={25} color="white" />
          <Text
            style={{ color: COLORS.white, fontSize: 20, fontWeight: "700" }}
          >
            Bandung Jawa Barat
          </Text>
          <Entypo name="chevron-down" size={25} color="white" />
        </View>
        {/* search bar */}
        <View
          style={{
            marginTop: 10,
            width: 326,
            height: 70,
            alignItems: "center"
          }}
        >
          <SearchBar />
        </View>
        {/* banner */}
        <View style={styles.boxContainer}>
          <View style={styles.informationContainer}>
            <Text
              style={{ color: COLORS.black, fontSize: 20, fontWeight: "700" }}
            >
              Generate Your Outfit Now!
            </Text>
            <TouchableOpacity onPress={handleStartGenerate}>
              <Image
                source={require("../assets/images/generateicon.png")}
                style={{ width: 140, height: 140 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center"
  },
  locationContainer: {
    backgroundColor: COLORS.transparent,
    marginTop: 100,
    marginLeft: 2,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    width: "100%"
  },
  boxContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    width: 310,
    height: 140,
    position: "relative",
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  informationContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: 153,
    height: 140,
    justifyContent: "space-between",
    marginTop: 20,
    margin: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5
  }
});

export default Genoutscreen;
