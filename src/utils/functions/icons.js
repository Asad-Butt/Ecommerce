import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../colors';
export const getHomeIcon = (index) => {
  return (
    <AntDesign
      name={'home'}
      size={17}
      color={index === 0 ? Colors.white : Colors.unSelectColor}
    />
  );
};
export const getCartIcon = (index) => {
  return (
    <AntDesign
      name={'shoppingcart'}
      size={17}
      color={index === 1 ? Colors.white : Colors.unSelectColor}
    />
  );
};
export const getChatIcon = (index) => {
  return (
    <Entypo
      name={'chat'}
      size={17}
      color={index === 2 ? Colors.white : Colors.unSelectColor}
    />
  );
};
export const getAccountIcon = (index) => {
  return (
    <AntDesign
      name={'profile'}
      size={17}
      color={index === 3 ? Colors.white : Colors.unSelectColor}
    />
  );
};
export const getLogoutIcon = () => {
  return <Feather name={'log-out'} size={17} color={Colors.unSelectColor} />;
};
export const getNavIcon = () => {
  return <FontAwesome name={'navicon'} size={24} color={Colors.white} />;
};
export const getSearchIcon = (size) => {
  return <FontAwesome name={'search'} size={size} color={Colors.white} />;
};
export const getQrCodeIcon = (size) => {
  return <FontAwesome name={'qrcode'} size={size} color={Colors.white} />;
};
export const getBellIcon = (size) => {
  return (
    <Ionicons
      name={'ios-notifications-outline'}
      size={size}
      color={Colors.primary}
    />
  );
};
export const getCityIcon = (size) => {
  return <EvilIcons name={'location'} size={size} color={Colors.primary} />;
};
export const getSoundIcon = (size) => {
  return <AntDesign name={'sound'} size={size} color={Colors.primary} />;
};
export const getFeedBackIcon = (size) => {
  return (
    <AntDesign name={'customerservice'} size={size} color={Colors.primary} />
  );
};
export const getShareIcon = (size) => {
  return (
    <MaterialCommunityIcons
      name={'share-outline'}
      size={size}
      color={Colors.primary}
    />
  );
};
