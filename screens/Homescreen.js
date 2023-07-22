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

const Homescreen = ({ navigation }) => {
  const handleToStatistic = () => {
    navigation.navigate("Analyticscreen");
  };

  return (
    <ImageBackground
      source={require("../assets/bgMain.png")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <SafeAreaView>
          <View style={styles.nameDasboard}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 16,
                fontWeight: "600"
              }}
            >
              Hi, Anila Dwi Lestari
            </Text>
            <TouchableOpacity style={styles.notifButton}>
              <Ionicons name="notifications" size={30} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          {/* text */}
          <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                fontSize: 28,
                color: COLORS.white,
                fontWeight: "600",
                flexWrap: "wrap"
              }}
            >
              Choose a style your outfit now!
            </Text>
          </View>
          {/* box search */}
          <View style={{ marginTop: 10 }}>
            <SearchBar />
          </View>
          {/* Style analysis */}
          <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Style Analisis
            </Text>
            <TouchableOpacity onPress={handleToStatistic}>
              <Image
                source={require("../assets/images/statistic.png")}
                style={{ width: 325, height: 275, marginTop: 10 }}
              />
            </TouchableOpacity>
          </View>
          {/* 2 box left right */}
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            {/* box 1 */}
            <TouchableOpacity
              style={{
                backgroundColor: "#2DB398",
                width: 160,
                height: 80,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 6,
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: 12,
                marginBottom: 10
              }}
              onPress={handleToStatistic}
            >
              <Text style={styles.titleBox2} numberOfLines={2}>
                Total Items
              </Text>
              <Text style={styles.numBox2}>54</Text>
            </TouchableOpacity>
            {/* box 2 */}
            <TouchableOpacity
              style={{
                backgroundColor: "#E65D4A",
                width: 160,
                height: 80,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 6,
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: 12,
                marginBottom: 10
              }}
              onPress={handleToStatistic}
            >
              <Text style={styles.titleBox2} numberOfLines={2}>
                Underutilized Outfits
              </Text>
              <Text style={styles.numBox2}>7</Text>
            </TouchableOpacity>
          </View>
          {/* Menu */}
          <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: 18,
                fontWeight: "700"
              }}
            >
              Menu
            </Text>
            {/* menu icon dan label */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10
              }}
            >
              {/* Menu Item 1 */}
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Image
                    source={require("../assets/images/recomendation.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </View>
                <Text style={styles.menuLabel}>Recommendation</Text>
              </TouchableOpacity>

              {/* Menu Item 2 */}
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Image
                    source={require("../assets/images/history.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </View>
                <Text style={styles.menuLabel}>History</Text>
              </TouchableOpacity>

              {/* Menu Item 3 */}
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Image
                    source={require("../assets/images/wishlist.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </View>
                <Text style={styles.menuLabel}>Wishlist</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* blocking */}
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
    justifyContent: "space-between",
    paddingLeft: 12,
    flexDirection: "row"
  },
  notifButton: {
    right: 12,
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14
  },
  titleBox2: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
    flexWrap: "wrap",
    flexDirection: "row",
    textAlign: "left"
  },
  numBox2: {
    color: COLORS.white,
    fontSize: 46,
    fontWeight: "700"
  },
  menuItem: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignItems: "center"
  },
  menuIcon: {
    width: 70,
    height: 70,
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

export default Homescreen;
