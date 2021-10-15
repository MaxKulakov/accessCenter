import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Vibration,
} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';


const BackAction = ({
    title,
    onPress,
    onLongPress,
    icon = null,
}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        onLongPress={() => {
          console.log(title);
          Vibration.vibrate(commonMorzeActions(title));
        }}
      >
        <View style={styles.container}>
                <View>
                    <View style={styles.topRow}>
                        <Image source={require('../../assets/images/backArrow.png')} />
                        <Text style={styles.topRowText}>Back</Text>
                    </View>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                {!!icon && (
                    <View />
                )}

        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: '70%',
        backgroundColor: '#262A25',
        height: 70,
        paddingVertical: 10,
        paddingLeft: 19,
        paddingRight: 8,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        marginBottom: 36,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topRowText: {
        color: '#D7E1CA',
        fontSize: 12,
        marginLeft: 5,
    },
    titleText: {
        color: '#D7E1CA',
        fontSize: 24,
        lineHeight: 29,
    },
});

export default BackAction;
