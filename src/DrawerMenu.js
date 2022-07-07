import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { auth } from './Firebase';


export const DrawerMenu = (props) => {
    return (
        // Drawer Background color
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#2A3D4E' }}>

            <ImageBackground source={require('./grid.png')}>
                <View style={{
                    display: "flex",
                    padding: 20,
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey'

                }}>
                    <View>

                        <Image
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 50,
                            }}
                            source={require('./lol.jpeg')} // Student Photo or smth
                        />
                    </View >

                    <View style={{
                        flexBasis: "60%", display: 'flex', marginLeft: 10,
                        alignItems: 'flex-start', justifyContent: 'center'
                    }}>

                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
                            {auth.currentUser?.displayName}
                        </Text>

                        <Text style={{ color: 'black', fontSize: 12, marginTop: 15}}>
                            Here we go
                        </Text>

                    </View>
                </View>
            </ImageBackground>

            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )

};