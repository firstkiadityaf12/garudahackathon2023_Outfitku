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
import { MaterialIcons } from "@expo/vector-icons";

const Wardrobescreen = () => {
  return (
    <ImageBackground
      source={require("../assets/bgMain.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <SafeAreaView>
          {/* box search */}
          <View
            style={{
              marginTop: 50,
              width: 326,
              height: 70,
              alignItems: "center"
            }}
          >
            <SearchBar />
          </View>
          {/* box generated */}
          <View style={styles.boxContainer}>
            <View style={styles.informationContainer}>
              <Text
                style={{ color: COLORS.black, fontSize: 20, fontWeight: "700" }}
              >
                Copy Add Your Outfit Now!
              </Text>
              <Image
                source={require("../assets/images/addIcon.png")}
                style={{ width: 150, height: 150 }}
              />
            </View>
          </View>
          {/* Tops */}
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.transparent,
              borderRadius: 30,
              width: "100%",
              height: "100%",
              marginTop: 15,
              alignItems: "center"
            }}
          >
            {/* account setting */}
            <TouchableOpacity style={styles.buttonPress}>
              <Text
                style={{
                  color: "#1A1E25",
                  fontSize: 18,
                  fontWeight: "700"
                }}
              >
                Tops
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: COLORS.primary }}>See all</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
            </TouchableOpacity>
            {/* container */}
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.transparent,
                width: "95%",
                height: 180,
                marginTop: -2,
                alignItems: "center",
                flexDirection: "row",
                overflow: "hidden",
                gap: 4
              }}
            >
              {/* box product top 1 */}
              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.white,
                  width: 150,
                  height: "100%",
                  borderRadius: 10,
                  overflow: "hidden",
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 2
                }}
              >
                <Image
                  source={require("../assets/images/tops1.jpg")}
                  style={{
                    width: "100%",
                    height: 150,
                    resizeMode: "contain"
                  }}
                />
                <Text
                  style={{
                    marginLeft: 6,
                    color: "#1A1E25",
                    fontSize: 16,
                    fontWeight: "700"
                  }}
                >
                  Kaos Nevada
                </Text>
              </View>
              {/* box product 2 */}
              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.white,
                  width: 150,
                  height: "100%",
                  borderRadius: 10,
                  overflow: "hidden",
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 2
                }}
              >
                <Image
                  source={require("../assets/images/tops1.jpg")}
                  style={{
                    width: "100%",
                    height: 150,
                    resizeMode: "contain"
                  }}
                />
                <Text
                  style={{
                    marginLeft: 6,
                    color: "#1A1E25",
                    fontSize: 16,
                    fontWeight: "700"
                  }}
                >
                  Kaos Cardinal
                </Text>
              </View>
            </View>
            {/* Bottoms */}
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.transparent,
                borderRadius: 30,
                width: "100%",
                height: "100%",
                marginTop: 15,
                alignItems: "center"
              }}
            >
              {/* setting */}
              <TouchableOpacity style={styles.buttonPress}>
                <Text
                  style={{
                    color: "#1A1E25",
                    fontSize: 18,
                    fontWeight: "700"
                  }}
                >
                  Bottoms
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ color: COLORS.primary }}>See all</Text>
                  <MaterialIcons
                    name="navigate-next"
                    size={24}
                    color={COLORS.primary}
                  />
                </View>
              </TouchableOpacity>
              {/* container */}
              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.transparent,
                  width: "95%",
                  height: 180,
                  marginTop: -2,
                  alignItems: "center",
                  flexDirection: "row",
                  overflow: "hidden",
                  gap: 4
                }}
              >
                {/* box product top 1 */}
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    width: 150,
                    height: "100%",
                    borderRadius: 10,
                    overflow: "hidden",
                    shadowOffset: {
                      width: 0,
                      height: 2
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 2
                  }}
                >
                  <Image
                    source={require("../assets/images/tops1.jpg")}
                    style={{
                      width: "100%",
                      height: 150,
                      resizeMode: "contain"
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 6,
                      color: "#1A1E25",
                      fontSize: 16,
                      fontWeight: "700"
                    }}
                  >
                    Kaos Nevada
                  </Text>
                </View>
                {/* box product 2 */}
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    width: 150,
                    height: "100%",
                    borderRadius: 10,
                    overflow: "hidden",
                    shadowOffset: {
                      width: 0,
                      height: 2
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 2
                  }}
                >
                  <Image
                    source={require("../assets/images/tops1.jpg")}
                    style={{
                      width: "100%",
                      height: 150,
                      resizeMode: "contain"
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 6,
                      color: "#1A1E25",
                      fontSize: 16,
                      fontWeight: "700"
                    }}
                  >
                    Kaos Cardinal
                  </Text>
                </View>
              </View>
              {/* aksesoris */}
            </View>
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
  boxContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    width: 310,
    height: 150,
    position: "relative",
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5
  },
  informationContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: 153,
    height: 150,
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
  },
  buttonPress: {
    width: 300,
    height: 50,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    backgroundColor: COLORS.transparent,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default Wardrobescreen;
