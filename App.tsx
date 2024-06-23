import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet,Image, Dimensions} from 'react-native';
import StartScreen from './screens/startScreen';


const App = () => {
  const {height}=Dimensions.get('window')
  return (
    <SafeAreaView style={{backgroundColor:'#FFFFFF',height:height}}>
      <ScrollView>
        <StartScreen/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container:{
    
  },
  text:{
    color:'#000'
  },
  img:{
    height:150,
    width:150,
  }
})
export default App;
