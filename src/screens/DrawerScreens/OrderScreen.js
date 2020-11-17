import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getNavIcon} from '../../utils/functions';
import Header from '../../components/common/Header';
class OrderScreen extends Component {
  constructor(props) {
    super(props);
  }
  onNavPress = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          icon={getNavIcon()}
          onPress={() => this.onNavPress()}
          title={'My Orders'}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => {
  return {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);
