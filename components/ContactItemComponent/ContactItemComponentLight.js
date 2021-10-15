import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Vibration,
} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const ContactItemLight = ({name, phoneNum, onPress, onLongPress}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            onLongPress={() => {
              console.log(name);
              Vibration.vibrate(commonMorzeActions(name));
            }}
        >
            <View style={styles.topRowContainer}>
                <Text style={styles.titleText}>{name}</Text>
            </View>
            <View>
                <Text style={styles.valueText}>{phoneNum}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        backgroundColor: '#D7E1CA',
        borderRadius: 35,
        paddingVertical: 10,
        paddingLeft: 19,
        paddingRight: 8,
        alignSelf: 'center',
        marginBottom: 8,
    },
    topRowContainer: {
        flexDirection: 'row',
        maxWidth: '35%',
        justifyContent: 'space-between',
    },
    titleText: {
        color: '#262A25',
        fontSize: 12,
    },
    valueText: {
        color: '#262A25',
        fontSize: 24,
        lineHeight: 29,
    }
});

export default ContactItemLight;
