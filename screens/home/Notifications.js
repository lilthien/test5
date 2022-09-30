import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { COLORS } from "../../constants";

const Notifications = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Notification!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
