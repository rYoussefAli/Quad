import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button, Image, Icon, useWindowDimensions, ScrollView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from './Firebase';


export const Login = ({ navigation }) => {

    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')

    const [userError, setUserError] = useState(false);

    // const navigation = useNavigation()

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("MainAppContainter");
            }
        })
        return unsub
    }, [])

    const resetPass = (err) => {
        //auth/wrong-password
        if (err.code == "auth/wrong-password") {

            if (Platform.OS == 'android') {

                Alert.alert("Oops", "It seems that you have registered before but you did not put the same password as the last time.\n\nDo you remember your password?", [
                    {
                        text: "Let me try again",
                        onPress: () => {
                            null
                        }

                    },
                    {
                        text: "Reset my password",
                        onPress: () => {
                            console.log(Platform.OS);

                        }
                    }
                ])
            }

            else if (Platform.OS == 'web') {

                null
            }

        }
    }

    const handleLogin = (err) => {
        console.log("Loginentereddd")
        if (err.code == "auth/email-already-in-use") {

            auth
                .signInWithEmailAndPassword(Email, Pass)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    console.log('Login Done', user.email)
                })
                .catch(err2 => resetPass(err2))
        }
        else {
            alert(err)
            console.log("else error")
        }
        // "auth/email-already-in-use"

    }

    const handleSignUp = () => {
        console.log("Signup pass");
        
        setEmail(Email.trim());
        
        // Email criteria
        // @alastudents.org

        if (Email.slice(-16)==="@alastudents.org"){
            auth
            .createUserWithEmailAndPassword(Email, Pass)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Sign up Done', user.email)
            })
            .catch(err => handleLogin(err))

        }
        else {
            setUserError(true)
            Alert.alert('Mmm', 'It seems that you are not an ALA student. Please use your issued @alastudents.org email if available.', [
                {
                    text: "I am an ALA student",
                    onPress: () => {
                        null
                    }
    
                },
                {
                    text: "I am not",
                    onPress: () => {
                        console.log("NON ALA STUDENT");

    
                    }
                }
            ])
        }



       
    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
        >

            <View style={styles.inputBox}>
                <TextInput
                    placeholder='xxxx@alastudents.org'
                    value={Email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoComplete='email'
                    //////////////////// checkkk
                    error={userError}
                >

                </TextInput>


                <TextInput
                    placeholder='*********'
                    value={Pass}
                    onChangeText={text => setPass(text)}
                    style={styles.input}
                    autoCapitalize='none'
                    autoComplete='password'
                    secureTextEntry
                >

                </TextInput>

            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.button}
                >
                    <Text style={styles.buttontext}>Join us!</Text>
                </TouchableOpacity>

            </View>


            <StatusBar style='light' />
        </KeyboardAvoidingView>

    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#12181f",


    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },

    inputBox: { width: "80%" },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: "#009874",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttontext: {
        fontWeight: 'bold',
        color: '#fff',
    },
})