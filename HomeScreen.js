
import * as React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {

  const navigationHandler = () => {
    navigation.navigate('User')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Photos</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.mt10mb16}>
        <Text style={styles.subHeading}>People</Text>
      </View>

      <TouchableOpacity onPress={navigationHandler}>

      <View>
        <View style={styles.user}>
          <Text style={styles.subHeading}>Abhishek Sharma</Text>
          <Text style={styles.text}>Abhishek Sharma</Text>
          <Text style={styles.text}>8076051467</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 24,
              marginBottom: 16
            }}
          />

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.text}>Company</Text><Text style={styles.text}>16</Text>
          </View>
        </View>
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
  mt10mb16: {
    marginTop: 10,
    marginBottom: 16
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
  }
});

export default HomeScreen;


