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
import BottomNavbar from '../components/bottomNavbar';
import ArrowLeftSvg from '../components/arrowLeftSvg';

const Calendar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/backgound-img.png')}
        style={styles.backgroundImg}
        resizeMode="cover">
        <ScrollView style={{padding: 15}} showsVerticalScrollIndicator={false}>
          {/**============ navbar ============= */}
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSvg />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'LexendDeca-Bold',
                color: '#000',
                fontSize: 20,
              }}>
              Today's Tasks
            </Text>
            <Icon name="bell-fill" size={20} color="#000" />
          </View>
          {/**================= Date vise row ================= */}

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{}}>
            <TouchableOpacity style={[styles.dateCard, {}]}>
              <Text style={[styles.paraText, {color: '#000'}]}>May</Text>
              <Text style={[styles.headText, {marginVertical: 5}]}>24</Text>
              <Text style={[styles.paraText, {color: '#000'}]}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dateCard, {}]}>
              <Text style={[styles.paraText, {color: '#000'}]}>May</Text>
              <Text style={[styles.headText, {marginVertical: 5}]}>24</Text>
              <Text style={[styles.paraText, {color: '#000'}]}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dateCard, {backgroundColor: '#5F33E1'}]}>
              <Text style={[styles.paraText, {color: '#fff'}]}>May</Text>
              <Text
                style={[styles.headText, {marginVertical: 5, color: '#fff'}]}>
                24
              </Text>
              <Text style={[styles.paraText, {color: '#fff'}]}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dateCard, {}]}>
              <Text style={[styles.paraText, {color: '#000'}]}>May</Text>
              <Text style={[styles.headText, {marginVertical: 5}]}>24</Text>
              <Text style={[styles.paraText, {color: '#000'}]}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dateCard, {}]}>
              <Text style={[styles.paraText, {color: '#000'}]}>May</Text>
              <Text style={[styles.headText, {marginVertical: 5}]}>24</Text>
              <Text style={[styles.paraText, {color: '#000'}]}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dateCard, {}]}>
              <Text style={[styles.paraText, {color: '#000'}]}>May</Text>
              <Text style={[styles.headText, {marginVertical: 5}]}>24</Text>
              <Text style={[styles.paraText, {color: '#000'}]}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dateCard, {}]}>
              <Text style={[styles.paraText, {color: '#000'}]}>May</Text>
              <Text style={[styles.headText, {marginVertical: 5}]}>24</Text>
              <Text style={[styles.paraText, {color: '#000'}]}>Fri</Text>
            </TouchableOpacity>
          </ScrollView>
          {/**================= Task category TabBar ================= */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{}}>
            <TouchableOpacity
              style={[styles.categoryTabBar, {backgroundColor: '#5F33E1'}]}>
              <Text style={[styles.paraText, {color: '#fff', fontSize: 16}]}>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.categoryTabBar, {}]}>
              <Text style={[styles.paraText, {color: '#5F33E1', fontSize: 16}]}>
                To-do
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.categoryTabBar, {}]}>
              <Text style={[styles.paraText, {color: '#5F33E1', fontSize: 16}]}>
                In-Progress
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.categoryTabBar, {}]}>
              <Text style={[styles.paraText, {color: '#5F33E1', fontSize: 16}]}>
                Completed
              </Text>
            </TouchableOpacity>
          </ScrollView>
          {/**================= Task Items ================= */}
          <View style={[styles.taskGroupCard, {}]}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{width: 'auto'}}>
                <Text style={[styles.taskGroupCardParaText]}>
                  Grocery shopping app design
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ffe6d4',
                  borderRadius: 6,
                  padding: 7,
                  marginRight: 10,
                }}>
                <IconFontAwesome name="book-open" size={15} color="#ff9142" />
              </View>
             
            </View>
            <Text style={styles.taskGroupCardHeadText}>Market Research</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems:'center',
                marginTop:10,
              }}>
              <View style={{width: 'auto',display:'flex',flexDirection:'row',alignItems:'center'}}>
              <IconFontAwesome name="clock" size={15} color="gray" style={{marginRight:10}} />

                <Text style={styles.taskGroupCardParaText}>10:00 AM</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ede8ff',
                  borderRadius: 10,
                  paddingHorizontal: 9,
                  paddingVertical:2,
                  marginRight: 10,
                }}>
                <Text style={[styles.taskGroupCardParaText,{color:'#673de2'}]}>Done</Text>
              </View>
            </View>
          </View>
          <View style={[styles.taskGroupCard, {}]}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{width: 'auto'}}>
                <Text style={[styles.taskGroupCardParaText]}>
                  Grocery shopping app design
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ffe6d4',
                  borderRadius: 6,
                  padding: 7,
                  marginRight: 10,
                }}>
                <IconFontAwesome name="book-open" size={15} color="#ff9142" />
              </View>
             
            </View>
            <Text style={styles.taskGroupCardHeadText}>Competitive Analysis</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems:'center',
                marginTop:10,
              }}>
              <View style={{width: 'auto',display:'flex',flexDirection:'row',alignItems:'center'}}>
              <IconFontAwesome name="clock" size={15} color="gray" style={{marginRight:10}} />

                <Text style={styles.taskGroupCardParaText}>12:00 PM</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ffe9e1',
                  borderRadius: 10,
                  paddingHorizontal: 9,
                  paddingVertical:2,
                  marginRight: 10,
                }}>
                <Text style={[styles.taskGroupCardParaText,{color:'#ff926e'}]}>In Progress</Text>
              </View>
            </View>
          </View>
          <View style={[styles.taskGroupCard, {}]}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{width: 'auto'}}>
                <Text style={[styles.taskGroupCardParaText]}>
                  Uber Eats redesign challange
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ffe6d4',
                  borderRadius: 6,
                  padding: 7,
                  marginRight: 10,
                }}>
                <IconFontAwesome name="book-open" size={15} color="#ff9142" />
              </View>
             
            </View>
            <Text style={styles.taskGroupCardHeadText}>Create Low-fidelity Wireframe</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems:'center',
                marginTop:10,
              }}>
              <View style={{width: 'auto',display:'flex',flexDirection:'row',alignItems:'center'}}>
              <IconFontAwesome name="clock" size={15} color="gray" style={{marginRight:10}} />

                <Text style={styles.taskGroupCardParaText}>7:00 PM</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e3f2ff',
                  borderRadius: 10,
                  paddingHorizontal: 9,
                  paddingVertical:2,
                  marginRight: 10,
                }}>
                <Text style={[styles.taskGroupCardParaText,{color:'#1992ff'}]}>To-do</Text>
              </View>
            </View>
          </View>
          <View style={[styles.taskGroupCard, {}]}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{width: 'auto'}}>
                <Text style={[styles.taskGroupCardParaText]}>
                  About design sprint
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ffe6d4',
                  borderRadius: 6,
                  padding: 7,
                  marginRight: 10,
                }}>
                <IconFontAwesome name="book-open" size={15} color="#ff9142" />
              </View>
             
            </View>
            <Text style={styles.taskGroupCardHeadText}>How to pitch a Design Sprint</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems:'center',
                marginTop:10,
              }}>
              <View style={{width: 'auto',display:'flex',flexDirection:'row',alignItems:'center'}}>
              <IconFontAwesome name="clock" size={15} color="gray" style={{marginRight:10}} />

                <Text style={styles.taskGroupCardParaText}>9:00 PM</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#e3f2ff',
                  borderRadius: 10,
                  paddingHorizontal: 9,
                  paddingVertical:2,
                  marginRight: 10,
                }}>
                <Text style={[styles.taskGroupCardParaText,{color:'#1992ff'}]}>To-do</Text>
              </View>
            </View>
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
  },
  dateRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#BEBEC3',
    padding: 20,
    paddingVertical: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 15,
    elevation: 15, // Android shadow
    shadowColor: '#BEBEC3', // iOS shadow
    shadowOffset: {width: 30, height: 40}, // iOS shadow
    shadowOpacity: 1, // iOS shadow
    shadowRadius: 10, // iOS shadow
  },
  headText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'LexendDeca-Medium',
    textAlign: 'center',
  },
  paraText: {
    fontSize: 13,
    fontFamily: 'LexendDeca-Regular',
    textAlign: 'center',
    width: '100%',
    color: '#726e80',
  },
  categoryTabBar: {
    backgroundColor: '#ede8ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 20,
    borderWidth: 0.3,
    borderColor: '#BEBEC3',
    elevation: 15, // Android shadow
    shadowColor: '#E2E2E2', // iOS shadow
    shadowOffset: {width: 30, height: 40}, // iOS shadow
    shadowOpacity: 1, // iOS shadow
    shadowRadius: 10, // iOS shadow
  },
  taskGroupCard: {
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
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
    width: 'auto',
    fontSize: 13,
    fontFamily: 'LexendDeca-Regular',
    color:'#858687'
  },
});

export default Calendar;
