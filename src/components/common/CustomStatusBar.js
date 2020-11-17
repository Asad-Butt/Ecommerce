import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Colors} from '../../utils/colors';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const CustomStatusBar = (props) => {
  return (
    <View style={styles.barStyle}>
      <StatusBar
        translucent
        backgroundColor={Colors.primary}
        {...props}
        barStyle="light-content"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: Colors.primary,
  },
});

export default CustomStatusBar;
