import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Dimensions,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import StartScreen from './src/screens/start';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Home from './src/screens/home';


// Define the types for the navigation stack
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Start: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { height } = Dimensions.get('window');
  useEffect(()=>{
    const checkToken=async ()=>{
      try{
        const token=await AsyncStorage.getItem('userToken');
        if(!token){
          setIsLoggedIn(false);
        }else{
          setIsLoggedIn(true);
        }
      }catch(error){
        console.log("Error in checking token:",error)
      } finally {
        setIsLoading(false);
      }
     
    }
    checkToken();
  },[])
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Stack.Navigator initialRouteName={isLoggedIn?'Start': 'Login'}>

          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} /> 
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#000',
  },
  img: {
    height: 150,
    width: 150,
  },
});

export default App;
