import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Human } from "./components/Human/Human";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
        <View style={s.square}>
          <Human
            firstName={"Yanis"}
            lastName={"Boudjelal"}
            age={21}
            isHappy={true}
            doSomething={function () {
              console.log("hello");
            }}
            car={{ brand: "Alpine", maxSpeed: 250 }}
          >
            <Image
              style={{ height: 200, width: 300 }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofZXK-_G7CFJF8T32HbnSjj-Vtl9w9BLXUg&s",
              }}
            />
          </Human>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
