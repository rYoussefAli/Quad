import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NotificationsScreen } from './NotificationsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


export function HomeScreen({ navigation }) {


    const kill_web = () => {
        if (confirm("Do you really wanna change?\nThis process is irreversible")) {

            cc == 'green' ? cc_('black') : cc_('green');
        }
    };

    const kill_android = () => {
        Alert.alert("Do you really wanna change?", "This process is irreversible", [
            {
                text: "OK",
                onPress: () => {
                    cc == 'green' ? cc_('red') : cc_('green');
                    navigation.navigate('Notifications');
                }

            },
            {
                text: "Cancel",
                onPress: () => {
                    console.log(Platform.OS);

                }
            }
        ])
    };

    const [cc, cc_] = useState("red");

    const cv = () => {
        return {
            backgroundColor: cc,
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
            backgroundColor: '#12181f',
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
                <Text style={{ fontSize: 24, fontFamily: 'Roboto', color: '#fff', fontWeight: '300' }}>Quad+</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: "10%",
                left: 0,
                width: "100%",

            }}>
                <Text style={{ color: '#fff', fontFamily: 'Roboto' }}>Powered by Arakhno</Text>
                <TouchableOpacity onPress={Platform.OS == 'android' ? kill_android : () => { kill_web(); console.log(Platform.OS) }}>
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