import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Touchable, Vibration,} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const SearchWithGoogle = ({onPress, onLongPress}) => {
    return (
        <TouchableOpacity
            onPress={!!onPress && onPress}
            onLongPress={() => {
              console.log("Google");
              Vibration.vibrate(commonMorzeActions('google'));
            }}
            style={styles.container}
        >
            <View style={styles.timeView}>
                <Text style={styles.timeText}>Search with Google</Text>
            </View>
            <View style={styles.clockView}>
                <Image source={require('../../assets/images/goglelogo.png')} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        width: 262,
        marginTop: 8,
        marginBottom: 36,
    },
    timeView: {
        backgroundColor: '#262A25',
        paddingVertical: 21,
        paddingHorizontal: 45,
        borderRadius: 35,
    },
    timeText: {
        fontSize: 12,
        color: '#D7E1CA',
    },
    clockView: {
        backgroundColor: '#262A25',
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderRadius: 35,
    },
});

export default SearchWithGoogle;
