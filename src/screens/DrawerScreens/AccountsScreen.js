import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Switch,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from '../../utils/colors';
import {
  getNavIcon,
  getBellIcon,
  getCityIcon,
  getSoundIcon,
  getFeedBackIcon,
  getShareIcon,
} from '../../utils/functions';
import {Images} from '../../utils/images';
import Header from '../../components/common/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

let WIDTH = Dimensions.get('window').width;
class AccountsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundSwitchValue: false,
      notificationSwitchValue: false,
      city: 'Gujrat',
    };
  }

  render() {
    const {navigation, user} = this.props;
    const {notificationSwitchValue, soundSwitchValue, city} = this.state;

    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.upperView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}
              style={{flex: 1, paddingLeft: 15}}>
              {getNavIcon()}
            </TouchableOpacity>

            <View style={{flex: 1}}>
              <Text style={styles.title}>Account</Text>
            </View>
            <View style={{flex: 1, paddingRight: 10}}></View>
          </View>
          <View style={styles.imageStyle}>
            <Image source={Images.pic} style={styles.profile} />
            <Text style={styles.name}>{user.name}</Text>
          </View>
        </View>

        <ScrollView style={styles.lowerView}>
          <View style={styles.viewHeader}>
            <Text style={styles.viewHeaderText}>PROFILE</Text>
          </View>

          <View style={styles.item}>
            <View style={styles.innerContainer}>
              <View style={styles.iconView}>
                <View style={styles.iconStyle}>{getBellIcon(25)}</View>
              </View>
              <View style={styles.viewDetail}>
                <View style={styles.rightView}>
                  <View style={styles.innerLeft}>
                    <Text style={styles.itemName}>Notifications</Text>
                  </View>
                  <View style={styles.innerRight}>
                    <Text style={styles.innerRightText}>
                      {notificationSwitchValue === true ? 'On' : 'Off'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.innerContainer}>
              <View style={styles.iconView}>
                <View style={styles.iconStyle}>{getCityIcon(25)}</View>
              </View>
              <View style={styles.viewDetail}>
                <View style={styles.rightView}>
                  <View style={styles.innerLeft}>
                    <Text style={styles.itemName}>City</Text>
                  </View>
                  <View style={styles.innerRight}>
                    <Text style={styles.innerRightText}>{city}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.viewHeader}>
            <Text style={styles.viewHeaderText}>ACCOUNT</Text>
          </View>

          <View style={styles.item}>
            <View style={styles.innerContainer}>
              <View style={styles.iconView}>
                <View style={styles.iconStyle}>{getSoundIcon(25)}</View>
              </View>
              <View style={styles.viewDetail}>
                <View style={styles.rightView}>
                  <View style={styles.innerLeft}>
                    <Text style={styles.itemName}>Sound</Text>
                  </View>
                  <View style={styles.innerRight}>
                    <Switch
                      trackColor={{
                        true: Colors.primary,
                        false: Colors.switchOff,
                      }}
                      thumbColor={Colors.white}
                      thumbTintColor={Colors.white}
                      onValueChange={(soundSwitchValue) =>
                        this.setState({soundSwitchValue})
                      }
                      value={soundSwitchValue}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.innerContainer}>
              <View style={styles.iconView}>
                <View style={styles.iconStyle}>{getBellIcon(25)}</View>
              </View>
              <View style={styles.viewDetail}>
                <View style={styles.rightView}>
                  <View style={styles.innerLeft}>
                    <Text style={styles.itemName}>Notifications</Text>
                  </View>
                  <View style={styles.innerRight}>
                    <Switch
                      trackColor={{
                        true: Colors.primary,
                        false: Colors.switchOff,
                      }}
                      thumbColor={Colors.white}
                      thumbTintColor={Colors.white}
                      onValueChange={(notificationSwitchValue) =>
                        this.setState({notificationSwitchValue})
                      }
                      value={notificationSwitchValue}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.support}>
            <View style={styles.item}>
              <View style={styles.innerContainer}>
                <View style={styles.iconView}>
                  <View style={styles.iconStyle}>{getFeedBackIcon(25)}</View>
                </View>
                <View style={styles.viewDetail}>
                  <View style={styles.rightView}>
                    <View style={styles.innerLeft}>
                      <Text style={styles.itemName}>Support</Text>
                    </View>
                    <View style={styles.innerRight}></View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.innerContainer}>
                <View style={styles.iconView}>
                  <View style={styles.iconStyle}>{getShareIcon(25)}</View>
                </View>
                <View style={styles.viewDetail}>
                  <View style={styles.rightView}>
                    <View style={styles.innerLeft}>
                      <Text style={styles.itemName}>Share Feedback</Text>
                    </View>
                    <View style={styles.innerRight}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.accountsBackGroundColor,
  },
  support: {
    marginTop: 15,
  },
  iconStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerView: {
    height: '100%',
    width: WIDTH,
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  viewHeader: {
    width: WIDTH,
  },
  viewHeaderText: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: '500',
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 10,
    fontFamily: 'BalooPaaji2-SemiBold',
  },
  upperView: {
    width: WIDTH,
    height: 180,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
  },
  name: {
    color: Colors.white,
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: 'BalooPaaji2-Bold',
  },
  imageStyle: {
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    alignSelf: 'center',
    color: Colors.white,
    fontSize: 19,
    paddingTop: 2,
    fontFamily: 'BalooPaaji2-SemiBold',
  },
  socialView: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    height: 50,
    marginVertical: 1,
    justifyContent: 'flex-start',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    height: 60,
    marginVertical: 1,
  },
  iconView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDetail: {
    width: '80%',
    height: '100%',
  },
  rightView: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerLeft: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRight: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  innerRightText: {
    color: Colors.switchLabel,
    fontSize: 15,
    fontWeight: '500',
    paddingRight: 10,
    fontFamily: 'BalooPaaji2-Regular',
  },
  itemName: {
    color: Colors.text,
    fontSize: 16,
    marginLeft: 20,
    fontWeight: '400',
    fontFamily: 'BalooPaaji2-Regular',
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsScreen);
