import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.error(err);
    }
}

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        } else {
            throw Error(`There is no such item with key: ${key}`);
        }
    } catch (err) {
        console.error(err);
    }
};

export default {
    storeData,
    getData,
};
