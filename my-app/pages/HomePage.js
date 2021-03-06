import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import Constants from "expo-constants";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Icon,
  Right,
  Text,
  Left,
  Title,
  Button,
  Header,
  Row,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { acc } from "react-native-reanimated";

// const photo = [
//   {
//     albumId: 1,
//     id: 1,
//     title: "accusamus beatae ad facilis cum similique qui sunt",
//     url: "https://via.placeholder.com/600/92c952",
//     thumbnailUrl: "https://via.placeholder.com/150/92c952",
//   },
//   {
//     albumId: 1,
//     id: 2,
//     title: "reprehenderit est deserunt velit ipsam",
//     url: "https://via.placeholder.com/600/771796",
//     thumbnailUrl: "https://via.placeholder.com/150/771796",
//   },
//   {
//     albumId: 1,
//     id: 3,
//     title: "officia porro iure quia iusto qui ipsa ut modi",
//     url: "https://via.placeholder.com/600/24f355",
//     thumbnailUrl: "https://via.placeholder.com/150/24f355",
//   },
//   {
//     albumId: 1,
//     id: 4,
//     title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     url: "https://via.placeholder.com/600/d32776",
//     thumbnailUrl: "https://via.placeholder.com/150/d32776",
//   },
//   {
//     albumId: 1,
//     id: 5,
//     title: "natus nisi omnis corporis facere molestiae rerum in",
//     url: "https://via.placeholder.com/600/f66b97",
//     thumbnailUrl: "https://via.placeholder.com/150/f66b97",
//   },
//   {
//     albumId: 1,
//     id: 6,
//     title: "accusamus ea aliquid et amet sequi nemo",
//     url: "https://via.placeholder.com/600/56a8c2",
//     thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
//   },
// ];

export default function HomePage() {
  // const [image, setImage] = useState(null);
  
  const navigate = useNavigation();
  const access_token = useSelector(state=> state.access_token)
  const students = useSelector(state=> state.students)


  console.log(students);
 
  const goDetail = ({item}) => {
    return (
      <View style={{
        height: 250,
        padding:10,
        justifyContent: 'center',
        backgroundColor: 'floralwhite',
        borderRadius:20
      }}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
        <Text style={{fontSize: 7}}>{item.rating}</Text>
        <Text style={{fontSize: 15}}>Rp. {item.price}</Text>
        {/* <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'}} style={{width: 100, height: 100}}></Image> */}
      </View>
    )
  };
  const goSquare = ({item}) => {
    return (
      <View style={{
        height: 150,
        padding:10,
        justifyContent: 'center',
        backgroundColor: 'floralwhite',
        borderRadius:20
      }}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
        <Text style={{fontSize: 7}}>{item.rating}</Text>
        <Text style={{fontSize: 15}}>Rp. {item.price}</Text>
      </View>
    )
  };

  const SLIDER_WIDTH = Dimensions.get('window').width

  return (
    // <SafeAreaView style={styles.container}>
    <>
      <View style={styles.top}></View>
      <Title style={styles.title}>masuk murid </Title>
      <Text style={{ fontSize: 20, color: 'white', marginLeft: '6%' }}> 

        {
         
          JSON.stringify(students)
        }
        


      </Text>
      <View style={{flex:1, flexDirection: 'row', justifyContent: "center", marginTop: '5%'}}>
      <Carousel layout={'default'} sliderWidth={SLIDER_WIDTH} data={students} itemWidth={350} renderItem={goDetail}></Carousel>
      </View>
      <Text style={{ fontSize: 26, color: "#48bcae", marginLeft: '5%', top: '5%' }}>Top teacher on the week</Text>
      <View style={{flex:1, flexDirection: 'row', marginLeft: '-20%', marginTop: '15%',}}>
      <Carousel layout={'default'} sliderWidth={SLIDER_WIDTH} data={students} itemWidth={200} renderItem={goSquare  }></Carousel>
      </View>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  top: {
    width: "100%",
    height: "35%",
    backgroundColor: "#48bcae",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    position: "absolute",
  },
  title: {
    // flex: 1,
    marginTop: "10%",
    marginBottom: "2%",
    marginLeft: "5%",
    textAlign: "left",
    fontSize: 32,
    fontWeight: "500",
    color: "white",
  },
  card: {
    marginLeft: "3%",
    marginRight: "3%",
    borderRadius: 100,
  },
  borderTop: {
    //  backgroundColor: "#008bb5",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  borderBot: {
    // backgroundColor: "#008bb5",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
