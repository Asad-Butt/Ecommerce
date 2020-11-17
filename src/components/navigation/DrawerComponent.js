import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DrawerButton from './DrawerButton';
import {Colors} from '../../utils/colors';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import {Images} from '../../utils/images';
import {clearUser} from '../../redux/actions';
import {
  clearLocalStorage,
  logoutFromFirebase,
  getHomeIcon,
  getCartIcon,
  getChatIcon,
  getAccountIcon,
  getLogoutIcon,
} from '../../utils/functions';
import AwesomeAlert from 'react-native-awesome-alerts';
import AlertComponent from '../common/AlertComponent';
class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {showAlert: false};
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  logout = () => {
    const {navigation, clearUser} = this.props;
    this.hideAlert();
    //close Drawer
    navigation.closeDrawer();
    logoutFromFirebase()
      .then(() => {
        //asyncStorage
        clearLocalStorage();
        //redux
        clearUser();
        //move to LoginScreen
        navigation.dispatch(StackActions.replace('LoginStack'));
      })
      .catch((e) => alert(e.toLocaleString()));
  };

  render() {
    const {navigation, user} = this.props;
    const {index, routeName} = this.props.state;
    const {showAlert} = this.state;
    return (
      <DrawerContentScrollView
        {...this.props}
        contentContainerStyle={{flex: 1}}>
        <View style={styles.profileView}>
          <Image source={Images.pic} style={styles.profile} />
          <Text style={styles.nameText}>{user.name}</Text>
        </View>
        <View style={styles.line} />
        <DrawerButton
          title="Home"
          onPress={() => {
            if (index === 0) {
              navigation.closeDrawer();
            } else {
              navigation.navigate('HomeScreen');
            }
          }}
          textColor={index == 0 ? Colors.white : Colors.unSelectColor}
          icon={getHomeIcon(index)}
        />
        <View>
          <View
            style={[
              styles.badgeView,
              {
                backgroundColor:
                  index == 1 ? Colors.white : Colors.unSelectColor,
              },
            ]}>
            <Text style={styles.badgeText}>0</Text>
          </View>
          <DrawerButton
            title="Order"
            onPress={() => {
              if (index === 1) {
                navigation.closeDrawer();
              } else {
                navigation.navigate('OrderScreen');
              }
            }}
            textColor={index == 1 ? Colors.white : Colors.unSelectColor}
            icon={getCartIcon(index)}
          />
        </View>
        <DrawerButton
          title="Chats"
          onPress={() => {
            if (index === 2) {
              navigation.closeDrawer();
            } else {
              navigation.navigate('ChatsScreen');
            }
          }}
          textColor={index == 2 ? Colors.white : Colors.unSelectColor}
          icon={getChatIcon(index)}
        />
        <DrawerButton
          title="Account"
          onPress={() => {
            if (index === 3) {
              navigation.closeDrawer();
            } else {
              navigation.navigate('AccountsScreen');
            }
          }}
          textColor={index == 3 ? Colors.white : Colors.unSelectColor}
          icon={getAccountIcon(index)}
        />
        <DrawerButton
          title="Logout"
          onPress={() => {
            this.showAlert();
          }}
          textColor={Colors.unSelectColor}
          icon={getLogoutIcon()}
        />
        <Text style={styles.versionText}>V.0.0.1</Text>
        {showAlert && (
          <AlertComponent
            isVisible={showAlert}
            title={'Logout'}
            message={'Are you sure ?'}
            cancelText={'No, cancel'}
            confirmText={'Yes, Log out'}
            confirmButtonColor={Colors.primary}
            onConfirmPressed={() => this.logout()}
            onCancelPressed={() => this.hideAlert()}
          />
        )}
      </DrawerContentScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => {
  return {
    clearUser: () => dispatch(clearUser),
  };
};

const styles = StyleSheet.create({
  versionText: {
    fontSize: 14,
    textAlign: 'left',
    letterSpacing: 1,
    color: Colors.white,
    position: 'absolute',
    bottom: 20,
    left: 30,
    fontFamily: 'BalooPaaji2-SemiBold',
  },
  profileView: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  nameText: {
    fontFamily: 'BalooPaaji2-SemiBold',
    color: Colors.white,
    fontSize: 16,
    marginLeft: 10,
  },
  line: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.5,
    width: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  badgeView: {
    position: 'absolute',
    left: 130,
    top: 22,
    borderRadius: 20,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 1,
  },
  badgeText: {
    fontFamily: 'BalooPaaji2-Regular',
    fontSize: 11,
    color: Colors.primary,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);
