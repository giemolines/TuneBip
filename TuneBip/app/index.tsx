import {View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button} from  'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { router } from 'expo-router'

const index  = () => {
    //STATE HOOKS FOR EMAIL AND PASSWORD
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //SIGN IN AND SIGNUP FUNCTIONS
    const signIn = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) router.replace('/(tabs)');
        } catch (error: any){
            console.log(error)
            alert('Sign in failed: ' + error.message);
        }
    }
    const signUp = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password)
            if (user) router.replace('/(tabs)');
        } catch (error: any){
            console.log(error)
            alert('Sign in failed: ' + error.message);
        }
    }

    return(
        <SafeAreaView>
            <KeyboardAvoidingView>
                <Text>Login</Text>
                <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
                <TextInput placeholder='Password' value={password} onChangeText={setPassword}/>
                <TouchableOpacity onPress={signIn}>
                    <Button title='Login'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={signIn}>
                    <Button title='Register'/>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </SafeAreaView>
        
    )
}

export default index