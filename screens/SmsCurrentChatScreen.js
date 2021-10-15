import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
} from 'react-native';

import BackAction from '../components/BackActionComponent/BackAction';
import MessageCommon from '../components/MessageComponent/MessageCommon';
import MessageFromMe from '../components/MessageComponent/MessageFromMe';

const SmsCurrentChatScreen = ({navigation}) => {
    const {currentInfo} = navigation.state.params;
    const [messages, setMessages] = useState([
        {
            id: 1,
            body: 'Hello my dear friends!',
            time: '12:28',
            isFromMe: true,
        },
        {
            id: 2,
            body: 'Hi! How are you?',
            time: '12:29',
            isFromMe: false,
            name: currentInfo.name,
        },
        {
            id: 3,
            body: 'Im fine, are you?',
            time: '12:30',
            isFromMe: true,
        },
    ]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground
                style={styles.container}
                source={require('../assets/images/background.png')}
            >
                <BackAction
                    title={currentInfo.name}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
                <ScrollView>
                    <MessageFromMe
                        body={messages[0].body}
                        time={messages[0].time}
                        key={messages[0].id}
                    />
                    <MessageCommon
                        body={messages[1].body}
                        time={messages[1].time}
                        name={messages[1].name}
                        key={messages[1].id}
                    />
                    <MessageFromMe
                        body={messages[2].body}
                        time={messages[2].time}
                        key={messages[2].id}
                    />
                </ScrollView>
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

export default SmsCurrentChatScreen;
