import React from 'react';
import {StyleSheet,
        View,
        Text,
        Image,
        TouchableOpacity,
        Vibration,
} from 'react-native';
import DateService from '../../service/dateTime';
import {commonMorzeActions} from '../../morze/morzeActions';

const CurrentTime = ({onPress, onLongPress}) => {
    return (
      <TouchableOpacity
        onLongPress={() => {
          console.log(DateService.getCurrentTime())
          Vibration.vibrate(commonMorzeActions(DateService.getCurrentTime()));
        }}
        style={styles.container}
      >
            <View style={styles.timeView}>
                <Text style={styles.timeText}>{DateService.getCurrentTime()}</Text>
            </View>
            <View style={styles.clockView}>
                <Image source={require('../../assets/images/clock.png')} />
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
        width: 190,
        marginTop: 8,
    },
    timeView: {
        backgroundColor: '#D7E1CA',
        paddingVertical: 21,
        paddingHorizontal: 45,
        borderRadius: 35,
    },
    timeText: {
        fontSize: 12,
        color: '#262A25',
    },
    clockView: {
        backgroundColor: '#D7E1CA',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 35,
    },
});

export default CurrentTime;
