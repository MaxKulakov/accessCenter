import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Vibration,
} from 'react-native';

const BottomNavigationButton = ({icon, onPress, onLongPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Image source={icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D7E1CA',
        borderRadius: 35,
    },
});

export default BottomNavigationButton;
