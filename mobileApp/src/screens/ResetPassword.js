import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
// Importing components from react-native library.
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

import { theme } from '../config/colors'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
 
  const navigation = useNavigation()

  const handleSend = () => {
    console.info('Şifre gönderildi');
    navigation.navigate("Login");
  }

  return (
    // Using react-natives built in components.
    <SafeAreaView style={styles.dis}>
      <View style={styles.container}>
        <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dis:{
    backgroundColor:"#060614",
    flex: 1,
    flexDirection:'row',
  },
  container:{
    width:'100%',
  },
  input: {
    width:'90%',
    height: 50,
    borderBottomWidth:1.5,
    padding: 10,
    marginLeft:20,
    borderBottomColor:theme.colors.colorGrey,
    marginTop:240,
    color:'white'
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.colorPink,
    padding: 10,
    marginTop:40,
    width:'90%',
    marginLeft:20,
    borderRadius:15,
    height:50
  },
  buttonText: {
    color: theme.colors.lightText,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ResetPassword;

