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

const Comoutscreen = () => {
  return (
    <ImageBackground
      source={require("../assets/bgMain.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        {/* search bar */}
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
        {/* banner */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/images/banner.png")}
            style={{ width: 310, height: 206 }}
          />
        </View>
        {/* more category */}
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
          <TouchableOpacity style={styles.buttonPress}>
            <Text
              style={{
                color: "#1A1E25",
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Category
            </Text>
            <Text style={{ color: COLORS.primary, fontWeight: "700" }}>
              More Category
            </Text>
          </TouchableOpacity>
        </View>
        {/* title icon */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
          }}
        >
          {/* category 1 */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image
                source={require("../assets/images/shirt.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text style={styles.menuLabel}>Man Shirt</Text>
          </TouchableOpacity>
          {/* category 2 */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image
                source={require("../assets/images/dress.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text style={styles.menuLabel}>Dress</Text>
          </TouchableOpacity>
          {/* category 3 */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image
                source={require("../assets/images/man-bag.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text style={styles.menuLabel}>Man Work Equipment</Text>
          </TouchableOpacity>
          {/* category 4 */}
        </View>
        {/* product */}
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
          <TouchableOpacity style={styles.buttonPress}>
            <Text
              style={{
                color: "#1A1E25",
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Product
            </Text>
            <Text style={{ color: COLORS.primary, fontWeight: "700" }}>
              See More
            </Text>
          </TouchableOpacity>
        </View>
        {/* card product */}
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.transparent,
            width: "95%",
            height: 220,
            marginTop: -2,
            alignItems: "center",
            flexDirection: "row",
            overflow: "hidden",
            gap: 6,
            marginLeft: 5
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              width: 150,
              height: "98%",
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
              source={require("../assets/images/jacket-product.png")}
              style={{
                width: "100%",
                height: 150,
                resizeMode: "contain"
              }}
            />
            <Text
              style={{
                marginLeft: 8,
                marginTop: 8,
                color: "#1A1E25",
                fontSize: 14,
                fontWeight: "700"
              }}
            >
              Jaket Cardinal
            </Text>
            <Text
              style={{
                marginLeft: 8,
                marginTop: 6,
                color: COLORS.gray,
                fontSize: 12,
                fontWeight: "700"
              }}
            >
              Rp.100.000
            </Text>
          </View>
          {/* product 2 */}
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              width: 150,
              height: "98%",
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
              source={require("../assets/images/sepatu-product.png")}
              style={{
                width: "100%",
                height: 150,
                resizeMode: "contain"
              }}
            />
            <Text
              style={{
                marginLeft: 8,
                marginTop: 8,
                color: "#1A1E25",
                fontSize: 14,
                fontWeight: "700"
              }}
            >
              FS - Nike air
            </Text>
            <Text
              style={{
                marginLeft: 8,
                marginTop: 6,
                color: COLORS.gray,
                fontSize: 12,
                fontWeight: "700"
              }}
            >
              Rp.120.000
            </Text>
          </View>
        </View>
        {/* block */}
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            width: 100,
            height: 100
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 18,
              fontWeight: "700"
            }}
          ></Text>
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
  buttonPress: {
    width: 300,
    height: 50,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
    backgroundColor: COLORS.transparent,
    flexDirection: "row",
    alignItems: "center"
  },
  menuItem: {
    width: 100,
    height: 115,
    borderRadius: 12,
    alignItems: "center"
  },
  menuIcon: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: "#FFF2EA",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  menuLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "center"
  }
});

export default Comoutscreen;
