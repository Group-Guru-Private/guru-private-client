import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Touchable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('student')
    const [education, setEducation] = useState('')
    const [currentSubject, setCurrSubject] = useState('')
    const subjects = ['mtk', 'english', 'ipa', 'ips']

    if (role === 'teacher') {
        return (
            <LinearGradient
                  // Background Linear Gradient
                  colors={['#008bb5','#48bcae']}
                  style={{height: '100%'}}
              >
              <View style={styles.container} >
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Register</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    placeholder="Name"
                    placeholderTextColor='white'
                    value={name}
                   />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    placeholder="Email"
                    placeholderTextColor='white'
                    value={email}
                  />
                   <TextInput
                    style={styles.input}
                    onChangeText={text => setAddress(text)}
                    placeholder="Address"
                    placeholderTextColor='white'
                    value={address}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor='white'
                    value={password}
                  />
                  <Picker
                      selectedValue={role}
                      style={styles.input}
                      onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
                  >
                      <Picker.Item label="Student" value="student" />
                      <Picker.Item label="Teacher" value="teacher" />
                  </Picker>
                  <Picker
                      selectedValue={currentSubject}
                      style={styles.input}
                      onValueChange={(itemValue, itemIndex) => setCurrSubject(itemValue)}
                  >
                      {
                          subjects.map((subject, index) => {
                              return <Picker.Item key={index} label={subject} value={subject} />
                          })
                      }
                  </Picker>

                  <TouchableHighlight style={styles.button} onPress={e => console.log(name,email,password, role, currentSubject)}>
                    <Text>Register</Text>
                  </TouchableHighlight>
              </View>
            </LinearGradient>
        );
    } else {
        return (
          <LinearGradient
                  // Background Linear Gradient
                  colors={['#008bb5','#48bcae']}
                  style={{height: '100%'}}
              >
              <View style={styles.container}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Register</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    placeholder="Name"
                    placeholderTextColor='white'
                    value={name}
                   />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    placeholder="Email"
                    placeholderTextColor='white'
                    value={email}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setAddress(text)}
                    placeholder="Address"
                    placeholderTextColor='white'
                    value={address}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor='white'
                    value={password}
                  />
                  <Picker
                      selectedValue={role}
                      style={styles.input}
                      onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
                  >
                      <Picker.Item label="Student" value="student" />
                      <Picker.Item label="Teacher" value="teacher" />
                  </Picker>
                  <TouchableHighlight style={styles.button} onPress={e => console.log(name,email,password,role)}>
                    <Text>Register</Text>
                  </TouchableHighlight>
              </View>
          </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: '5%',
        width: '50%',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
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
