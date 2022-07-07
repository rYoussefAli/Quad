import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NotificationsScreen } from './NotificationsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


export function AcademicsScreen({ navigation }) {


    


    const cv = () => {
        return {
            backgroundColor: '#780',
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center',
            margin: "auto",
            width: "100%",

        }

    };

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
                <Text style={{ fontSize: 24 }}>ACADEMICS</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: "10%",
                left: 0,
                width: "100%",

            }}>
                <Text style={{margin: 10, fontSize:24, color: "#fff", }}>Powered by EVERSE</Text>
                <TouchableOpacity onPress={Platform.OS == 'android' ? null: null}>
                    <View style={cv()}>
                        <Text>
                            Tech Services, Ttech Fe Alrras 😉
                        </Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View >





    );



}