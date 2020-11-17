import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {Colors} from '../../utils/colors';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
export default class AlertComponent extends Component {
  render() {
    const {
      isVisible,
      title,
      message,
      cancelText,
      confirmButtonColor,
      confirmText,
      onCancelPressed,
      onConfirmPressed,
    } = this.props;
    return (
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={isVisible}>
          <View style={styles.centeredView}>
            <View
              style={{
                backgroundColor: Colors.white,
                height: height * 0.23,
                width: width * 0.6,
                alignSelf: 'center',
                borderRadius: 5,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.text,
                  fontSize: 18,
                  marginTop: 25,
                  fontFamily: 'BalooPaaji2-',
                }}>
                {title}
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  color: Colors.cancelText,
                  fontFamily: 'BalooPaaji2-Regular',
                }}>
                {message}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <TouchableOpacity
                  onPress={onCancelPressed}
                  style={{
                    backgroundColor: Colors.cancelText,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    borderRadius: 5,
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontFamily: 'BalooPaaji2-Regular',
                    }}>
                    {cancelText}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onConfirmPressed}
                  style={{
                    backgroundColor: Colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    borderRadius: 5,
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontFamily: 'BalooPaaji2-Regular',
                    }}>
                    {confirmText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
