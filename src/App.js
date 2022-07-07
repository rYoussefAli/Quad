import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button, Image, useWindowDimensions, ScrollView, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { HomeScreen } from './HomeScreen';
import { NotificationsScreen } from './NotificationsScreen';
import { ProfileScreen } from './ProfileScreen';
import { ReslifeScreen } from './Reslife';
import { AcademicsScreen } from './Academics';
import { SettingsScreen } from './Settings';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { DrawerMenu } from './DrawerMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './Login';

export default function App() {

  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const mainstyle = () => {
    return {
      title: 'Welcome to the Quad',
      headerStyle: { backgroundColor: "#12181f" },
      headerTintColor: "#fff",
      headerTitleAlign: 'center',
      headerPressColor: 'red',
      drawerIcon: ({ color }) => (
        <Icon name='home-outline' size={22} color={color} />
      )

    }
  };

  const [radiusS, changeradiusS] = useState(50)

  const LoginContaierPage = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={styles.loginOP} />
      </Stack.Navigator>

    )
  }


  const Main = () => {
    const Dimensions = useWindowDimensions();
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerContent={(props) => <DrawerMenu {...props} />}
        screenOptions={{ // APPLY TO ALL SCREENS
          drawerType: 'back',
          swipeEdgeWidth: Dimensions.width / 4.5,
          headerStyle: { backgroundColor: '#12181f' },
          drawerActiveTintColor: '#009874',
          drawerInactiveTintColor: '#fff',
          headerShadowVisible: false,
        }} >
        {/* <Drawer.Screen name="Profile" component={ProfileScreen} options={profilestyle} /> */}
        <Drawer.Screen name="HomeScreen" component={HomeScreen} options={mainstyle} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={styles.notificationsOP} />
        <Drawer.Screen name="Reslife" component={ReslifeScreen} options={styles.reslifeOP} />
        <Drawer.Screen name="Academics" component={AcademicsScreen} options={styles.academicsOP} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={styles.settingsOP} />
      </Drawer.Navigator>


    )
  };

  return (

    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Logincontainer'
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Screen name='LoginContainer' component={LoginContaierPage} options={styles.stackOP}/>
      <Stack.Screen name='MainAppContainter' component={Main} options={styles.stackOP}/>
      </Stack.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsOP: {
    headerTintColor: '#fff', drawerIcon: ({ color }) => (
      <Icon name='cog-outline' size={22} color={color} />
    )
  },

  academicsOP: {
    headerTintColor: '#fff', drawerIcon: ({ color }) => (
      <Icon name='school-outline' size={22} color={color} />
    )

  },

  notificationsOP: {
    headerTintColor: '#fff', drawerIcon: ({ color }) => (
      <Icon name='notifications-outline' size={22} color={color} />
    )
  },

  reslifeOP: {
    headerTintColor: '#fff', drawerIcon: ({ color }) => (
      <Icon name='pulse-outline' size={22} color={color} />
    )
  },

  loginOP: {
    drawerItemStyle: { display: 'none' }, // hide the login screen from the drawer by a simple way
    headerShown: false,
  },
  stackOP: {
    //headerShown: false,
  }

}
);
