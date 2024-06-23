import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout=async ()=>{
    try{
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Login');
    }catch(error){
      console.log("error to logout:",error)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home </Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogout}>
        <Text style={styles.loginButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'LexendDeca-Regular',
  },
  loginButton: {
    backgroundColor: '#5F33E1',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 19,
    fontFamily: 'LexendDeca-SemiBold',
    width: '100%',
    textAlign: 'center',
  },
});

export default Home;
