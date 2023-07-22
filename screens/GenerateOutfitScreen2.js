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
import { Ionicons } from "@expo/vector-icons";

const GenerateScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.containerIcon}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        {/* container */}
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
                backgroundColor: COLORS.transparent,
                width: 150,
                height: "98%",
                borderRadius: 10,
                overflow: "hidden"
              }}
            >
              <Text
                style={{
                  marginLeft: 8,
                  marginTop: 8,
                  color: "#1A1E25",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "center"
                }}
              >
                Weather
              </Text>
              <Image
                source={require("../assets/images/cuacaIcon.png")}
                style={{
                  width: "100%",
                  height: 150,
                  resizeMode: "contain"
                }}
              />
            </View>
            {/* product 2 */}
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.transparent,
                width: 150,
                height: "98%",
                borderRadius: 10,
                overflow: "hidden"
              }}
            >
              <Text
                style={{
                  marginLeft: 8,
                  marginTop: 8,
                  color: "#1A1E25",
                  fontSize: 14,
                  fontWeight: "700",
                  textAlign: "center"
                }}
              >
                Date
              </Text>
              <Image
                source={require("../assets/images/tanggalIcon.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain"
                }}
              />
            </View>
          </View>
        </View>
        {/* button generate */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 2,
            marginLeft: 12,
            marginRight: 12,
            gap: 2
          }}
        >
          {/* Non-Formal */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Non-Formal</Text>
          </TouchableOpacity>
          {/* Semi-Foral */}
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Semi-Foral</Text>
          </TouchableOpacity>
          {/* Formal */}
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Formal</Text>
          </TouchableOpacity>
        </View>
        {/* image outfit */}
        <View
          style={{
            width: 327,
            height: 250,
            marginLeft: 15,
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.white,
            borderRadius: 15,
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 4
          }}
        >
          <Image
            source={require("../assets/images/genoutfit1.png")}
            style={{ width: 197, height: 214 }}
          />
        </View>
        {/* recomendation */}
        <View style={{ marginLeft: 15, marginTop: 15 }}>
          <Text
            style={{ color: COLORS.black, fontSize: 20, fontWeight: "500" }}
          >
            Outfit Reccomendation
          </Text>
        </View>
        {/* card product */}
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.transparent,
            width: "95%",
            height: 150,
            marginTop: 10,
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
                height: "100%",
                resizeMode: "contain"
              }}
            />
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
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerIcon: {
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
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400"
  },
  button1: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5
  },
  buttonText1: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: "400"
  },
  button2: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5
  },
  buttonText2: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: "400"
  }
});

export default GenerateScreen;
