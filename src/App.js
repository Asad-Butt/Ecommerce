import React, {Component} from 'react';
import {Text, SafeAreaView, View, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store/store';
import {Colors} from './utils/colors';
import CustomStatusBar from './components/common/CustomStatusBar';
TextInput.defaultProps.selectionColor = Colors.primary;
console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CustomStatusBar />
        <AppNavigator />
      </Provider>
    );
  }
}
