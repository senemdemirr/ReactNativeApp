import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { theme } from '../config/colors'
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../firebase-config'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.info('Registered with:', user.email);
        navigation.navigate("Login");
      })
      .catch(error => console.error(error.message))
  }

  return (
    <SafeAreaView style={styles.dis}>
        <View style={styles.container}>
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
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <Text style={styles.already}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login', { name: 'Login' })}>
                  <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dis:{
    backgroundColor:"#060614",
    alignItems:'center',
    flex:1,
    width:'100%'
  },
  container: {
    flex: 1,
    marginTop: "20%",
    width:'100%'
  },
  input: {
    height: 50,
    marginTop: 30,
    borderBottomWidth: 1.5,
    padding: 10,
    borderBottomColor:theme.colors.colorGrey,
    color:'white',
    width:'90%',
    marginLeft:20
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.colorPink,
    padding: 10,
    marginTop: 50,
    borderRadius:15,
    marginLeft:20,
    height:50,
    width:'90%'
  },
  buttonText: {
    color: theme.colors.lightText,
    fontWeight: '700',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: "center"
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.colorPink,
    marginTop:20
  },
  already:{
    color:'white',
    marginTop:20
  }
});

export default Register;

