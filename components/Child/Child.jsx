import { Text, TouchableOpacity } from "react-native";

export function Child({ onPress }) {
  function onClick() {
    onPress("Yanis");
  }
  return (
    <>
      <TouchableOpacity onPress={onClick}>
        <Text>Click me !!!!</Text>
      </TouchableOpacity>
    </>
  );
}
