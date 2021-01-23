import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import HistoryPage from "../pages/HistoryPage";


export default function BottomNav() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="dummy" component={LandingPage} />
        <Tab.Screen name="History" component={HistoryPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
