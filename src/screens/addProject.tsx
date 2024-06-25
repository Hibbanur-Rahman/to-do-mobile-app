import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import BottomNavbar from "../components/bottomNavbar";

const AddProject=()=>{
    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/backgound-img.png')}
          style={styles.backgroundImg}
          resizeMode="cover">
          <ScrollView style={{padding: 15}} showsVerticalScrollIndicator={false}>
            
          </ScrollView>
          <BottomNavbar/>
        </ImageBackground>
      </View>
    )
}
const styles = StyleSheet.create({
   
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    backgroundImg: {
      flex: 1,
    },
   
   
  });

export default AddProject;