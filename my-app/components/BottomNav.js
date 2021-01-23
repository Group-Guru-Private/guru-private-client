import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import HistoryPage from "../pages/HistoryPage";
import RegisterPage from "../pages/RegisterPage"
import OrderPage from "../pages/OrderPage"
import { useFonts } from "expo-font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BottomNav() {
  const Tab = createMaterialBottomTabNavigator();

  // const [loaded] = useFonts({
  //   Roboto: require('native-base/Fonts/Roboto.ttf'),
  //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  // })

  // if(!loaded) return null

  return (
    <NavigationContainer>
      <Tab.Navigator color="white">
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="dummy"
          component={LandingPage}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryPage}
          options={{
            tabBarLabel: "History",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
