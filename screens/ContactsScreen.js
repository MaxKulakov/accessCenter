import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
    ImageBackground,
    Linking
} from 'react-native';

import BackAction from '../components/BackActionComponent/BackAction';
import ContactItemLight from '../components/ContactItemComponent/ContactItemComponentLight';
import ContactItemDark from '../components/ContactItemComponent/ContactItemComponentDark';
import ContactSyncComponent from '../components/ContactItemComponent/ContactSyncComponent';
import Button from '../components/ButtonComponent/Button';
import Contacts from 'react-native-contacts';


const ContactsListScreen = ({navigation}) => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: 'John Johnson',
            phoneNum: '+7 937 638-21-99',
        },
        {
            id: 2,
            name: 'Martin Emery',
            phoneNum: '+7 937 638-21-98',
        },
        {
            id: 3,
            name: 'Marco Hicks',
            phoneNum: '+7 937 638-21-97',
        },
        {
            id: 4,
            name: 'Max Kulakov',
            phoneNum: '+7 937 638-21-96',
        },
        {
            id: 5,
            name: 'Contacts',
            phoneNum: 'Sync Conctacts',
        },
    ]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground
                style={styles.container}
                source={require('../assets/images/background.png')}
            >
                <BackAction
                    title="Contacts"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                
                <ContactSyncComponent
                    name={contacts[4].name}
                    phoneNum={contacts[4].phoneNum}
                    onPress={() => {
                        //Contacts
                        console.log(Contacts.ContactList)
                    }}
                />
                <ContactItemLight
                    name={contacts[0].name}
                    phoneNum={contacts[0].phoneNum}
                    onPress={() => {
                      Linking.openURL(`tel:${contacts[0].phoneNum}`)
                    }}
                />
                <ContactItemDark
                    name={contacts[1].name}
                    phoneNum={contacts[1].phoneNum}
                    onPress={() => {
                      Linking.openURL(`tel:${contacts[1].phoneNum}`)
                    }}
                />
                <ContactItemLight
                    name={contacts[2].name}
                    phoneNum={contacts[2].phoneNum}
                    onPress={() => {
                      Linking.openURL(`tel:${contacts[2].phoneNum}`)
                    }}
                />
                <ContactItemDark
                    name={contacts[3].name}
                    phoneNum={contacts[3].phoneNum}
                    onPress={() => {
                      var textBody = `Hi, ${contacts[3].name}!`;
                      var getPlatform = `${Platform.OS === "ios" ? "&" : "?"}`;
                      Linking.openURL(`sms:${contacts[3].phoneNum}${getPlatform}body=${textBody}`)
                    }}
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

export default ContactsListScreen;
