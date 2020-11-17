import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils/colors';

const DEVICE_WIDTH = Dimensions.get('window').width;
export default class Header extends Component {
  render() {
    const {onPress, title, icon} = this.props;
    return (
      <View style={styles.main}>
        <View style={styles.smallView}>
          <TouchableOpacity style={styles.iconStyle} onPress={onPress}>
            {icon}
          </TouchableOpacity>
        </View>
        <View style={styles.smallView}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.smallView}>
          <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.primary,
    width: DEVICE_WIDTH,
    height: 45,
    flexDirection: 'row',
  },
  iconStyle: {
    padding: 10,
    justifyContent: 'center',
  },
  smallView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 1,
    color: Colors.white,
    fontFamily: 'BalooPaaji2-Bold',
  },
});
