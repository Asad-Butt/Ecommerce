import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {Colors} from '../.././utils/colors';
import {retrieveUser, storeUser} from '../../utils/functions';
import {StackActions} from '@react-navigation/native';
import {setUser} from '../../redux/actions';
import {connect} from 'react-redux';
class SplashScreen extends Component {
  componentDidMount() {
    this.checkUserLogin();
  }
  checkUserLogin = async () => {
    const {navigation, setUser} = this.props;
    //getting from asyncStorage
    let user = await retrieveUser();
    if (user !== null) {
      console.log('retrieved user from asyncStorage => ', user);
      //redux
      setUser(user);

      setTimeout(() => {
        //moving to DrawerScreen
        navigation.dispatch(StackActions.replace('DrawerStack'));
      }, 2000);
    } else {
      setTimeout(() => {
        //moving to LoginScreen
        navigation.dispatch(StackActions.replace('LoginStack'));
      }, 2000);
    }
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'BalooPaaji2-Bold',
            fontSize: 20,
          }}>
          E-Commerce
        </Text>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
