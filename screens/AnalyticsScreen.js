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

const AnalyticsScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Main");
  };
  return (
    <ImageBackground
      source={require("../assets/bgMain.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <SafeAreaView>
          {/* container */}
          <View style={styles.nameDasboard}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Ionicons name="arrow-back" size={24} color={COLORS.white} />
            </TouchableOpacity>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 16,
                fontWeight: "600",
                paddingLeft: 20
              }}
            >
              Style Analysis
            </Text>
          </View>
          {/* statistic 1 */}
          <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Outfit Categories
            </Text>
            <Image
              source={require("../assets/images/statistic.png")}
              style={{ width: 325, height: 275, marginTop: 10 }}
            />
          </View>
          {/* statistic 2 */}
          <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Colour pallete analysis
            </Text>
            <Image
              source={require("../assets/images/statistic2.png")}
              style={{ width: 325, height: 275, marginTop: 10 }}
            />
          </View>
          {/* statistic 3 */}
          <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Most wore items
            </Text>
            <Image
              source={require("../assets/images/most1.png")}
              style={{ width: 325, height: 400, marginTop: 10 }}
            />
            <Image
              source={require("../assets/images/most2.png")}
              style={{ width: 325, height: 400, marginTop: -40 }}
            />
            <Image
              source={require("../assets/images/most3.png")}
              style={{ width: 325, height: 400, marginTop: -40 }}
            />
          </View>
          {/* undertilized */}
          <View style={{ marginTop: -40, marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Your Underutilized Outfits
            </Text>
            <Image
              source={require("../assets/images/undertilized1.png")}
              style={{ width: 325, height: 400, marginTop: 10 }}
            />
            <Image
              source={require("../assets/images/undertilized2.png")}
              style={{ width: 325, height: 400, marginTop: -40 }}
            />
            <Image
              source={require("../assets/images/undertilized3.png")}
              style={{ width: 325, height: 400, marginTop: -40 }}
            />
          </View>
          {/* undertilized */}
          <View style={{ marginTop: -40, marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Occasion-Based Outfit frequency
            </Text>
            <Image
              source={require("../assets/images/statistic3.png")}
              style={{ width: 325, height: 275, marginTop: 10 }}
            />
          </View>
        </SafeAreaView>
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
  nameDasboard: {
    backgroundColor: COLORS.transparent,
    width: 326,
    height: 51,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 12,
    flexDirection: "row",
    marginLeft: 12
  },
  backButton: {
    right: 12,
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14
  }
});

export default AnalyticsScreen;
