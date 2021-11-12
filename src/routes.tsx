import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "./screens/Welcome";
import { Dashboard } from "./screens/Dashboard";

const AppStack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
