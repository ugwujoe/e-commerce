import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { TabsIcon } from "@/components/TabsIcon";
import { colors } from "@/constants";
import { StatusBar } from "react-native";
import { CartIcon } from "@/components/CartIcon";

const TabsLayout = () => {
  return (
   <>
   <StatusBar barStyle='light-content'/>
     <Tabs
      screenOptions={{
        tabBarInactiveTintColor: colors.dark,
        tabBarActiveTintColor: colors.yellow,
        headerTintColor: colors.yellow,
        headerStyle: {backgroundColor:colors.dark},
        headerRight: () => <CartIcon />,
        tabBarHideOnKeyboard: true
      

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon 
            focused={focused} 
            name="home"
             size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "",
          tabBarLabel: 'Menu',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon
             focused={focused} 
             name="bars" 
             size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "",
          tabBarLabel: 'more',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon
             focused={focused} 
             name="amazon"
              size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "",
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, size }) => (
            <TabsIcon 
            focused={focused} 
            name="user" 
            size={size} 
            />
          ),
        }}
      />
    </Tabs>
   
   </>
  );
};

export default TabsLayout;
