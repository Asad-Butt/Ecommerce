import React from 'react';
import {View, Dimensions} from 'react-native';
let Spinner = require('react-native-spinkit');
import {Colors} from '../../utils/colors';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
export default function Loading({isVisible}) {
  return (
    <Spinner
      style={{
        position: 'absolute',
        top: height * 0.5,
        marginLeft: width * 0.5,
      }}
      isVisible={isVisible}
      size={35}
      type={'ChasingDots'}
      color={Colors.primary}
    />
  );
}
