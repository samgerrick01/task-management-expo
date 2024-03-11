import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const index = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.main}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar style="light" />
        <Image
          source={require("@assets/images/background.png")}
          style={styles.bgImg}
        />
        <View style={styles.lightIcon}>
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{ height: 225, width: 90 }}
            source={require("@assets/images/light.png")}
          />
          <Animated.Image
            entering={FadeInUp.delay(400).duration(1000).springify()}
            style={{ height: 160, width: 65 }}
            source={require("@assets/images/light.png")}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              style={styles.titleText}
            >
              Login
            </Animated.Text>
          </View>
          <View style={styles.formWrapper}>
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={styles.textInputWrapper}
            >
              <TextInput placeholder="Email" placeholderTextColor="grey" />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={styles.textInputWrapper}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{
                width: "100%",
              }}
            >
              <TouchableOpacity style={styles.loginBtnWrapper}>
                <Text style={styles.loginBtnText}>Login</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={styles.registerBtnWrapper}
            >
              <Text>Don't have an account? </Text>
              <Link href={`/register`} asChild>
                <TouchableOpacity>
                  <Text style={{ color: "#1a68b5" }}>SignUp</Text>
                </TouchableOpacity>
              </Link>
            </Animated.View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  bgImg: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  lightIcon: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    position: "absolute",
  },
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 150,
    paddingBottom: 10,
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontFamily: "MulishBold",
    fontSize: 40,
  },
  formWrapper: {
    display: "flex",
    alignItems: "center",
    marginHorizontal: 4,
    marginTop: 4,
    paddingHorizontal: 10,
    gap: 10,
  },
  textInputWrapper: {
    backgroundColor: "#dedfdd",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  loginBtnWrapper: {
    width: "100%",
    backgroundColor: "#2ba1dd",
    padding: 3,
    borderRadius: 10,
    marginVertical: 10,
  },
  loginBtnText: {
    fontSize: 16,
    fontFamily: "MulishItalic",
    textAlign: "center",
    color: "white",
    paddingVertical: 10,
  },
  registerBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
