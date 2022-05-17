import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import screens from '../screens';

import HomeScreen from '../screens/HomeScreen';
import SmsScreen from '../screens/SmsListScreen';
import ContactsScreen from '../screens/ContactsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SearchScreen from '../screens/SearchScreen';
import AuthorizationScreen from '../screens/AuthorizationScreen';

const stackScreens = {
    'Home screen': {
        screen: screens.HomeScreen,
    },
    'Sms screen': {
        screen: screens.SmsListScreen,
    },
    'Contacts screen': {
        screen: screens.ContactsScreen,
    },
    'Locations screen': {
        screen: screens.LocationsScreen,
    },
    'Settings screen': {
        screen: screens.SettingsScreen,
    },
    'Current chat screen': {
        screen: screens.SmsCurrentChatScreen,
    },
    'Calendar screen': {
        screen: screens.CalendarScreen,
    },
    'Search screen': {
        screen: screens.SearchScreen,
    },
    'Authorization screen': {
        screen: screens.AuthorizationScreen,
    },
};

const Stack = createStackNavigator(stackScreens, {
    defaultNavigationOptions: {
        headerShown: false,
    }
});

export default createAppContainer(Stack);
