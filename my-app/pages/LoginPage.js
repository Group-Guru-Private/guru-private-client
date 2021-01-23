import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Touchable } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <LinearGradient
              // Background Linear Gradient
              colors={['#008bb5','#48bcae']}
              style={{height: '100%'}}
          >
          <View style={styles.container} >
              <Text style={{fontSize: 50}}>Login</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                placeholderTextColor='white'
                value={email}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor='white'
                onChangeText={text => setPassword(text)}
                value={password}
              />
          </View>
          <View
              style={styles.containerbot}
          >
              <TouchableHighlight style={styles.button} onPress={e => {console.log('masuk')}}>
                  <Text>LOGIN</Text>
              </TouchableHighlight>
          </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerbot: {
        flex: 0.4,
        alignItems: 'center'
    },
    input: {
        height: '8%',
        width: '50%',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 30,
        margin: 10 
    },
    button: {
      alignItems: "center",
      marginBottom: '2%',
      padding: 10,
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: 30,
      width: '50%'
    }
});
