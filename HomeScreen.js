
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
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
      <View style={styles.user}>
      <Text style={styles.subHeading}>Abhishek Sharma</Text>
      </View>
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
    width: 380,
height: 166,
borderColor: '#DEDEDE',
borderWidth: 1.2,
borderRadius: 6
  }
});

export default HomeScreen;


