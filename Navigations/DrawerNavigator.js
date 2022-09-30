import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, ROUTES } from "../constants";
import { Car_History, Notifications, Car } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomDrawer from "../Components/CustomDrawer";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="home-sharp" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.HISTORY_DRAWER}
        component={Car_History}
        options={{
          headerShown: true,
          title: "History",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="time" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          headerShown: true,
          title: "Notifications",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.CAR_DRAWER}
        component={Car}
        options={{
          headerShown: true,
          title: "Car",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="car" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
