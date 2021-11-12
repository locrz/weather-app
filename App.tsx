import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, StatusBar } from "react-native";

import { Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
