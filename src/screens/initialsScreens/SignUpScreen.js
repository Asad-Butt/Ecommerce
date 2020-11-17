import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {Colors} from '../../utils/colors';
import {connect} from 'react-redux';
import {setUser} from '../../redux/actions';
import {
  storeUser,
  signUpInFirebase,
  setUserInFirebase,
} from '../../utils/functions';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      loading: false,
    };
  }
  showLoading() {
    this.setState({loading: true});
  }

  hideLoading() {
    this.setState({loading: false});
  }
  signUp = () => {
    const {email, password, name} = this.state;
    const {navigation, setUser} = this.props;
    if (email !== '' && password !== '' && name !== '') {
      //show loading
      this.showLoading();

      signUpInFirebase(email, password)
        .then((response) => {
          console.log('signup response => ', response);
          id = response.user.uid;
          let user = {
            id,
            name,
          };

          setUserInFirebase(id, user)
            .then(() => {
              console.log('saved user in firebase => ', user);
              //hide loading
              this.hideLoading();
              //asyncStorage
              storeUser(user);
              //redux
              setUser(user);
              //moving to DrawerScreen
              navigation.dispatch(StackActions.replace('DrawerStack'));
            })
            .catch((e) => {
              //hide loading
              this.hideLoading();
              alert(e.toLocaleString());
            });
        })
        .catch((e) => {
          //hide loading
          this.hideLoading();
          alert(e.toLocaleString());
        });
    } else {
      alert('Please enter E-mail, Name and Password.');
    }
  };
  render() {
    const {navigation} = this.props;
    const {loading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {loading && (
          <ActivityIndicator
            size="large"
            color={Colors.primary}
            style={styles.loading}
          />
        )}
        <Text style={styles.title}>Sign Up Here</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Name"
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
            placeholderTextColor={Colors.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="E-mail"
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholderTextColor={Colors.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            placeholderTextColor={Colors.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.signUp();
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, {marginTop: 10}]}
          onPress={() => {
            navigation.dispatch(StackActions.replace('LoginScreen'));
          }}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  buttonContainer: {
    width: '70%',
    backgroundColor: Colors.primary,
    borderRadius: 25,
    padding: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  placeholder: {
    color: 'red',
  },
  InputContainer: {
    width: '80%',
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.grey,
    borderRadius: 25,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: Colors.text,
  },
  facebookContainer: {
    width: '70%',
    backgroundColor: '#122',
    borderRadius: 25,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: Colors.white,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
