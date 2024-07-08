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
import Icon from 'react-native-vector-icons/Octicons';
import IconIntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome6';
import BottomNavbar from "../components/bottomNavbar";

const Notes=()=>{
    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/backgound-img.png')}
          style={styles.backgroundImg}
          resizeMode="cover">
          <ScrollView style={{padding: 15}} showsVerticalScrollIndicator={false}>
            {/**============ navbar ============= */}
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconFontAwesome name="caret-left" size={25} color="#000" />
                </TouchableOpacity>
                <Text style={{fontFamily:'LexendDeca-Bold',color:'#000',fontSize:20}}>My Projects</Text>
            <Icon name="bell-fill" size={20} color="#000" />

            </View>
            <Text>Notes</Text>

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
    navbar: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 10,
        // marginTop: 20,
      },
   
  });

export default Notes;