import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const StartScreen = () => {
  const {height} = Dimensions.get('window');

  const homeImgHeight = height * 0.6;
  return (
    <View>
      <Image
        style={[styles.img, {height: homeImgHeight, width: '100%'}]}
        source={require('../assets/images/home-img.png')}
      />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.headingText}>Task Management & To-Do List</Text>
        <Text style={styles.para}>
          This productive tool is designed to help you better manage your task
          project-wise conveniently!
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's Start</Text>
          <Image style={styles.buttonImg} source={require('../assets/images/Arrow-Left.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  img: {},
  headingText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    width: '70%',
    fontFamily: 'LexendDeca-SemiBold',
  },
  para: {
    fontSize: 14,
    fontFamily: 'LexendDeca-Regular',
    color: '#6E6A7C',
    textAlign: 'center',
    width: '80%',
    marginTop: 25,
  },
  button: {
    backgroundColor: '#5F33E1',
    flex:1,
    width:'85%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
    paddingTop:10,
    paddingBottom:10,
    marginTop:50
  },
  buttonText: {
    color:'#FFF',
    fontSize: 19,
    fontFamily: 'LexendDeca-SemiBold',
    width:'80%',
    textAlign:'center'
  },
  buttonImg:{
    width:30,
    height:30
  }
});

export default StartScreen;
