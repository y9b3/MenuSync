import React, { useState } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Child } from "./components/Child/Child";

export default function App() {
  function hello(name) {
    Alert.alert("coucou" + name);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          backgroundColor: "grey",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={hello}>
          <Text>Clique sur Moi !!!!</Text>
        </TouchableOpacity>
        <Child onPress={hello}></Child>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
