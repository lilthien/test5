import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { COLORS, ROUTES } from "../constants";
import { Home, Notifications, Car_History } from "../screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingsNavigator from "./SettingsNavigator";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.HISTORY) {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          title: "Home",
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
        name={ROUTES.HOME_TAB}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "History",
          title: "History",
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
        name={ROUTES.HISTORY}
        component={Car_History}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Notifications",
          title: "Notifications",
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          tabBarLabel: "Settings",
          title: "Settings",
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
    borderWidth: 0.5,
    borderRadius: 25,
  },
});
