import { Text, View, Image } from "react-native";

export function Human({ firstName, lastName, age, car, children }) {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>
        Mon prénom est {firstName} et mon nom de famille est {lastName} et j'ai{" "}
        {age} ans
      </Text>
      <Text>
        Ma voiture est une {car.brand} et elle va au max a {car.maxSpeed}
      </Text>
      {children}
    </View>
  );
}
