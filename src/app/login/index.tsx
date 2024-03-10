import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const LoginScreen = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "Login Screen",
          headerTitleAlign: "center",
        }}
      />
      <Text>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
