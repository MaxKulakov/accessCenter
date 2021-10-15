import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    Linking,
    Vibration,
} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const BORDER_RADIUS_CONFIG = {
    SMALL: 29.5,
    MEDIUM: 35,
}

const InformationComponentLight = ({
    firstLine,
    secondLine,
    isUp = false,
    isDown = false,
    isSmall = false,
    isMedium = false,
    onPress,
    onLongPress,
}) => {
    return (
        <View style={[
            styles.container,
            isUp && styles.upperLayout,
            isDown && styles.downerLayout,
            isSmall && styles.smallSize,
            isMedium && styles.mediumSize,
        ]}>
            <View>
                <Text style={styles.firstLineText}>{firstLine}</Text>
                <Text style={styles.secondLineText}>{secondLine}</Text>
            </View>
            {isDown && (
                <TouchableOpacity
                    onPress={!!onPress && onPress}
                    onLongPress={() => {
                      console.log(secondLine);
                      Vibration.vibrate(commonMorzeActions(secondLine));
                    }}
                    style={styles.asideButton}
                >
                    <Image
                        style={styles.badge}
                        source={require('../../assets/images/badgeIconFirst.png')}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 19,
        paddingRight: 8,
        paddingVertical: 14,
        backgroundColor: '#D7E1CA',
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
        maxWidth: '80%',
        borderBottomLeftRadius: BORDER_RADIUS_CONFIG.MEDIUM,
        marginTop: 8,
    },
    firstLineText: {
        color: '#262A25',
        fontSize: 12,
    },
    secondLineText: {
        color: '#262A25',
        fontSize: 24,
        lineHeight: 29,
    },
    asideButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#262A25',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    badge: {
        alignSelf: 'center',
    }
});

export default InformationComponentLight;
