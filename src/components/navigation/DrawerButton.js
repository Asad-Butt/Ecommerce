import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default class DrawerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {icon, onPress, textColor, title} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btnStyle}>
          {icon}
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              marginLeft: 14,
              color: textColor,
              fontFamily: 'BalooPaaji2-SemiBold',
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: 'row',
    width: '90%',
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
