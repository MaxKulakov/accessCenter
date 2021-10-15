import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    Vibration,
} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const BORDER_RADIUS_CONFIG = {
    SMALL: 29.5,
    MEDIUM: 35,
}

const InformationComponentDark = ({
    firstLine,
    secondLine,
    isUp = false,
    isDown = false,
    isSmall = false,
    isMedium = false,
    extendedStyles = {},
    onPress,
    onLongPress
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                isUp && styles.upperLayout,
                isDown && styles.downerLayout,
                isSmall && styles.smallSize,
                isMedium && styles.mediumSize,
                extendedStyles,
            ]}
            onLongPress={() => {
              console.log(secondLine);
              Vibration.vibrate(commonMorzeActions(secondLine));
            }}
        >
            <View>
                <Text style={styles.firstLineText}>{firstLine}</Text>
                <Text style={styles.secondLineText}>{secondLine}</Text>
            </View>
            {isDown && (
                <TouchableOpacity
                    onPress={!!onPress && onPress}
                    style={styles.asideButton}
                >
                    <Image
                        style={styles.badge}
                        source={require('../../assets/images/weather.png')}
                    />
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 19,
        paddingRight: 8,
        paddingVertical: 14,
        backgroundColor: '#262A25',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallSize: {
        height: 59,
        borderRadius: 29.5,
    },
    mediumSize: {
        height: 70,
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
    },
    upperLayout: {
        width: '55%',
        borderTopLeftRadius: BORDER_RADIUS_CONFIG.MEDIUM,
    },
    downerLayout: {
        width: '70%',
        borderBottomLeftRadius: BORDER_RADIUS_CONFIG.MEDIUM,
        marginTop: 8,
    },
    firstLineText: {
        color: '#D7E1CA',
        fontSize: 12,
    },
    secondLineText: {
        color: '#D7E1CA',
        fontSize: 24,
        lineHeight: 29,
    },
    asideButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#D7E1CA',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    badge: {
        alignSelf: 'center',
    }
});

export default InformationComponentDark;
