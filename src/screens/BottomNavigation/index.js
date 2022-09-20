import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../home";
import Granada from "../galleryGranada";
import Contact from "../contact";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Comments from "../comments";
import SignInScreen from "../SignInScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      activeColor="#FB8500"
      labelStyle={{ fontSize: 15 }}
      style={{ backgroundColor: "green" }}
      //this has to be added otherwise it does not change a color
      screenOptions={({}) => ({
        tabBarInactiveTintColor: "#f48b28",
        tabBarActiveTintColor: "#023047",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={Granada}
        options={{
          tabBarLabel: "Gallery",
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="photo-library" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Comments"
        component={Comments}
        options={{
          tabBarLabel: "Comments",
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="speaker-notes" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="email" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
