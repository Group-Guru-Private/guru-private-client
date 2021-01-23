import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Touchable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterPage() {
    const subjects = ['mtk', 'english', 'ipa', 'ips']
    const [inputData, setInputData] = useState({
      name: '',
      email: '',
      address: '',
      password: '',
      role: 'student',
      education: '',
      selectedSubject: ''
    })
    
    function handleInputChange(text, inputName){
      const name = inputName
      let value = text

      setInputData({
        ...inputData,
        [name]: value
      })
    }

    if (inputData.role === 'teacher') {
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
                    onChangeText={text => {handleInputChange(text, 'name')}}
                    placeholder="Name"
                    placeholderTextColor='white'
                    value={inputData.name}
                   />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => {handleInputChange(text, 'email')}}
                    placeholder="Email"
                    placeholderTextColor='white'
                    value={inputData.email}
                  />
                   <TextInput
                    style={styles.input}
                    onChangeText={text => {handleInputChange(text, 'address')}}
                    placeholder="Address"
                    placeholderTextColor='white'
                    value={inputData.address}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => {handleInputChange(text, 'password')}}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor='white'
                    value={inputData.password}
                  />
                  <Picker
                      selectedValue={inputData.role}
                      style={styles.input}
                      onValueChange={(itemValue, itemIndex) => {handleInputChange(itemValue, 'role')}}
                  >
                      <Picker.Item label="Student" value="student" />
                      <Picker.Item label="Teacher" value="teacher" />
                  </Picker>
                  <Picker
                      selectedValue={inputData.selectedSubject}
                      style={styles.input}
                      onValueChange={(itemValue, itemIndex) => {handleInputChange(itemValue, 'selectedSubject')}}
                  >
                      {
                          subjects.map((subject, index) => {
                              return <Picker.Item key={index} label={subject} value={subject} />
                          })
                      }
                  </Picker>
                  <TouchableHighlight style={styles.button} onPress={e => console.log(inputData)}>
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
                    onChangeText={text => {handleInputChange(text, 'name')}}
                    placeholder="Name"
                    placeholderTextColor='white'
                    value={inputData.name}
                   />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => {handleInputChange(text, 'email')}}
                    placeholder="Email"
                    placeholderTextColor='white'
                    value={inputData.email}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => {handleInputChange(text, 'address')}}
                    placeholder="Address"
                    placeholderTextColor='white'
                    value={inputData.address}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => {handleInputChange(text, 'password')}}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor='white'
                    value={inputData.password}
                  />
                  <Picker
                      selectedValue={inputData.role}
                      style={styles.input}
                      onValueChange={(itemValue, itemIndex) => {handleInputChange(itemValue, 'role')}}
                  >
                      <Picker.Item label="Student" value="student" />
                      <Picker.Item label="Teacher" value="teacher" />
                  </Picker>
                  <TouchableHighlight style={styles.button} onPress={e => console.log(inputData)}>
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
