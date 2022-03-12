import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { theme } from '../config/colors'
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../firebase-config'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.info('Logged in with:', user.email);
        navigation.navigate("Main");
        console.log(userCredentials)
      })
      .catch(error => console.error(error.message))
  }

  return (
    // Using react-natives built in components.
    <SafeAreaView style={styles.container}>
        <Text style={styles.logIn}>Log in</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword', { name: 'ResetPassword' }) }>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.dont}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register', { name: 'Register' })}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:"20%",
        backgroundColor:"#060614",
        alignItems:'center'
    },
    logIn:{
        color:'white',
        fontSize:44,
        marginTop:50,
        marginBottom:30
    },
    input:{
        width:'90%',
        height:50,
        marginTop:30,
        borderBottomWidth:1.5,
        padding:10,
        borderBottomColor:theme.colors.colorGrey,
        color:'white'
        
    },
    forgotPassword:{
        width:'90%',
        marginBottom:24,
        alignItems:'flex-end'
    },
    row:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center'
    },
    forgot:{
        fontSize:15,
        color:theme.colors.colorPink,
        marginTop:20
    },
    link:{
        fontWeight:'bold',
        color:theme.colors.colorPink
    },
    button:{
        alignItems:'center',
        backgroundColor:theme.colors.colorPink,
        padding:10,
        width:'90%',
        borderRadius:15,
        height:50
    },
    buttonText:{
        fontSize:18,
        fontWeight:'700',
        color:theme.colors.lightText,
    },
    dont:{
        color:'white'
    }
});

export default Login;