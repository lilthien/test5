import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const History = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Car History!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default History;
const styles = StyleSheet.create({});
