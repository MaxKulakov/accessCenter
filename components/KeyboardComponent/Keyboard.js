import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Vibration, TouchableOpacity, TextInput} from 'react-native';
import {commonMorzeActions} from '../../morze/morzeActions';

const Keyboard = ({onPress, onLongPress, label}) => {
    const [text, onChangeText] = React.useState(""); // Input text here

    return (
        <SafeAreaView
        style={styles.keyboard}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    keyboard: {
        backgroundColor: '#262A25',
        marginTop: 150,
        borderRadius: 35,
    },
    input: {
        backgroundColor: '#D7E1CA',
        height: 70,
        borderRadius: 35,
        margin: 12,
        borderWidth: 2,
        borderColor: '#262A25',
        padding: 10,
        marginTop: 30,
    },
    container: {
        paddingHorizontal: 50,
        paddingVertical: 21,
        width: 190,
        borderRadius: 35,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
        
    },
    textMessage: {
        color: '#D7E1CA',
        fontSize: 16,
        alignSelf: 'center',
    }
});

export default Keyboard;
