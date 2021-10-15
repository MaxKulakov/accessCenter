import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Vibration,
} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const SettingsActionButtonDark = ({title, value, onPress, onLongPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}

            onLongPress={() => {
              console.log(title + ' ' + value);
              Vibration.vibrate(commonMorzeActions(title + ' ' + value));
            }}
            style={styles.container}
        >
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.valueText}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        backgroundColor: '#262A25',
        borderRadius: 35,
        paddingVertical: 10,
        paddingLeft: 19,
        paddingRight: 8,
        alignSelf: 'center',
        marginBottom: 8,
    },
    titleText: {
        color: '#D7E1CA',
        fontSize: 12,
    },
    valueText: {
        color: '#D7E1CA',
        fontSize: 24,
        lineHeight: 29,
    }
});

export default SettingsActionButtonDark;
