import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome6';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavbar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={()=>navigation.navigate('Home')}>
        <IconFontAwesome name="house" size={25} color="#5f33e1" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={()=>navigation.navigate('AddProject')}>
        <IconFontAwesome name="calendar-days" size={25} color="#5f33e1" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={()=>navigation.navigate('AddProject')}>
        <View style={styles.wrapperIconParent}>
          <View style={styles.addIconWrapper}>
            <IconFontAwesome name="plus" size={25} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={()=>navigation.navigate('AddProject')}>
        <IconMaterialCommunity name="file-document" size={28} color="#5f33e1" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={()=>navigation.navigate('AddProject')}>
        <IconFontAwesome name="user-group" size={25} color="#5f33e1" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    backgroundColor: '#eee9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    position: 'relative',
  },
  addIconWrapper: {
    backgroundColor: '#5f33e1',
    borderRadius: 30,
    height: 50,
    width: 50,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 30, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 30, height: 40}, // iOS shadow
    shadowOpacity: 1, // iOS shadow
    shadowRadius: 10, // iOS shadow
  },
  wrapperIconParent: {
    position: 'absolute',
    top: -65,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 50,
    elevation: 0, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 10}, // iOS shadow
    shadowOpacity: 0.1, // iOS shadow
    shadowRadius: 5, // iOS shadow
  },
});

export default BottomNavbar;
