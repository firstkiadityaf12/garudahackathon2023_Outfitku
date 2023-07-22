import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const Loginscreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleLoginSuccess = () => {
    navigation.navigate("Loginsuccess");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxsignup}>
        <View style={{ marginVertical: 25 }}>
          <Text style={styles.title}>Hi, selamat datang! 👋</Text>
          <Text style={{ fontSize: 16, color: "#999EA1" }}>
            Masukkan email dan kata sandi anda untuk bisa login.
          </Text>
        </View>
        {/* box email */}
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.textlabel}>Email Address</Text>
          <View style={styles.boxinput}>
            <TextInput
              placeholder="Masukan email anda"
              placeholderTextColor={COLORS.gray}
              keyboardType="email-address"
              style={{ width: "100%" }}
            />
          </View>
        </View>
        {/* kata sandi */}
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.textlabel}>Kata Sandi</Text>
          <View style={styles.boxinput}>
            <TextInput
              placeholder="Masukan kata sandi anda"
              placeholderTextColor={COLORS.gray}
              secureTextEntry={isPasswordShown}
              style={{ width: "100%" }}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{ position: "absolute", right: 12 }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/* kotak checkbox */}
        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.black : undefined}
          />
          <Text style={{ fontWeight: 300 }}>Remember Me</Text>
        </View>
        {/* button daftar */}
        <TouchableOpacity style={styles.button} onPress={handleLoginSuccess}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
        {/* batas button atau */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20
          }}
        >
          <View style={styles.lineblock} />
          <Text style={{ color: COLORS.gray }}>Atau</Text>
          <View style={styles.lineblock} />
        </View>
        {/* kotak google */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity style={styles.googlebutton}>
            <Image
              source={require("../assets/images/google.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text>Lanjutkan dengan Google</Text>
          </TouchableOpacity>
        </View>
        {/* text bawah */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 150
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Belum punya akun?
          </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6
              }}
            >
              Buat Akun
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  boxsignup: {
    flex: 1,
    marginHorizontal: 22
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black
  },
  textlabel: {
    fontSize: 16,
    fontWeight: 600,
    marginVertical: 8
  },
  boxinput: {
    width: "100%",
    height: 48,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12
  },
  boxinputTelpon: {
    width: "100%",
    height: 48,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold"
  },
  lineblock: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray,
    marginHorizontal: 10
  },
  googlebutton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginLeft: 4,
    borderRadius: 10
  }
});

export default Loginscreen;
