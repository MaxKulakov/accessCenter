import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  Linking
} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import BackAction from '../components/BackActionComponent/BackAction';
import BatteryStats from '../components/BatteryStats/BatteryStats';
import Button from '../components/ButtonComponent/Button';
import Field from '../components/FieldComponent/Field';



const AuthorizationScreen = ({navigation}) => {
  const [batteryLevel, setBatteryLevel] = useState("56");
  const getBatteryLevel = async () => {
    const deviceInfoBattery = await DeviceInfo.getBatteryLevel();
    setTimeout(() => {
      setBatteryLevel(Math.round((+deviceInfoBattery) * 100));
    }, 500);
  };


  return (
      <SafeAreaView style={{flex: 1}}>
            <ImageBackground
                style={styles.container}
                source={require('../assets/images/background.png')}
            >
                <BackAction
                    title="Settings"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <Field>

                </Field>
                <Button
                    onPress={getBatteryLevel}
                    label={'Log In'}
                />
            </ImageBackground>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      paddingVertical: 36,
      paddingHorizontal: 16,
      backgroundColor: '#899E78',
  },
});

export default AuthorizationScreen;
