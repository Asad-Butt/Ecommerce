import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors} from '../../utils/colors';
import {getSearchIcon} from '../../utils/functions';
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class SearchBar extends Component {
  render() {
    const {text, onChange} = this.props;
    return (
      <View style={styles.main}>
        {getSearchIcon(17)}
        <TextInput
          value={text}
          onChange={(text) => onChange(text)}
          style={styles.input}
          placeholder={'Search'}
          keyboardType={'default'}
          placeholderTextColor={Colors.white}
          returnKeyType="done"
          dense={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.searchBackground,
    height: 35,
    width: '70%',
    alignSelf: 'center',
    marginLeft: 7,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 7,
  },
  input: {
    fontSize: 16,

    height: 46,
    fontFamily: 'BalooPaaji2-Regular',
    color: Colors.white,
    alignSelf: 'center',
    width: '97%',
    paddingLeft: 10,

    alignSelf: 'center',
  },
});
