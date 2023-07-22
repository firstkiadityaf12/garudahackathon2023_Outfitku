import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import screen
import SplashScreen from "./screens/Splashscreen";
import OnboardingScreen from "./screens/Onboardingscreen";
import OnboardingScreen1 from "./screens/Onboardingscreen1";
import OnboardingScreen2 from "./screens/Onboardingscreen2";
import Getstarted from "./screens/Getstarted";

// login
import LoginScreen from "./screens/Loginscreen";
import LoginSuccess from "./screens/LoginSuccess";

// register and preferensi
import RegisterScreen from "./screens/Registrationscreen";
import PreferensiScreen from "./screens/Preferensiscreen";
import QuestionScreen1 from "./screens/Questionscreen1";
import QuestionScreen2 from "./screens/Quesetionscreen2";
import QuestionScreen3 from "./screens/Questionscreen3";
import QuestionScreen4 from "./screens/Questionscreen4";
import RegistrationSucces from "./screens/RegistrationSuccess";

// main tab screen
import HomeScreen from "./screens/Homescreen";
import WardrobeScreen from "./screens/Wardrobescreen";
import GenoutScreen from "./screens/Genoutscreen";
// import EduoutScreen from "./screens/Eduoutscreen";
// import WishlistScreen from "./screens/Wishlistscreen";
import ComoutScreen from "./screens/Comoutscreen";
import ProfileScreen from "./screens/Profilescreen";
import { COLORS } from "./constants";

// homepress
import AnalyticsScreen from "./screens/AnalyticsScreen";
import GenerateScreen from "./screens/GenerateOutfitScreen";
import GenerateScreen2 from "./screens/GenerateOutfitScreen2";

// initial lib
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
};

// option home
const HomeScreenOption = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={
          focused
            ? require("./assets/home-active.png")
            : require("./assets/home.png")
        }
        style={{
          width: 25,
          height: 25,
          resizeMode: "contain"
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: focused ? COLORS.primary : COLORS.gray,
          fontWeight: "500"
        }}
      >
        Home
      </Text>
    </View>
  )
};

// option wardorobe
const WardrobeScreenOption = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={
          focused
            ? require("./assets/wardrobe-active.png")
            : require("./assets/wardrobe.png")
        }
        style={{
          width: 25,
          height: 25,
          resizeMode: "contain"
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: focused ? COLORS.primary : COLORS.gray,
          fontWeight: "500"
        }}
      >
        Wardrobe
      </Text>
    </View>
  )
};

// genout wardorobe
const GenoutScreenOption = {
  tabBarIcon: ({ focused }) => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        width: Platform.OS == "ios" ? 50 : 60,
        height: Platform.OS == "ios" ? 50 : 60,
        top: Platform.OS == "ios" ? -10 : -20,
        borderRadius: Platform.OS == "ios" ? 25 : 30
      }}
    >
      <Image
        source={
          focused
            ? require("./assets/genouticon.png")
            : require("./assets/genouticon.png")
        }
        style={{
          width: 25,
          height: 25,
          resizeMode: "contain"
        }}
      />
    </View>
  )
};

// option comout
const ComoutScreenOption = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={
          focused
            ? require("./assets/outcome-active.png")
            : require("./assets/outcome.png")
        }
        style={{
          width: 25,
          height: 25,
          resizeMode: "contain"
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: focused ? COLORS.primary : COLORS.gray,
          fontWeight: "500"
        }}
      >
        OutCom
      </Text>
    </View>
  )
};

// option profile
const ProfileScreenOption = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={
          focused
            ? require("./assets/profile-active.png")
            : require("./assets/profile.png")
        }
        style={{
          width: 25,
          height: 25,
          resizeMode: "contain"
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: focused ? COLORS.primary : COLORS.gray,
          fontWeight: "500"
        }}
      >
        Profile
      </Text>
    </View>
  )
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboardingscreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboardingscreen1"
          component={OnboardingScreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboardingscreen2"
          component={OnboardingScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Getstarted"
          component={Getstarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loginsuccess"
          component={LoginSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preferensiscreen"
          component={PreferensiScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questionscreen1"
          component={QuestionScreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questionscreen2"
          component={QuestionScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questionscreen3"
          component={QuestionScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questionscreen4"
          component={QuestionScreen4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registrarionsuccess"
          component={RegistrationSucces}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Analyticscreen"
          component={AnalyticsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Generateoutfit"
          component={GenerateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Generateoutfitscreen2"
          component={GenerateScreen2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreenOption}
      />
      <Tab.Screen
        name="Wardrobe"
        component={WardrobeScreen}
        options={WardrobeScreenOption}
      />
      <Tab.Screen
        name="Genout"
        component={GenoutScreen}
        options={GenoutScreenOption}
      />
      <Tab.Screen
        name="Comout"
        component={ComoutScreen}
        options={ComoutScreenOption}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={ProfileScreenOption}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    fontWeight: "normal"
  }
});

export default App;
