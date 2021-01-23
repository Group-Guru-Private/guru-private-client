import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'



export default function ProfilePage() {
  const dataProfile = {
    name: 'Bambang',
    email: 'bam@gmail.com',
    phone: '0812121212'

  }
  const navigate = useNavigation()

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#008bb5','#48bcae']}
      style={{height: '100%'}}
    >
    <View style={styles.container}>
      <View style={{flex: 0.8, flexDirection: 'row'}}>
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}} style={styles.profileImg} />
        <View>
          <Text>{dataProfile.name}</Text>
          <Text>{dataProfile.email}</Text>
          <Text>{dataProfile.phone}</Text>
        </View>
      </View>
      
      <View>
        <TouchableHighlight style={styles.button} onPress={e => {navigate.replace('Landing')}}>
          <Text>LOGOUT</Text>
        </TouchableHighlight>
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  },
  button: {
    alignItems: "center",
    marginBottom: '2%',
    padding: 10,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    borderRadius: 30,
    width: '30%'
  }
});
