import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import { COLORS } from "../constants";

const Profilescreen = () => {
  return (
    <ImageBackground
      source={require("../assets/bgMain.png")}
      style={styles.backgroundImage}
    >
      {/* container profile */}
      <View style={styles.profileContainer}>
        <View style={styles.semiCircle}>
          <Image
            source={require("../assets/images/profilephotos.png")}
            style={styles.customImage}
          />
          <Image
            source={require("../assets/images/editIcon.png")}
            style={styles.iconPencil}
          />
        </View>
        <Text style={styles.profileText}>Anila Dwi Lestari</Text>
        {/* keterangan */}
        <View style={styles.informationContainer}>
          <Image
            source={require("../assets/images/userIcon.png")}
            style={{ width: 22, height: 16 }}
          />
          <Text style={styles.infomrationText1}>12 Friends</Text>
          <Image
            source={require("../assets/images/loveIcon.png")}
            style={{ width: 17, height: 16 }}
          />
          <Text style={styles.infomrationText2}>30 Favorites</Text>
        </View>
      </View>
      {/* container pengaturan */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          borderRadius: 30,
          width: "100%",
          height: "100%",
          marginTop: 25,
          alignItems: "center"
        }}
      >
        {/* account setting */}
        <TouchableOpacity style={styles.buttonPress}>
          <Image
            source={require("../assets/images/settingIcon.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text>Account setting</Text>
        </TouchableOpacity>
        {/* privacy & security */}
        <TouchableOpacity style={styles.buttonPress}>
          <Image
            source={require("../assets/images/privacyIcon.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text>Privacy & Security</Text>
        </TouchableOpacity>
        {/* notification */}
        <TouchableOpacity style={styles.buttonPress}>
          <Image
            source={require("../assets/images/notificationIcon.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text>Notification</Text>
        </TouchableOpacity>
        {/* search history */}
        <TouchableOpacity style={styles.buttonPress}>
          <Image
            source={require("../assets/images/searchIcon.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text>Search History</Text>
        </TouchableOpacity>
        {/* logout */}
        <TouchableOpacity style={styles.buttonPress}>
          <Image
            source={require("../assets/images/logoutIcon.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center"
  },
  profileContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    marginTop: 100,
    width: 310,
    height: 200,
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
  customImage: {
    width: 75,
    height: 75,
    alignSelf: "center"
  },
  semiCircle: {
    position: "absolute",
    top: -50,
    width: 100,
    height: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    left: 105,
    paddingTop: 5,
    paddingLeft: 10,
    alignContent: "center"
  },
  iconPencil: {
    position: "absolute",
    width: 25,
    height: 25,
    bottom: 2,
    right: 5,
    borderRadius: 8
  },
  profileText: {
    fontSize: 22,
    color: COLORS.black,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 70
  },
  informationContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    margin: 30,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5
  },
  infomrationText1: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: "center",
    fontWeight: "600"
  },
  infomrationText2: {
    fontSize: 14,
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "600"
  },
  buttonPress: {
    marginTop: 15,
    marginButtom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 300,
    height: 60,
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  }
});

export default Profilescreen;
