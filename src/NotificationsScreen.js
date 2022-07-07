import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export function NotificationsScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Yaraaab</Text>
            
            <StatusBar style='light'/>
        </SafeAreaView>
        

    );
}