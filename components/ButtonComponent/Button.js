import React from 'react';
import {StyleSheet, View, Text, Vibration, TouchableOpacity} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const Button = ({onPress, onLongPress, label}) => {
    return (
        <TouchableOpacity
            onPress={!!onPress && onPress}
            onLongPress={() => {
              console.log(label);
              Vibration.vibrate(commonMorzeActions(label));
            }}
            style={styles.container}
        >
            <Text style={styles.textMessage}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262A25',
        paddingHorizontal: 50,
        paddingVertical: 21,
        width: 190,
        borderRadius: 35,
        marginTop: 36,
        alignSelf: 'center',
    },
    textMessage: {
        color: '#D7E1CA',
        fontSize: 16,
        alignSelf: 'center',
    }
});

export default Button;
