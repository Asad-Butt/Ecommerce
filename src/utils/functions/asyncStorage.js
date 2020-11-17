import AsyncStorage from '@react-native-community/async-storage';
export const storeUser = async (value) => {
  try {
    var jsonOfItem = await AsyncStorage.setItem('user', JSON.stringify(value));

    return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
};
export const retrieveUser = async () => {
  try {
    const retrievedItem = await AsyncStorage.getItem('user');
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
};

export const clearLocalStorage = () => {
  AsyncStorage.clear();
};
