import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import { COLORS } from "../../constants";
const Car = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Car Management</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Car;

const styles = StyleSheet.create({});
