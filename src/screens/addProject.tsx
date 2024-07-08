import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Icon from 'react-native-vector-icons/Octicons';
import BottomNavbar from '../components/bottomNavbar';
import ArrowLeftSvg from '../components/arrowLeftSvg';
import ArrowDownSvg from '../components/arrowDownSvg';
import DropdownComponent from '../components/dropDown';
import CalendarIconSvg from '../components/calendarIconSvg';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

const AddProject = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [chosenStartDate, setChosenStartDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [startDateHeadText, setStartDateHeadText] = useState('Select the date');
  const [chosenEndDate, setChosenEndDate] = useState(new Date());
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [endDateHeadText, setEndDateHeadText] = useState('Select the date');

  const handleStartDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    const currentDate = selectedDate || chosenStartDate;
    setShowStartDatePicker(Platform.OS === 'ios');
    setChosenStartDate(currentDate);
    setStartDateHeadText(
      currentDate
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
        .replace(/ /g, ', '),
    );
  };

  const showStartDatePickerModal = () => {
    setShowStartDatePicker(true);
  };

  const handleEndDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    const currentDate = selectedDate || chosenEndDate;
    setShowEndDatePicker(Platform.OS === 'ios');
    setChosenEndDate(currentDate);
    setEndDateHeadText(
      currentDate
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
        .replace(/ /g, ', '),
    );
  };

  const showEndDatePickerModal = () => {
    setShowEndDatePicker(true);
  };
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
          <View
            style={[
              styles.taskGroupCard,
              {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Text style={[styles.taskGroupCardParaText, {}]}>Description</Text>

            <TextInput
              placeholder="write the description"
              value={projectDescription}
              onChangeText={setProjectDescription}
              style={[
                styles.taskGroupTextArea,
                {
                  fontSize: 14,
                  fontFamily: 'LexendDeca-Regular',
                  textAlignVertical: 'top',
                  color:'#000'
                },
              ]}
              placeholderTextColor="#000"
              allowFontScaling={true}
              autoCorrect={true}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          {/**============= project start date input ============ */}
          <View
            style={[
              styles.taskGroupCard,
              {display: 'flex', flexDirection: 'row'},
            ]}>
            <TouchableOpacity
              onPress={showStartDatePickerModal}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CalendarIconSvg />
              <View style={{marginStart: 15}}>
                <Text style={[styles.taskGroupCardParaText, {}]}>
                  Start Date
                </Text>
                <Text style={[styles.taskGroupCardHeadText, {}]}>
                  {startDateHeadText}
                </Text>
              </View>
            </TouchableOpacity>
            <ArrowDownSvg />
          </View>
          {showStartDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={chosenStartDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleStartDateChange}
              minimumDate={new Date()} // Ensures only current or future dates can be selected
            />
          )}
          {/**============= project end date input ============ */}

          <View
            style={[
              styles.taskGroupCard,
              {display: 'flex', flexDirection: 'row'},
            ]}>
            <TouchableOpacity
              onPress={showEndDatePickerModal}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CalendarIconSvg />
              <View style={{marginStart: 15}}>
                <Text style={[styles.taskGroupCardParaText, {}]}>
                  End Date
                </Text>
                <Text style={[styles.taskGroupCardHeadText, {}]}>
                  {endDateHeadText}
                </Text>
              </View>
            </TouchableOpacity>
            <ArrowDownSvg />
          </View>
          {showEndDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={chosenEndDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleEndDateChange}
              minimumDate={new Date()} // Ensures only current or future dates can be selected
            />
          )}
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
    color:'#000'
  },
  taskGroupTextArea: {
    width: '100%',
    fontFamily: 'LexendDeca-Medium',
    fontSize: 16,
    height: 100,
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
