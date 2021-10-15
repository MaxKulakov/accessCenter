import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight,
    Vibration,
} from 'react-native';

const MainScreenListItem = ({item}) => {
    return (
        <TouchableHighlight
            underlayColor="#D7E1CA"
            style={styles.container}
        >
            <Text>{item.title}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        paddingVertical: 10,
        paddingHorizontal: 16,
        width: 120,
        height: 120,
        borderRadius: 35,
        marginVertical: 4,
        marginHorizontal: 2,
        justifyContent: 'flex-end',
    },
});

export default MainScreenListItem;
