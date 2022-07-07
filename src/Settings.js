import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NotificationsScreen } from './NotificationsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from './Firebase';


export function SettingsScreen() {
    const navigation = useNavigation()

    const handleSignOut = () => {


        auth
            .signOut()
            .then(() => {
                navigation.replace('LoginContainer')
            })
            .catch(err => alert(err.message))
    }




    const styles = StyleSheet.create({


        container: {
            flex: 1,
            backgroundColor: '#242526',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });


    return (



        <View style={styles.container}>
            <View style={{
                flex: 1,
                backgroundColor: '#705',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: "10%",
                width: "100%",
                height: "8%",
            }}>
                <Text style={{ fontSize: 24 }}>SETTINGS</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: "10%",
                left: 0,
                width: "100%",

            }}>
                <TouchableOpacity onPress={handleSignOut}>
                    <Text style={{ margin: 10, fontSize: 24, color: "#fff", }}>SIGN OUT</Text>
                </TouchableOpacity></View>
            <StatusBar style="light" />
        </View >





    );



}