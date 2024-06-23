import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/start';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Home from './src/screens/home';


// Define the types for the navigation stack
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Start: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const { height } = Dimensions.get('window');
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={Register} options={{ headerShown: false }}/>
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
