import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Vibration,} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const MessageFromMe = ({body, time, onPress, onLongPress}) => {
    return (
      <TouchableOpacity
          style={styles.container}
          onPress={onPress}
          onLongPress={() => {
            console.log(body);
            Vibration.vibrate(commonMorzeActions(body));
          }}
      >
            <View style={styles.topRowContainer}>
                <Text style={styles.titleText}>{time}</Text>
                <Text style={[
                    styles.titleText,
                    {marginHorizontal: 10},
                ]}>You</Text>
            </View>
            <View>
                <Text style={styles.valueText}>{body}</Text>
            </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#D7E1CA',
        borderRadius: 35,
        paddingVertical: 10,
        paddingLeft: 19,
        paddingRight: 8,
        alignSelf: 'flex-end',
        marginBottom: 8,
    },
    topRowContainer: {
        flexDirection: 'row',
        maxWidth: '35%',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
    },
    titleText: {
        color: '#262A25',
        fontSize: 12,
    },
    valueText: {
        color: '#262A25',
        fontSize: 24,
        lineHeight: 29,
        textAlign: 'right',
        marginRight: 10,
    }
});

export default MessageFromMe;
