import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./Navigations/AuthNavigator";

export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
