import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ImageBackground,
    Dimensions,
    ScrollView,
    Linking,
    Vibration,
} from 'react-native';
import GetLocation from 'react-native-get-location'
import DeviceInfo from 'react-native-device-info';

import InformationComponentLight from '../components/InformationComponent/InformationComponentLight';
import InformationComponentDark from '../components/InformationComponent/InformationComponentDark';
import BatteryStats from '../components/BatteryStats/BatteryStats';
import CurrentTime from '../components/CurrentTime/CurrentTime';
import SearchWithGoogle from '../components/SearchWithGoogle/SearchWithGoogle';
import BottomNavigationButton from '../components/BottomNavigationButtons/BottomNavigationButton';

import {commonMorzeActions} from '../morze/morzeActions';

import Service from '../service/fetch';
import DateService from '../service/dateTime';



const HomeScreen = ({navigation}) => {
    const [batteryLevel, setBatteryLevel] = useState("56");
    const [currentWeather, setCurrentWeather] = useState("25");
    const [currentWeatherName, setCurrentWeatherName] = useState("Broken clouds");
    const [bottomButtons, setBottomButtons] = useState([
      {
        id: 1,
        icon: require('../assets/images/sms.png'),
        onPress: () => {
            navigation.navigate('Sms screen');
        },
        onLongPress: () => {
            console.log('sms');
            Vibration.vibrate(commonMorzeActions('sms'));
        },
      },
      {
        id: 2,
        icon: require('../assets/images/contacts.png'),
        onPress: () => {
            navigation.navigate('Contacts screen');
        },
        onLongPress: () => {
          console.log('contacts');
          Vibration.vibrate(commonMorzeActions('contacts'));
        },
      },
      {
        id: 3,
        icon: require('../assets/images/locations.png'),
        onPress: () => {
            navigation.navigate('Locations screen');

            GetLocation.getCurrentPosition({
                enableHighAccuracy: false,
                timeout: 15000,
            })
            .then(location => {
                console.log(location);
                return location;
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
        },
        onLongPress: () => {
            console.log('location');
            Vibration.vibrate(commonMorzeActions('location'));
        },
      },
      {
        id: 4,
        icon: require('../assets/images/settings.png'),
        onPress: () => {
            navigation.navigate('Settings screen');
        },
        onLongPress: () => {
            console.log('settings')
            Vibration.vibrate(commonMorzeActions('settings'));
        },
      },
    ]);

    const renderBottomButton = item => {
      return (
        <BottomNavigationButton
          icon={item.icon}
          onPress={item.onPress}
          onLongPress={item.onLongPress}
        />
      );
    };

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getWeather = async () => {
        var q = 'Saratov';
        const json = await Service.API(q);
        setTimeout(() => {
          setCurrentWeather(Math.round(json.main.temp - 273,15));
          setCurrentWeatherName(
            capitalizeFirstLetter(json.weather[0].description)
          );
        }, 500);
    };

    const getBatteryLevel = async () => {
      const deviceInfoBattery = await DeviceInfo.getBatteryLevel();
      setTimeout(() => {
        setBatteryLevel(Math.round((+deviceInfoBattery) * 100));
      }, 500);
    };

    return (
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          style={styles.container}
          source={require('../assets/images/background.png')}
        >
            <InformationComponentDark
              firstLine="Welcome to accessCenter"
              secondLine={DateService.getGreetings()}
              isMedium
              isUp
            />
            <InformationComponentLight
              firstLine={DateService.getCurrentDay()}
              secondLine={DateService.getCurrentDate()}
              isMedium
              isDown
              onPress={() => {
                navigation.navigate("Calendar screen");
              }}
            />
            <BatteryStats
              onPress={getBatteryLevel}
              label={`${batteryLevel}%`}
            />
            <CurrentTime/>
            <SearchWithGoogle
              onPress={() => {
                navigation.navigate("Search screen");
              }}
            />
            <InformationComponentLight
              firstLine="Location"
              secondLine="Volskaya, 10A"
              isMedium
              isUp
            />
            <InformationComponentDark
              firstLine={currentWeatherName}
              secondLine={`Temperature ${currentWeather}°C`}
              isMedium
              isDown
              extendedStyles={{width: '90%'}}
              onPress={getWeather}
            />
            <View style={styles.bottomButtonsNavigation}>
              {bottomButtons.map(renderBottomButton)}
            </View>
        </ImageBackground>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 36,
        paddingHorizontal: 16,
        backgroundColor: '#899E78',
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    paragraph: {
        margin: 24,
        textAlign: "center"
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: "#737373",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    image: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    bottomButtonsNavigation: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 60,
    },
});

export default HomeScreen;
