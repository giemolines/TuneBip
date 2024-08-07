import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';

export default function Index() {
    // STATE HOOKS FOR EMAIL AND PASSWORD
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // SIGN IN AND SIGNUP FUNCTIONS
    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            if (user) router.replace('/(tabs)');
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        }
    };

    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            if (user) router.replace('/(tabs)');
        } catch (error: any) {
            console.log(error);
            alert('Sign up failed: ' + error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.innerContainer}>
                    <Text style={styles.headerText}>TuneBip Login</Text>
                    <Image source={require('../assets/images/tunebip_logo.png')} style={styles.logo}/>
                    <Text style={styles.h2}>Create an account</Text>
                    <Text style={styles.h3}>Enter your email to sign up for TuneBip</Text>
                    <TextInput style={styles.input} placeholder='email@domain.com' value={email}  onChangeText={setEmail} keyboardType='email-address'/>
                    <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true}/>
                    <TouchableOpacity onPress={signIn} style={styles.loginButton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signUp} style={styles.signUpButton}>
                        <Text style={styles.buttonText}>Sign up with email</Text>
                    </TouchableOpacity>
                    <Text style={styles.policy}>By clicking continue, you agree to our <Text style={styles.bold}>Terms of Service</Text> and <Text style={styles.bold}>Privacy Policy</Text></Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    innerContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },

    headerText:{
        fontSize:35,
        fontWeight:'600',
        color: '#000',
    },

    logo:{
        resizeMode: 'contain',
        width:200,
        height:100,
        marginTop: 40,
        marginBottom:40,
    },

    h2:{
        fontSize:23,
        fontWeight:'600',
        marginBottom: 10,
    },

    h3:{
        fontSize:20,
        marginBottom:30
    },

    input:{
        height:50,
        width: '100%',
        borderRadius: 15,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10

    },

    loginButton:{
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 15,
        backgroundColor: 'black',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    signUpButton:{
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 15,
        backgroundColor: 'indigo',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonText:{
        fontSize:20,
        fontWeight:'500',
        textAlign: 'center',
        color: 'white',
    },

    policy:{
        marginTop:80,
        padding:20,
        fontSize:16,
        color: 'grey',
    },

    bold:{
        color: 'black',
        fontWeight:'medium'

    }



    
});
