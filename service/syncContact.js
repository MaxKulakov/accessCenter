import Contacts from 'react-native-contacts';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
      Contacts.getAll().then(contacts => {
        setContacts(contacts);
      });
    }, []);
    const keyExtractor = (item, idx) => {
      return item?.recordID?.toString() || idx.toString();
    };
    const renderItem = ({item, index}) => {
      return <Contact contact={item}/>;
    };
    return (
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    );
  };

export default ContactsList;