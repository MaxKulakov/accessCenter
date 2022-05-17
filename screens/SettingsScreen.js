import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    ImageBackground,
} from 'react-native';

import BackAction from '../components/BackActionComponent/BackAction';
import SettingsActionButtonDark from '../components/SettingsActionButton/SettingsActionButtonDark';
import SettingsActionButtonLight from '../components/SettingsActionButton/SettingsActionButtonLight';
import * as CONFIG from '../service/constants';

import asyncStorage from '../utils/asyncStorage';

const SettingsScreen = ({navigation}) => {
    const [showBackground, setShowBackground] = useState(CONFIG.SHOW_BACKGROUND_IMAGE.ENABLED);
    const [morzeSpeed, setMorzeSpeed] = useState(CONFIG.MORZE_SPEED.SLOW);
    const [vibration, setVibration] = useState(CONFIG.VIBRATION_MODE.ENABLED);
    const [stayMorzeKeyboard, setStayMorzeKeyboard] = useState(CONFIG.STAY_MORZEKEY_ONLY.ENABLED);

    const toggleBackgroundShow = async () => {
        if (showBackground === CONFIG.SHOW_BACKGROUND_IMAGE.ENABLED) {
            setShowBackground(CONFIG.SHOW_BACKGROUND_IMAGE.DISABLED);
            await asyncStorage.storeData('isBackgroundShowing', CONFIG.SHOW_BACKGROUND_IMAGE.DISABLED);
        } else {
            setShowBackground(CONFIG.SHOW_BACKGROUND_IMAGE.ENABLED);
            await asyncStorage.storeData('isBackgroundShowing', CONFIG.SHOW_BACKGROUND_IMAGE.ENABLED);
        }
    };

    const toggleMorzeSpeed = async () => {
        if (morzeSpeed === CONFIG.MORZE_SPEED.SLOW) {
            setMorzeSpeed(CONFIG.MORZE_SPEED.MEDIUM);
            await asyncStorage.storeData('morzeSpeed', CONFIG.MORZE_SPEED.MEDIUM);
        } else if (morzeSpeed === CONFIG.MORZE_SPEED.MEDIUM) {
            setMorzeSpeed(CONFIG.MORZE_SPEED.FAST);
            await asyncStorage.storeData('morzeSpeed', CONFIG.MORZE_SPEED.FAST);
        } else {
            setMorzeSpeed(CONFIG.MORZE_SPEED.SLOW);
            await asyncStorage.storeData('morzeSpeed', CONFIG.MORZE_SPEED.SLOW);
        }
    };

    const toggleVibration = async () => {
        if (vibration === CONFIG.VIBRATION_MODE.ENABLED) {
            setVibration(CONFIG.VIBRATION_MODE.DISABLED);
            await asyncStorage.storeData('isVibrating', CONFIG.VIBRATION_MODE.DISABLED);
        } else {
            setVibration(CONFIG.VIBRATION_MODE.ENABLED);
            await asyncStorage.storeData('isVibrating', CONFIG.VIBRATION_MODE.ENABLED);
        }
    }

    const toggleMorzeVisibility = async () => {
        if (stayMorzeKeyboard === CONFIG.STAY_MORZEKEY_ONLY.ENABLED) {
            setStayMorzeKeyboard(CONFIG.STAY_MORZEKEY_ONLY.DISABLED);
            await asyncStorage.storeData('morzeVisibility', CONFIG.STAY_MORZEKEY_ONLY.DISABLED);
        } else {
            setStayMorzeKeyboard(CONFIG.STAY_MORZEKEY_ONLY.ENABLED);
            await asyncStorage.storeData('morzeVisibility', CONFIG.STAY_MORZEKEY_ONLY.ENABLED);
        }
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
                <SettingsActionButtonLight
                    title="Show background image"
                    value={showBackground}
                    onPress={toggleBackgroundShow}
                />
                <SettingsActionButtonDark
                    title="Speed Morze"
                    value={morzeSpeed}
                    onPress={toggleMorzeSpeed}
                />
                <SettingsActionButtonLight
                    title="Turn on vibration"
                    value={vibration}
                    onPress={toggleVibration}
                />
                <SettingsActionButtonDark
                    title="Stay Morze keyboard only"
                    value={stayMorzeKeyboard}
                    onPress={toggleMorzeVisibility}
                />
                <SettingsActionButtonLight
                    title="Authorization"
                    value={stayMorzeKeyboard}
                    onPress={() => {
                        navigation.navigate('Authorization screen')
                    }}
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

export default SettingsScreen;
