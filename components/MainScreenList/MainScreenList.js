import React from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity,} from 'react-native';

import MainScreenListItem from './MainScreenListItem';

const MainScreenList = ({data}) => {
    const renderBadge = ({item}) => {
        return <MainScreenListItem item={item} />;
    };

    const keyExtractor = item => item.id;

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderBadge}
                keyExtractor={keyExtractor}
                numColumns={3}
                contentContainerStyle={styles.listLayout}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#555',
        alignItems: 'center',
    },
});

export default MainScreenList;
