import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; // Import RootStackParamList type
import variables from '../../environmentVariables';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${variables.API_URL}/login`, { email, password });
      console.log(response.data)
      if (response.status === 200) {
        setEmail('');
        setPassword('');
        navigation.navigate('Start');

      }
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/images/login-img-1.png')}
      />
      <Text style={styles.title}>Welcome back!</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Text style={styles.forgotText}>Forgot password?</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.lineWrapper}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.iconWrapper}>
        <View style={styles.icon}>
          <Image style={styles.iconImg} source={require('../assets/images/facebook-icon.png')} />
        </View>
        <View style={styles.icon}>
          <Image style={styles.iconImg} source={require('../assets/images/google-icon.png')} />
        </View>
        <View style={styles.icon}>
          <Image style={styles.iconImg} source={require('../assets/images/apple-icon.png')} />
        </View>
      </View>
      <Text
        style={styles.signupText}
        onPress={() => navigation.navigate('Register')}
      >
        Don't have an account? <Text style={{ fontWeight: 'bold' }}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {
    marginTop: 40,
    height: 146.7,
    width: 160.53,
  },
  title: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'LexendDeca-Light',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  input: {
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },
  forgotText: {
    textAlign: 'right',
    fontSize: 17,
    width: '90%',
    color: '#000',
    fontFamily: 'LexendDeca-Light',
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
  lineWrapper: {
    flexDirection: 'row',
    marginTop: 50,
    width: '88%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 1,
    width: '49%',
    backgroundColor: '#D1CFCF',
  },
  orText: {
    width: 'auto',
    margin: 0,
    padding: 0,
    fontSize: 18,
    backgroundColor: '#fff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 50,
    marginBottom: 50,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {
    width: 30,
    height: 30,
  },
  signupText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'LexendDeca-Light',
  },
});

export default Login;
