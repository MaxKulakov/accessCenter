import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
    ImageBackground,
    Vibration,
} from 'react-native';

import BackAction from '../components/BackActionComponent/BackAction';
import ChatItemLight from '../components/ChatItemComponent/ChatItemComponentLight';
import ChatItemDark from '../components/ChatItemComponent/ChatItemComponentDark';

const SmsListScreen = ({navigation}) => {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'John Johnson',
            time: '12:28',
            lastMsg: 'Hi!',
        },
        {
            id: 2,
            name: 'Martin Emery',
            time: '12:27',
            lastMsg: 'How are you?',
        },
        {
            id: 3,
            name: 'Marco Hicks',
            time: '12:26',
            lastMsg: 'How is the weather?',
        },
        {
            id: 4,
            name: 'Max Kulakov',
            time: '12:25',
            lastMsg: 'Its me',
        },
    ]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground
                style={styles.container}
                source={require('../assets/images/background.png')}
            >
                <BackAction
                    title="Chat"
                    onPress={() => {
                        navigation.goBack();
                    }}
                    onLongPress={() => {}}
                />
                <ChatItemLight
                    time={chats[0].time}
                    name={chats[0].name}
                    lastMsg={chats[0].lastMsg}
                    onPress={() => {
                        navigation.push('Current chat screen', {
                            currentInfo: chats[0],
                        });
                    }}
                    onLongPress={() => {}}
                    key={chats[0].id}
                />
                <ChatItemDark
                    time={chats[1].time}
                    name={chats[1].name}
                    lastMsg={chats[1].lastMsg}
                    onPress={() => {
                        navigation.push('Current chat screen', {
                            currentInfo: chats[1],
                        });
                    }}
                    onLongPress={() => {}}
                    key={chats[1].id}
                />
                <ChatItemLight
                    time={chats[2].time}
                    name={chats[2].name}
                    lastMsg={chats[2].lastMsg}
                    onPress={() => {
                        navigation.push('Current chat screen', {
                            currentInfo: chats[2],
                        });
                    }}
                    onLongPress={() => {}}
                    key={chats[2].id}
                />
                <ChatItemDark
                    time={chats[3].time}
                    name={chats[3].name}
                    lastMsg={chats[3].lastMsg}
                    onPress={() => {
                        navigation.push('Current chat screen', {
                            currentInfo: chats[3],
                        });
                    }}
                    onLongPress={() => {}}
                    key={chats[3].id}
                />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 36,
        paddingHorizontal: 16,
        backgroundColor: '#899E78',
    },
});

export default SmsListScreen;
