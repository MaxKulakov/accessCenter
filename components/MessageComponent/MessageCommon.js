import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Vibration,} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const MessageCommon = ({time, body, name, onPress, onLongPress}) => {
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
                <Text style={[
                    styles.titleText,
                    {marginRight: 10},
                ]}>{time}</Text>
                <Text style={styles.titleText}>{name}</Text>
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
        backgroundColor: '#262A25',
        borderRadius: 35,
        paddingVertical: 10,
        paddingLeft: 19,
        paddingRight: 8,
        alignSelf: 'flex-start',
        marginBottom: 8,
    },
    topRowContainer: {
        flexDirection: 'row',
        maxWidth: '35%',
        justifyContent: 'space-between',
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

export default MessageCommon;
