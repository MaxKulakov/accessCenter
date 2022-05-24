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
import GoogleButton from '../components/ButtonComponent/GoogleButton';
import Field from '../components/FieldComponent/Field';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const AuthorizationScreen = ({navigation}) => {
  const [batteryLevel, setBatteryLevel] = useState("56");
  const getBatteryLevel = async () => {
    const deviceInfoBattery = await DeviceInfo.getBatteryLevel();
    setTimeout(() => {
      setBatteryLevel(Math.round((+deviceInfoBattery) * 100));
    }, 500);
  };

  GoogleSignin.configure({
    webClientId: '673252697659-g0rifvqid89u1v031pf6rgrhh53bp0kk.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth().signInWithCredential(googleCredential);

    // user_sign_in.then((user)=>{
    //   console.log(user);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })
  }

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
                <GoogleButton
                    onPress={signInWithGoogleAsync}
                    label={'Log In With Google'}
                />
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
