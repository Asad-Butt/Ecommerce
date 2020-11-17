import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {getNavIcon, getQrCodeIcon} from '../../utils/functions';
import {Images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import SearchBar from '../../components/common/SearchBar';
const DEVICE_WIDTH = Dimensions.get('window').width;
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      data: [
        {id: 1, name: 'Pizza', image: Images.pizza},
        {id: 2, name: 'Chicken', image: Images.chicken},
        {id: 3, name: 'Burger', image: Images.burger},
      ],
    };
  }
  onNavPress = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };
  renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.foodCard}>
          <ImageBackground
            source={item.image}
            style={styles.promoImage}
            imageStyle={{borderRadius: 15}}
            blurRadius={2}
            resizeMode={'cover'}>
            <Text style={styles.foodTitleText}>{item.name}</Text>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  render() {
    const {searchText, data} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TouchableOpacity
            style={styles.leftStyle}
            onPress={() => this.onNavPress()}>
            {getNavIcon()}
          </TouchableOpacity>
          <SearchBar
            text={searchText}
            onChange={(searchText) => {
              this.setState({searchText});
            }}
          />
          <TouchableOpacity style={styles.rightIcon}>
            {getQrCodeIcon(27)}
          </TouchableOpacity>
        </View>
        <Text style={styles.smallListTitle}>Featured items</Text>
        <View style={{marginTop: 10}}>
          <FlatList
            contentContainerStyle={{paddingLeft: 10, paddingRight: 10}}
            data={data}
            renderItem={this.renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => `${item}`}
          />
        </View>
      </View>
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
  smallListTitle: {
    color: Colors.text,
    fontSize: 18,
    marginTop: 10,
    marginLeft: 18,
    fontFamily: 'BalooPaaji2-Bold',
  },
  main: {
    backgroundColor: Colors.primary,
    width: DEVICE_WIDTH,
    height: 65,
    flexDirection: 'row',
  },
  leftStyle: {
    padding: 10,
    justifyContent: 'center',
  },
  rightIcon: {justifyContent: 'center', alignItems: 'flex-end', width: '11%'},
  foodCard: {
    width: DEVICE_WIDTH * 0.34,
    height: 145,
    margin: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  promoImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  foodTitleText: {
    fontSize: 26,
    color: Colors.white,
    fontFamily: 'BalooPaaji2-SemiBold',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
