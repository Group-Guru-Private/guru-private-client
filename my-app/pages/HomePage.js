import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  SafeAreaView,
  ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import Constants from 'expo-constants'

export default function HomePage() {
 
  const [image, setImage] = useState(null);


  //     useEffect(() => {
  //         (async () => {
  //           if (Platform.OS !== 'web') {
  //             const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //             if (status !== 'granted') {
  //               alert('Sorry, we need camera roll permissions to make this work!');
  //             }
  //           }
  //         })();
  //       }, []);

  //     const pickImage = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });

  //     if (!result.cancelled) {
  //       setImage(result.uri);
  //     }
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Loremkd</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
