import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Icon from 'react-native-vector-icons/Octicons';
import IconIntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome6';
import BottomNavbar from '../components/bottomNavbar';
import ArrowLeftSvg from '../components/arrowLeftSvg';
import ArrowDownSvg from '../components/arrowDownSvg';
import {Dropdown} from 'react-native-element-dropdown';
import DropdownComponent from '../components/dropDown';

const AddProject = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/backgound-img.png')}
        style={styles.backgroundImg}
        resizeMode="cover">
        <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
          {/**============ navbar ============= */}
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              {/* <IconFontAwesome name="caret-left" size={25} color="#000" /> */}
              {/* <Image style={{height:40,width:60}} source={require('../assets/images/arrow-right.svg')}/> */}
              <ArrowLeftSvg />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'LexendDeca-Bold',
                color: '#000',
                fontSize: 20,
              }}>
              Add Project
            </Text>
            <Icon name="bell-fill" size={20} color="#000" />
          </View>
          {/**============= task group drop down ============ */}
          <View style={{width: '100%', display: 'flex', marginTop: 20}}>
            <DropdownComponent />
          </View>
          {/**============= project name input ============ */}
          <View
            style={[
              styles.taskGroupCard,
              {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 10,
                paddingStart: 20,
              },
            ]}>
            <Text style={[styles.taskGroupCardParaText, {}]}>Project Name</Text>
            <TextInput
              placeholder="Write project name"
              value={projectName}
              onChangeText={setProjectName}
              style={styles.taskGroupInput}
              placeholderTextColor="#000"
              allowFontScaling={true}
              autoCorrect={true}
            />
          </View>
          <View style={[styles.taskGroupCard,{display:'flex',flexDirection:'column',justifyContent: 'center', alignItems:'center'}]}>
            <Text style={[styles.taskGroupCardParaText, {}]}>Description</Text>
            {/* <Text style={[styles.taskGroupCardHeadText, {fontSize:13,fontFamily: 'LexendDeca-Regular',}]}>
              This application is designed for super shops. By using this
              application they can enlist all their products in one place and
              can deliver. Customers will get a one-stop solution for their
              daily shopping.
            </Text> */}
            <TextInput
              placeholder="write the description"
              value={projectDescription}
              onChangeText={setProjectDescription}
              style={[
                styles.taskGroupTextArea,
                {fontSize: 14, fontFamily: 'LexendDeca-Regular'},
              ]}
              placeholderTextColor="#000"
              allowFontScaling={true}
              autoCorrect={true}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.addProjectButton}>
              <Text style={styles.addProjectButtonText}>Add Project</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <BottomNavbar />
      </ImageBackground>
    </View>
  );
};
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
  addProjectButton: {
    backgroundColor: '#5F33E1',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20,
  },
  taskGroupCard: {
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.2,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  taskGroupCardHeadText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'LexendDeca-Medium',
  },
  taskGroupCardParaText: {
    fontSize: 13,
    fontFamily: 'LexendDeca-Regular',
    textAlign: 'left',
    width: '100%',
    color: '#726e80',
  },
  taskGroupInput: {
    width: '100%',
    height: 40,
    fontSize: 14,
    fontFamily: 'LexendDeca-Regular',
  },
  taskGroupTextArea: {
    width: '100%',
    fontFamily: 'LexendDeca-Medium',
    fontSize: 16,
    height:100
  },
  addProjectButtonText: {
    color: '#FFF',
    fontSize: 19,
    fontFamily: 'LexendDeca-SemiBold',
    width: '100%',
    textAlign: 'center',
  },
});

export default AddProject;
