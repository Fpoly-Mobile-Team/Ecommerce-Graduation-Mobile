import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
  setItem: async (key, data) => {
    data = typeof data === 'string' ? data : JSON.stringify(data);
    try {
      await AsyncStorage.setItem(key, data);
    } catch (e) {
      console.error(e);
    }
  },

  getItem: async key => {
    try {
      let value = await AsyncStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    } catch (e) {
      return null;
    }
  },

  removeItem: async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  },
};

export default Storage;
