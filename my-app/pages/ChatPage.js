// @refresh reset
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect,useCallback} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { LogBox, StyleSheet, Text,TextInput,Button, View, } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmWNPOqkQB4giAC1yt705lFmHUi3XtsG4",
  authDomain: "ruang-privat.firebaseapp.com",
  projectId: "ruang-privat",
  storageBucket: "ruang-privat.appspot.com",
  messagingSenderId: "968099125727",
  appId: "1:968099125727:web:88196489db2f67d8ed4c6a"
};

// Initialize Firebase
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
LogBox.ignoreLogs(['Setting a timer for a long period of time'])
const db = firebase.firestore()
const chatsRef = db.collection('chats')
export default function App() {
   const [user, setUser] = useState('')
   const [name, setName] = useState('')
   const [messages, setMessages] = useState([])
   console.log(name)

   useEffect(()=>{
     readUser ()
     const unsubcribe = chatsRef.onSnapshot(querySnapshot =>{
       const messangesFirestore = querySnapshot.docChanges().filter(({type})=> type === 'added')
                                    .map(({doc})=>{
                                       const message = doc.data()
                                       return {...message, createdAt: message.createdAt.toDate()}
                                    }).sort((a, b)=> b.createdAt.getTime() - a.createdAt.getTime())
        appendMessages(messangesFirestore)
     })
     return () => unsubcribe() 
   },[])
   const appendMessages = useCallback((messages)=>{
       setMessages((previousMessages)=> GiftedChat.append(previousMessages,messages))
   }, [])

   async function readUser(){
     const user = await AsyncStorage.getItem('user')
     if(user) {
       setUser(JSON.parse(user))
     }
   }


    function handlerLogout(){
  
    setUser(!user)
    
  }
   async function handlerPress(){
     const _id = Math.random().toString(36).substring(7)
     const user = {_id, name}
     await AsyncStorage.setItem('user', JSON.stringify(user))
     setUser(user)
   }

   async function handlerSend(messages){
     const writes = messages.map((m) =>chatsRef.add(m))
      await Promise.all(writes)
     }
     
   if (!user) {
     return <View style={styles.container}>
       {
         // ini ada value harusnya value = {name}
       }
       <TextInput style={styles.input} placeholder="Insert Your Name" onChangeText={setName} > </TextInput> 
       <Button title="Start Chat" onPress={handlerPress}/>
     </View>

   }

  return (
  <>
      <Button title='logout' style={styles.button} onPress={handlerLogout}/>
      <GiftedChat messages={messages} user={user} onSend={handlerSend}/>
  </>

  )
 
  

  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
    button:{
      flex: 2,
      height: 10,
      width: 40,
      borderWidth: 1,
      padding: 15,
      marginTop: 2000,
    }
})

