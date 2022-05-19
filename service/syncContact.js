import Contacts from 'react-native-contacts';

export default {
    getContactsList(){
        Contacts.getAll().then(contacts => {
            setContacts(contacts);
            console.log(contacts);
        });
    },
}
  