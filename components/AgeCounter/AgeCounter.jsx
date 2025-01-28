import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AgeDisplay } from "../AgeDisplay/AgeDisplay";

export function AgeCounter() {
  const [age, setage] = useState(30);
  function augage() {
    setage(age + 1);
    console.log("J'augmente l'age !", age);
  }
  return (
    <>
      <TouchableOpacity onPress={augage} style={{ backgroundColor: "blue" }}>
        <Text style={{ fontSize: "40" }}>Augmenter </Text>
      </TouchableOpacity>
      <AgeDisplay age={age}></AgeDisplay>
    </>
  );
}
