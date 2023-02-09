
import * as React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UserScreen = ({ navigation }) => {


  const navigationHandler = () => {
    navigation.navigate('Album')
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.mt10mb16ml16}>
        <Text style={styles.subHeading}>Albums</Text>
      </View>

      <TouchableOpacity onPress={navigationHandler}>
        <View style={{ height: 160, width: 160, backgroundColor: 'green', marginLeft: 16 }}>

        </View>

        <View style={{ marginLeft: 16 }}>
          <Text style={styles.text2}>Album1</Text>
          <Text style={styles.text}>21</Text>
        </View>
      </TouchableOpacity>






    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 700,
    fontSize: 24,
    color: '#000000',

  },
  container: {
    marginLeft: 16,
    marginTop: 16
  },
  subHeading: {
    fontWeight: 700,
    fontSize: 18,
    color: '#000000'
  },
  mt10mb16ml16: {
    marginTop: 20,
    marginBottom: 16,
    marginLeft: 16
  },
  user: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.22,
    borderColor: '#DEDEDE',
    borderWidth: 1.2,
    borderRadius: 6,
    padding: 16,
    marginBottom: 16

  },

  text: {
    fontWeight: 500,
    fontSize: 12,
    color: '#696974'
  },

  text2: {
    fontWeight: 500,
    fontSize: 12,
    color: '#000000'
  }
});

export default UserScreen;


